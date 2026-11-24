import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { createContext, SourceTextModule, SyntheticModule } from 'node:vm';

// The production webpack build handles the JSON import in utils.js.
const context = createContext({ console });
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

const providerModule = await loadModule(new URL('./realtime-provider.js', import.meta.url));
await providerModule.link((specifier, parent) => loadModule(new URL(specifier, parent.identifier)));
await providerModule.evaluate();
const RealtimeProvider = providerModule.namespace.default;

function identifier(name) {
    return {
        namespace: 'taxonomy',
        key: `~test~${name}`
    };
}

function createFixture(clockName) {
    const replies = new EventEmitter();
    const requests = [];
    const staleness = [];
    const deliveries = [];
    const socket = {
        setThrottleMessagePattern() {},
        setThrottleRate() {},
        setMaxBufferSize() {},
        connect() {},
        addEventListener(name, callback) {
            replies.on(name, callback);
        },
        sendMessage(message) {
            requests.push(JSON.parse(message));
        }
    };
    const openmct = new EventEmitter();
    openmct.telemetry = {
        BatchingWebSocket: function () {
            return socket;
        }
    };
    openmct.time = new EventEmitter();
    openmct.time.getClock = () => clockName === undefined ? undefined : { identifier: identifier(clockName) };
    const provider = new RealtimeProvider(openmct, 'ws://yamcs.invalid/', 'test');
    provider.connect();

    function receive(...messages) {
        replies.emit('batch', { detail: messages.map(message => JSON.stringify(message)) });
    }

    function subscribe(name, call) {
        const object = {
            type: 'yamcs.telemetry',
            name,
            identifier: identifier(name)
        };
        provider.subscribeToStaleness(object, ({ isStale, timestamp }) => {
            staleness.push({
                name,
                isStale,
                timestamp
            });
        });
        provider.subscribe(object, data => {
            deliveries.push({
                name,
                values: Array.from(data, datum => datum.value)
            });
        });
        receive({
            type: 'reply',
            call,
            data: { replyTo: requests.at(-1).id }
        });
    }

    return {
        receive,
        subscribe,
        staleness,
        deliveries
    };
}

function sample(value, acquisitionStatus) {
    return {
        engValue: {
            type: 'FLOAT',
            floatValue: value
        },
        acquisitionStatus,
        generationTime: new Date(value * 1000).toISOString()
    };
}

function parameters(call, ...values) {
    return {
        type: 'parameters',
        call,
        data: { values }
    };
}

test('keeps a fresh parameter fresh when it recovers within the same batch', () => {
    const { receive, subscribe, staleness, deliveries } = createFixture();
    subscribe('temperature', 1);
    receive(parameters(1, sample(1, 'ACQUIRED')));
    receive(parameters(1, sample(2, 'EXPIRED')), parameters(1, sample(3, 'ACQUIRED')));

    assert.deepEqual(staleness.map(status => status.isStale), [false]);
    assert.deepEqual(deliveries.at(-1), {
        name: 'temperature',
        values: [2, 3]
    });
});

test('reports the final actual sample once when the trailing message has no values', () => {
    const { receive, subscribe, staleness, deliveries } = createFixture();
    subscribe('temperature', 1);
    receive(parameters(1, sample(1, 'ACQUIRED')));
    const finalSample = sample(4, 'EXPIRED');
    receive(parameters(1, sample(2, 'EXPIRED'), sample(3, 'ACQUIRED'), finalSample), parameters(1));

    assert.deepEqual(staleness.slice(1), [
        {
            name: 'temperature',
            isStale: true,
            timestamp: finalSample.generationTime
        }
    ]);
    assert.deepEqual(deliveries.at(-1), {
        name: 'temperature',
        values: [2, 3, 4]
    });
});

test('delivers clock samples first and keeps each subscription independent', () => {
    const { receive, subscribe, staleness, deliveries } = createFixture('clock');
    subscribe('temperature', 1);
    subscribe('clock', 2);
    receive(parameters(1, sample(1, 'EXPIRED')), parameters(2, sample(2, 'ACQUIRED')), parameters(99));
    receive(parameters(1), parameters(2));

    assert.deepEqual(deliveries, [
        {
            name: 'clock',
            values: [2]
        },
        {
            name: 'temperature',
            values: [1]
        }
    ]);
    assert.deepEqual(staleness.map(({ name, isStale }) => [name, isStale]), [
        ['clock', false], ['temperature', true]
    ]);
});
