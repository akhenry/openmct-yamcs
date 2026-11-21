import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { posix } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContext, SourceTextModule, SyntheticModule } from 'node:vm';

const projectRoot = fileURLToPath(new URL('../../', import.meta.url));

async function createProvider() {
    const state = {};
    class SocketWorker {
        constructor() {
            this.listeners = new Map();
            this.messages = [];
            state.worker = this;
        }
        setThrottleMessagePattern() {}
        setThrottleRate() {}
        setMaxBufferSize() {}
        connect() {}
        addEventListener(name, callback) {
            this.listeners.set(name, callback);
        }
        sendMessage(message) {
            this.messages.push(JSON.parse(message));
        }
        batch(messages) {
            this.listeners.get('batch')({ detail: messages.map(message => JSON.stringify(message)) });
        }
        reconnect() {
            this.listeners.get('reconnected')();
        }
    }

    const clock = {
        key: 'remote-clock',
        identifier: { key: '~test~clock' }
    };
    const context = createContext({ console });
    const modules = new Map();
    function loadModule(path) {
        if (!modules.has(path)) {
            modules.set(path, readFile(projectRoot + path, 'utf8').then(source => {
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

                return module;
            }));
        }

        return modules.get(path);
    }

    const providerModule = await loadModule('src/providers/realtime-provider.js');
    await providerModule.link((specifier, parent) => {
        assert.ok(specifier.startsWith('.'));

        return loadModule(posix.normalize(posix.join(posix.dirname(parent.identifier), specifier)));
    });
    await providerModule.evaluate();
    const provider = new providerModule.namespace.default({
        telemetry: { BatchingWebSocket: SocketWorker },
        time: {
            on: () => {},
            off: () => {},
            getClock: () => clock
        },
        once: () => {}
    }, 'ws://yamcs.invalid/', 'test');
    provider.connect();

    return {
        provider,
        worker: state.worker
    };
}

function domainObject(name) {
    return {
        type: 'yamcs.telemetry',
        name,
        identifier: { key: `~test~${name}` }
    };
}

function reply(id, call) {
    return {
        type: 'reply',
        call,
        data: { replyTo: id }
    };
}

function parameterUpdate(call) {
    return {
        type: 'parameters',
        call,
        data: {
            values: [{
                id: { name: '/test/parameter' },
                generationTime: '2026-01-01T00:00:00.000Z',
                engValue: {
                    type: 'DOUBLE',
                    doubleValue: 2.5
                }
            }]
        }
    };
}

for (const call of [0, 7]) {
    test(`canceled remote clock ignores queued call ${call} without blocking other telemetry`, async () => {
        const { provider, worker } = await createProvider();
        const delivered = [];
        const unsubscribe = provider.subscribe(domainObject('clock'), () => delivered.push('clock'));
        provider.subscribe(domainObject('ordinary'), () => delivered.push('ordinary'));
        worker.batch([reply(1, call), reply(2, 9)]);
        unsubscribe();
        unsubscribe();

        assert.doesNotThrow(() => worker.batch([parameterUpdate(call), parameterUpdate(9)]));
        assert.deepEqual(delivered, ['ordinary']);
        assert.equal(provider.subscriptionsByCall.has(call), false);
        assert.equal(worker.messages.filter(message => message.type === 'cancel').length, 1);
    });
}

test('active remote clock is delivered once before ordinary telemetry', async () => {
    const { provider, worker } = await createProvider();
    const delivered = [];
    provider.subscribe(domainObject('clock'), data => delivered.push(['clock', data[0].value]));
    provider.subscribe(domainObject('ordinary'), data => delivered.push(['ordinary', data[0].value]));
    worker.batch([reply(1, 7), reply(2, 9)]);
    worker.batch([parameterUpdate(9), parameterUpdate(7)]);

    assert.deepEqual(delivered, [['clock', 2.5], ['ordinary', 2.5]]);
});

test('canceling ordinary telemetry keeps the active remote clock ahead of other updates', async () => {
    const { provider, worker } = await createProvider();
    const delivered = [];
    provider.subscribe(domainObject('clock'), () => delivered.push('clock'));
    const unsubscribe = provider.subscribe(domainObject('ordinary'), () => delivered.push('ordinary'));
    provider.subscribe(domainObject('another'), () => delivered.push('another'));
    worker.batch([reply(1, 7), reply(2, 9), reply(3, 11)]);
    unsubscribe();
    worker.batch([parameterUpdate(11), parameterUpdate(9), parameterUpdate(7)]);

    assert.deepEqual(delivered, ['clock', 'another']);
});

test('a clock canceled before its reply stays canceled across reconnect and a late reply', async () => {
    const { provider, worker } = await createProvider();
    const delivered = [];
    const unsubscribe = provider.subscribe(domainObject('clock'), () => delivered.push('clock'));
    unsubscribe();
    worker.reconnect();
    worker.batch([reply(1, 7), parameterUpdate(7)]);

    assert.deepEqual(delivered, []);
    assert.equal(Object.keys(provider.subscriptionsById).length, 0);
    assert.equal(worker.messages.length, 1);
});
