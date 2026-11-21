import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SyntheticModule, SourceTextModule, createContext } from 'node:vm';
import { test } from 'node:test';

const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const generationTime = '2026-01-01T00:00:00.000Z';

async function requestLatest(parameter) {
    const notifications = [];
    const errors = [];
    const context = createContext({
        setTimeout,
        clearTimeout,
        console: {
            error: (error) => errors.push(error),
            warn: () => {}
        },
        fetch: (url, options) => {
            assert.equal(url, 'http://yamcs.invalid/api/processors/test/realtime/parameters:batchGet');
            assert.equal(options.method, 'POST');
            assert.deepEqual(JSON.parse(options.body), {
                id: [{ name: '/fixture/parameter' }],
                fromCache: true
            });

            return Promise.resolve({
                json: () => Promise.resolve({ value: parameter === undefined ? [] : [parameter] })
            });
        }
    });
    const modules = new Map();

    async function loadModule(path) {
        if (!modules.has(path)) {
            const source = await readFile(projectRoot + path, 'utf8');
            const options = {
                context,
                identifier: path
            };
            let module;
            if (path.endsWith('.json')) {
                module = new SyntheticModule(['default'], () => {
                    module.setExport('default', JSON.parse(source));
                }, options);
            } else {
                module = new SourceTextModule(source, options);
            }

            modules.set(path, module);
        }

        return modules.get(path);
    }

    const provider = await loadModule('src/providers/latest-telemetry-provider.js');
    await provider.link((specifier, parent) => {
        assert.ok(specifier.startsWith('.'));

        return loadModule(posix.normalize(posix.join(posix.dirname(parent.identifier), specifier)));
    });
    await provider.evaluate();
    const instance = new provider.namespace.default({
        url: 'http://yamcs.invalid/',
        instance: 'test',
        openmct: { notifications: { error: (message) => notifications.push(message) } }
    });
    const datum = await instance.requestLatest({
        identifier: { key: '~fixture~parameter' },
        name: 'parameter'
    });

    return {
        datum: datum === undefined ? undefined : JSON.parse(JSON.stringify(datum)),
        notifications,
        errors
    };
}

test('latest telemetry preserves NOT_RECEIVED without an engineering value', async () => {
    const result = await requestLatest({
        id: { name: '/fixture/parameter' },
        generationTime,
        acquisitionStatus: 'NOT_RECEIVED'
    });

    assert.deepEqual(result, {
        datum: {
            id: '~fixture~parameter',
            acquisitionStatus: 'NOT_RECEIVED',
            timestamp: generationTime,
            value: 'Unsupported Data Type'
        },
        notifications: [],
        errors: []
    });
});

test('latest scalar telemetry retains its value', async () => {
    const result = await requestLatest({
        id: { name: '/fixture/parameter' },
        generationTime,
        acquisitionStatus: 'ACQUIRED',
        engValue: {
            type: 'STRING',
            stringValue: 'test'
        }
    });

    assert.deepEqual(result, {
        datum: {
            id: '~fixture~parameter',
            acquisitionStatus: 'ACQUIRED',
            timestamp: generationTime,
            value: 'test'
        },
        notifications: [],
        errors: []
    });
});

test('latest aggregate telemetry retains its flattened member keys', async () => {
    const result = await requestLatest({
        id: { name: '/fixture/parameter' },
        generationTime,
        acquisitionStatus: 'ACQUIRED',
        engValue: {
            type: 'AGGREGATE',
            aggregateValue: {
                name: ['member'],
                value: [{
                    type: 'STRING',
                    stringValue: 'test'
                }]
            }
        }
    });

    assert.deepEqual(result, {
        datum: {
            id: '~fixture~parameter',
            acquisitionStatus: 'ACQUIRED',
            timestamp: generationTime,
            'parameter.member': 'test'
        },
        notifications: [],
        errors: []
    });
});

test('latest telemetry keeps an absent cached result absent', async () => {
    assert.deepEqual(await requestLatest(undefined), {
        datum: undefined,
        notifications: [],
        errors: []
    });
});
