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

import { getValue } from '../../src/utils.js';

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
