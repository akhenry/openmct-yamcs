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
 * yieldAndProcessMinMaxHistory is only reached when a request is both a
 * min/max (samples) strategy request AND a streaming request (options.onPartialResponse
 * set) -- see YamcsHistoricalTelemetryProvider#request. That combination depends on Open
 * MCT's plot component choosing both the sample strategy (zoomed out enough that
 * individual points would overlap) and incremental rendering for the same request, which
 * isn't reliably reproducible via e2e without controlling Open MCT's own internal
 * strategy/zoom heuristics. Tested directly here instead, mocking utils.js's yieldResults.
 */

import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../src/utils.js', async (importOriginal) => {
    const actual = await importOriginal();

    return {
        ...actual,
        yieldResults: vi.fn()
    };
});

import { yieldResults } from '../../../src/utils.js';
import YamcsHistoricalTelemetryProvider from '../../../src/providers/historical-telemetry-provider.js';

describe('YamcsHistoricalTelemetryProvider#yieldAndProcessMinMaxHistory', () => {
    it('sets the sample response key and a min/max formatter, and returns the yielded results', async () => {
        const canned = { results: [{ min: 1, max: 2 }], yielded: true };
        yieldResults.mockResolvedValue(canned);

        const provider = new YamcsHistoricalTelemetryProvider({}, 'http://localhost:8090/', 'myproject', {});
        const convertSpy = vi.spyOn(provider, 'convertSampleHistory').mockReturnValue([{ min: 10, max: 20 }]);

        const options = {};
        const result = await provider.yieldAndProcessMinMaxHistory('some-id', 'http://localhost:8090/api/x/samples', options);

        expect(result).toBe(canned);
        expect(options.responseKeyName).toBe('sample');
        expect(yieldResults).toHaveBeenCalledWith('http://localhost:8090/api/x/samples', options);

        // The formatter set on options is what convertSampleHistory ultimately gets invoked
        // through (by yieldResults, mocked away here) -- verify it wires to the same method.
        const formatted = options.formatter([{ min: 1, max: 2 }]);
        expect(convertSpy).toHaveBeenCalledWith('some-id', [{ min: 1, max: 2 }]);
        expect(formatted).toEqual([{ min: 10, max: 20 }]);
    });
});
