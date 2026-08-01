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
 * Regression test for #84: request() used to mutate the options object
 * passed in by the caller (Open MCT's shared Telemetry Collection request
 * options), corrupting subsequent requests that reused the same object.
 * This is exercised here with a unit test rather than e2e because it is a
 * pure object-identity/aliasing assertion that doesn't depend on YAMCS at
 * all - only on how this provider treats the object it's handed.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

import YamcsHistoricalTelemetryProvider from '../../../src/providers/historical-telemetry-provider.js';

const BASE_URL = 'http://localhost:8090/';
const INSTANCE = 'myproject';

function createOpenmctMock() {
    return {
        time: {
            now: vi.fn(() => Date.now())
        },
        telemetry: {
            getMetadata: vi.fn(() => ({
                values: () => [{ format: 'float' }],
                valuesForHints: () => []
            }))
        }
    };
}

function createDomainObject() {
    return {
        identifier: { key: '~myproject~Battery1_Temp', namespace: '' },
        type: 'yamcs.telemetry'
    };
}

function jsonResponse(body) {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(body)
    });
}

describe('YamcsHistoricalTelemetryProvider options mutation (regression for #84)', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
        global.fetch = vi.fn(() => jsonResponse({ parameter: [] }));
    });

    it('does not mutate the options object passed in by the caller', async () => {
        const openmct = createOpenmctMock();
        const provider = new YamcsHistoricalTelemetryProvider(openmct, BASE_URL, INSTANCE, {});
        const domainObject = createDomainObject();

        const callerOptions = {
            start: 1000,
            end: 2000,
            size: 500,
            strategy: 'minmax'
        };
        const originalOptionsSnapshot = { ...callerOptions };

        await provider.request(domainObject, callerOptions);

        expect(callerOptions).toEqual(originalOptionsSnapshot);
    });

    it('does not carry state between two requests that reuse the same options object', async () => {
        const openmct = createOpenmctMock();
        const provider = new YamcsHistoricalTelemetryProvider(openmct, BASE_URL, INSTANCE, {});
        const domainObject = createDomainObject();

        // A shared options object, as Open MCT's TelemetryCollection reuses
        // across successive requests for the same domain object.
        const sharedOptions = { start: 1000, end: 2000, size: 500 };

        await provider.request(domainObject, sharedOptions);
        await provider.request(domainObject, sharedOptions);

        expect(sharedOptions).toEqual({ start: 1000, end: 2000, size: 500 });
    });
});
