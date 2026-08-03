/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2024, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

/*
 * Regression test for a race in the websocket-reconnect subscription
 * bookkeeping fix (the delete-before-set added for issue #209).
 *
 * YAMCS call numbers are connection-local and get reassigned on reconnect,
 * potentially in a DIFFERENT order than before. The reply handler deletes a
 * subscription's previous call-number entry from the shared
 * `subscriptionsByCall` map before recording the new one. If it deletes that
 * key unconditionally, it can clobber a DIFFERENT subscription that has
 * already claimed that (reused) call number on the new connection — silently
 * unmapping it so it stops receiving telemetry.
 *
 * Concretely: old mapping A->1, B->2; after reconnect YAMCS reassigns B->1
 * and A->2, and the replies arrive B-first. Processing B sets 1->B; then
 * processing A, whose stale `.call` is still 1, deletes key 1 — destroying
 * B's valid new mapping. This is a deterministic unit reproduction because
 * the e2e reconnect test only exercises orderly (non-colliding) reassignment
 * and so cannot surface it.
 *
 * This is exercised at the unit level (rather than e2e) because it requires
 * forcing a specific, reordered call-number reassignment that a live YAMCS
 * instance does not let us control.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

import RealtimeProvider from '../../../src/providers/realtime-provider.js';
import { OBJECT_TYPES } from '../../../src/const.js';

function createMockSocketWorker() {
    const listeners = {};

    return {
        setThrottleMessagePattern: vi.fn(),
        setThrottleRate: vi.fn(),
        setMaxBufferSize: vi.fn(),
        connect: vi.fn(),
        sendMessage: vi.fn(),
        addEventListener: vi.fn((type, callback) => {
            listeners[type] = callback;
        }),
        // Test helpers to drive the provider the way the real worker would.
        emitReconnected() {
            listeners.reconnected();
        },
        emitBatch(messages) {
            listeners.batch({ detail: messages.map(message => JSON.stringify(message)) });
        }
    };
}

function createMockOpenmct(socketWorker) {
    return {
        telemetry: {
            // `new BatchingWebSocket(openmct)` returns our mock worker (a
            // function constructor may return an object; a class constructor
            // returning one trips no-constructor-return).
            BatchingWebSocket: function MockBatchingWebSocket() {
                return socketWorker;
            }
        },
        time: {
            on: vi.fn(),
            off: vi.fn(),
            getClock: vi.fn(() => undefined),
            now: vi.fn(() => 0)
        },
        objects: {
            areIdsEqual: (a, b) => a.key === b.key
        },
        once: vi.fn()
    };
}

function telemetryObject(name) {
    return {
        identifier: {
            key: `~myproject~${name}`,
            namespace: 'taxonomy'
        },
        name,
        type: OBJECT_TYPES.TELEMETRY_OBJECT_TYPE
    };
}

function reply(call, subscriptionId) {
    return {
        type: 'reply',
        call,
        data: { replyTo: subscriptionId }
    };
}

function parameters(call, floatValue) {
    return {
        type: 'parameters',
        call,
        data: {
            values: [{
                generationTime: '2026-08-02T00:00:00.000Z',
                engValue: {
                    type: 'FLOAT',
                    floatValue
                }
            }]
        }
    };
}

describe('RealtimeProvider reconnect call-number reassignment (regression for #209 follow-up)', () => {
    let socketWorker;
    let provider;
    let aCallback;
    let bCallback;
    let unsubscribeA;

    beforeEach(() => {
        socketWorker = createMockSocketWorker();
        provider = new RealtimeProvider(createMockOpenmct(socketWorker), 'ws://localhost/', 'myproject');
        provider.connect();

        aCallback = vi.fn();
        bCallback = vi.fn();

        // Subscribe A then B: buildSubscriptionDetails assigns subscriptionId
        // 1 to A and 2 to B (connect() reset lastSubscriptionId to 1).
        unsubscribeA = provider.subscribe(telemetryObject('A'), aCallback);
        provider.subscribe(telemetryObject('B'), bCallback);

        // Initial connection: YAMCS assigns A->call 1, B->call 2.
        socketWorker.emitBatch([reply(1, 1), reply(2, 2)]);
    });

    it('keeps both subscriptions mapped when reconnect reassigns call numbers in reverse order', () => {
        expect(provider.subscriptionsByCall.size).toBe(2);

        // Reconnect: the provider resubscribes everything. YAMCS reassigns the
        // (connection-local) call numbers, this time B->1 and A->2, and the
        // replies happen to arrive B-first.
        socketWorker.emitReconnected();
        socketWorker.emitBatch([reply(1, 2), reply(2, 1)]);

        // Both subscriptions must remain mapped, to the correct owners.
        expect(provider.subscriptionsByCall.size).toBe(2);
        expect(provider.subscriptionsByCall.get(1).subscriptionId).toBe(2); // call 1 -> B
        expect(provider.subscriptionsByCall.get(2).subscriptionId).toBe(1); // call 2 -> A

        // ...and both must actually receive telemetry under their new call
        // numbers (proving the mapping is live, not merely present).
        aCallback.mockClear();
        bCallback.mockClear();
        socketWorker.emitBatch([parameters(1, 1.5), parameters(2, 2.5)]);

        expect(bCallback).toHaveBeenCalledTimes(1); // B receives under call 1
        expect(aCallback).toHaveBeenCalledTimes(1); // A receives under call 2
    });

    it('does not cancel or unmap another subscription when unsubscribing one whose call was reassigned away', () => {
        // Reconnect, but this time only B replies -- and it claims A's OLD
        // call number 1. A's reconnect reply is delayed or never arrives, so
        // A.call stays stale at 1 while call 1 now belongs to B.
        socketWorker.emitReconnected();
        socketWorker.emitBatch([reply(1, 2)]); // B (subscriptionId 2) -> call 1

        expect(provider.subscriptionsByCall.size).toBe(1);
        expect(provider.subscriptionsByCall.get(1).subscriptionId).toBe(2); // call 1 -> B

        // Now unsubscribe A. Its stale .call is 1, which is B's live call.
        // Unsubscribe must NOT act on a call it no longer owns.
        socketWorker.sendMessage.mockClear();
        unsubscribeA();

        // No CANCEL may target call 1 -- that would cancel B on the server.
        const cancelsTargetingCallOne = socketWorker.sendMessage.mock.calls
            .map(([message]) => message)
            .filter(message => typeof message === 'string'
                && /"type":\s*"cancel"/.test(message)
                && /"call":\s*"1"/.test(message));
        expect(cancelsTargetingCallOne).toEqual([]);

        // B must remain mapped and continue receiving telemetry under call 1.
        expect(provider.subscriptionsByCall.get(1)?.subscriptionId).toBe(2);

        bCallback.mockClear();
        socketWorker.emitBatch([parameters(1, 9.9)]);
        expect(bCallback).toHaveBeenCalledTimes(1);
    });
});
