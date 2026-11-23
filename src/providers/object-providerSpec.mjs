import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { createContext, SourceTextModule, SyntheticModule } from 'node:vm';

async function setup() {
    const replies = new Map([
        ['/api/mdb/test/space-systems', { spaceSystems: [] }],
        ['/api/mdb/test/parameters', { parameters: [] }],
        ['/api/mdb-overrides/test/realtime', { overrides: [] }],
        ['/api/processors/test/realtime/queues', { queues: [] }],
        ['/api/archive/test/events/sources', { sources: [] }]
    ]);
    const context = createContext({
        console,
        URL,
        fetch(url) {
            const path = new URL(url).pathname;
            assert.ok(replies.has(path), `Unexpected YAMCS request: ${path}`);

            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(replies.get(path))
            });
        }
    });
    const modules = new Map();

    function loadModule(url) {
        if (!modules.has(url.href)) {
            modules.set(url.href, readFile(url, 'utf8').then(source => {
                const options = {
                    context,
                    identifier: url.href
                };
                if (url.pathname.endsWith('.json')) {
                    const jsonModule = new SyntheticModule(['default'], () => {
                        jsonModule.setExport('default', JSON.parse(source));
                    }, options);

                    return jsonModule;
                }

                return new SourceTextModule(source, options);
            }));
        }

        return modules.get(url.href);
    }

    const module = await loadModule(new URL('./object-provider.js', import.meta.url));
    await module.link((specifier, parent) => loadModule(new URL(specifier, parent.identifier)));
    await module.evaluate();

    const openmct = new EventEmitter();
    openmct.objects = { makeKeyString: ({ key }) => key };
    const shutdown = {
        subscribed: 0,
        unsubscribed: 0
    };

    function unsubscribe() {
        shutdown.unsubscribed += 1;
    }

    const realtime = {
        subscribeToMDBChanges() {
            shutdown.subscribed += 1;

            return unsubscribe;
        }
    };
    const telemetry = { dictionaryLoadComplete() {} };
    const Provider = module.namespace.default;
    const provider = new Provider(openmct, 'https://yamcs.invalid/', 'test', 'YAMCS',
        telemetry, telemetry, undefined, undefined, realtime);

    return {
        openmct,
        provider,
        shutdown
    };
}

test('loads the dictionary and registers one MDB subscription', async () => {
    const { provider, shutdown } = await setup();
    const root = await provider.get({ key: 'spacecraft' });

    assert.equal(root.name, 'YAMCS');
    assert.equal(shutdown.subscribed, 1);
    assert.equal(shutdown.unsubscribed, 0);
});

test('destroy releases the MDB subscription exactly once', async () => {
    const { openmct, provider, shutdown } = await setup();
    await provider.get({ key: 'spacecraft' });

    openmct.emit('destroy');
    openmct.emit('destroy');

    assert.equal(shutdown.unsubscribed, 1);
    assert.equal(provider.mdbChangesUnsubscribe, undefined);
});

test('destroy can be called before a dictionary is loaded', async () => {
    const { openmct, shutdown } = await setup();
    const [destroy] = openmct.listeners('destroy');

    assert.doesNotThrow(() => destroy());
    assert.equal(shutdown.subscribed, 0);
    assert.equal(shutdown.unsubscribed, 0);
});
