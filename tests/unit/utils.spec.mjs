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
 * getValue()'s "unsupported type" fallbacks can't be provoked via e2e: the
 * VALUE_EXTRACT_MAP in utils.js already covers every YAMCS value type
 * QuickStart's parameters ever produce, so hitting the fallback requires a
 * value shape with a type string YAMCS never actually sends. That's only
 * reachable by calling getValue() directly with a hand-crafted value.
 */

import { describe, it, expect, vi } from 'vitest';

import { getValue, flattenObjectArray, qualifiedNameFromParameterId, accumulateResults } from '../../src/utils.js';

describe('getValue unsupported-type fallbacks', () => {
    it('returns the unsupported-type marker for an unrecognized scalar type', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

        const result = getValue({ type: 'NOT_A_REAL_TYPE' });

        expect(result).toBe('Unsupported Data Type');
        expect(warnSpy).toHaveBeenCalled();

        warnSpy.mockRestore();
    });

    it('returns the unsupported-type marker when an array member has an unrecognized type', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

        const result = getValue({
            type: 'ARRAY',
            arrayValue: [
                { type: 'NOT_A_REAL_TYPE' }
            ]
        });

        expect(result).toBe('Unsupported Data Type');
        expect(warnSpy).toHaveBeenCalled();

        warnSpy.mockRestore();
    });
});

/*
 * flattenObjectArray's non-array guard is a defensive check against malformed
 * input shapes that YAMCS's own API never actually sends (every call site in
 * this repo passes a genuine array), so there's no organic e2e path that
 * provokes it.
 */
describe('flattenObjectArray', () => {
    it('throws when given a non-array value', () => {
        expect(() => flattenObjectArray('not an array')).toThrow(/Expected array, got string/);
    });

    it('flattens a well-formed array as before (regression guard for the guard itself)', () => {
        const result = flattenObjectArray([
            { name: 'foo', value: { type: 'STRING', stringValue: 'bar' } }
        ]);

        expect(result.foo).toBe('bar');
    });
});

/*
 * qualifiedNameFromParameterId's namespace-present branch: the only real call site
 * (latest-telemetry-provider.js) passes whatever `id` shape Yamcs's batchGet response
 * returns, which in practice is always a plain {name} with no `namespace` (namespace
 * is for XTCE alias-based lookups, which this repo's REST calls never use) -- so the
 * namespaced-object branch is only reachable by calling this directly with that shape.
 */
describe('qualifiedNameFromParameterId', () => {
    it('joins namespace and name when namespace is present', () => {
        expect(qualifiedNameFromParameterId({ namespace: 'MDB:OPS Name', name: 'Battery1_Temp' }))
            .toBe('MDB:OPS Name/Battery1_Temp');
    });

    it('returns just the name when namespace is absent', () => {
        expect(qualifiedNameFromParameterId({ name: '/myproject/Battery1_Temp' }))
            .toBe('/myproject/Battery1_Temp');
    });

    it('passes a plain string through unmodified (idempotent)', () => {
        expect(qualifiedNameFromParameterId('/myproject/Battery1_Temp')).toBe('/myproject/Battery1_Temp');
    });

    it('throws for a null/undefined identifier', () => {
        expect(() => qualifiedNameFromParameterId(null)).toThrow('Cannot make string from null identifier');
    });
});

/*
 * accumulateResults' pagination-continuation branch (recursing when a response
 * includes a continuationToken and the total limit hasn't been reached) needs a
 * response large enough to require multiple pages -- QuickStart's demo dataset
 * doesn't produce that within e2e test time bounds, so it's mocked directly here.
 */
describe('accumulateResults pagination', () => {
    it('recurses to fetch the next page when a continuationToken is present', async () => {
        const responses = [
            { items: [1, 2], continuationToken: 'page-2' },
            { items: [3, 4] }
        ];
        global.fetch = vi.fn(() => {
            const body = responses.shift();

            return Promise.resolve({ json: () => Promise.resolve(body) });
        });

        const result = await accumulateResults('http://localhost:8090/api/x', {}, 'items', [], Infinity);

        expect(result).toEqual([1, 2, 3, 4]);
        expect(global.fetch).toHaveBeenCalledTimes(2);

        delete global.fetch;
    });
});
