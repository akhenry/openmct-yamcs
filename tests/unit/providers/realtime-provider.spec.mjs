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
 * #setCallFromClock's "no corresponding subscription yet" branch (clearing
 * remoteClockCallNumber) is timing-dependent on exactly when Open MCT fires the
 * 'clock' event relative to when the remote-clock telemetry object's own
 * subscription has been established -- not reliably forceable via e2e. Both
 * branches are tested directly here by capturing the constructor's real
 * (already-bound) 'clock' listener and invoking it with a pre-populated
 * subscriptionsById.
 */

import { describe, it, expect, vi } from 'vitest';

import RealtimeProvider from '../../../src/providers/realtime-provider.js';

function createOpenmctMock() {
    const clockListeners = [];

    return {
        telemetry: {
            BatchingWebSocket: vi.fn(function BatchingWebSocket() {
                this.setThrottleMessagePattern = vi.fn();
                this.setThrottleRate = vi.fn();
                this.setMaxBufferSize = vi.fn();
            })
        },
        time: {
            on: vi.fn((event, cb) => {
                if (event === 'clock') {
                    clockListeners.push(cb);
                }
            }),
            off: vi.fn()
        },
        once: vi.fn(),
        clockListeners
    };
}

describe('RealtimeProvider#setCallFromClock (via the clock event listener)', () => {
    it('sets remoteClockCallNumber to the matching subscription\'s call number', () => {
        const openmct = createOpenmctMock();
        const provider = new RealtimeProvider(openmct, 'http://localhost:8090/', 'myproject');
        provider.subscriptionsById = {
            1: { call: 42, domainObject: { identifier: { key: 'remote-clock-object' } } }
        };

        const [clockListener] = openmct.clockListeners;
        clockListener({ key: 'remote-clock', identifier: { key: 'remote-clock-object' } });

        expect(provider.remoteClockCallNumber).toBe(42);
    });

    it('clears remoteClockCallNumber when no subscription matches the clock object yet', () => {
        const openmct = createOpenmctMock();
        const provider = new RealtimeProvider(openmct, 'http://localhost:8090/', 'myproject');
        provider.subscriptionsById = {};
        provider.remoteClockCallNumber = 99;

        const [clockListener] = openmct.clockListeners;
        clockListener({ key: 'remote-clock', identifier: { key: 'remote-clock-object' } });

        expect(provider.remoteClockCallNumber).toBeUndefined();
    });
});

/*
 * resubscribeToAll is invoked by BatchingWebSocket's own 'reconnected' event, which
 * realtimeData.e2e.spec.mjs triggers by closing the raw websocket directly -- but that
 * doesn't reliably fire openmct core's own reconnection detection/event in a way this
 * repo's e2e can control, so it's tested directly here.
 */
describe('RealtimeProvider#resubscribeToAll', () => {
    it('re-sends a subscribe message for every current subscription', () => {
        const openmct = createOpenmctMock();
        const provider = new RealtimeProvider(openmct, 'http://localhost:8090/', 'myproject');
        const sendSpy = vi.spyOn(provider, 'sendSubscribeMessage').mockImplementation(() => {});
        provider.subscriptionsById = {
            1: { call: 1, domainObject: { type: 'yamcs.telemetry' } },
            2: { call: 2, domainObject: { type: 'yamcs.telemetry' } }
        };

        provider.resubscribeToAll();

        expect(sendSpy).toHaveBeenCalledTimes(2);
        expect(sendSpy).toHaveBeenCalledWith(provider.subscriptionsById[1]);
        expect(sendSpy).toHaveBeenCalledWith(provider.subscriptionsById[2]);
    });
});

/*
 * isTelemetryMessage is declared but never called anywhere in src/ -- dead code, not a gap
 * this repo's e2e (or any real caller) can exercise. Tested directly since it's a trivial,
 * pure predicate.
 */
describe('RealtimeProvider#isTelemetryMessage', () => {
    it('returns true only for parameters-type messages', () => {
        const openmct = createOpenmctMock();
        const provider = new RealtimeProvider(openmct, 'http://localhost:8090/', 'myproject');

        expect(provider.isTelemetryMessage({ type: 'parameters' })).toBe(true);
        expect(provider.isTelemetryMessage({ type: 'events' })).toBe(false);
    });
});
