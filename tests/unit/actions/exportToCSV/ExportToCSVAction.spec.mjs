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
 * fetchExportedValues()'s error branch fires only when YAMCS's
 * exportParameterValues archive endpoint returns a non-2xx JSON error body.
 * Provoking that deterministically from the real e2e backend (bad parameter
 * name, rejected time range, etc.) is flaky and backend-version dependent,
 * so we exercise it here with a mocked openmct and a mocked fetch response.
 */

import { describe, it, expect, vi, afterEach } from 'vitest';

import ExportToCSVAction from '../../../../src/actions/exportToCSV/ExportToCSVAction.js';
import { OBJECT_TYPES } from '../../../../src/const.js';

function createOpenmctMock({ composition } = {}) {
    return {
        composition: { get: vi.fn(() => composition) },
        objects: { makeKeyString: (identifier) => `${identifier.namespace}:${identifier.key}` },
        time: {
            bounds: vi.fn(() => ({
                start: 0,
                end: 1
            }))
        },
        notifications: { error: vi.fn() }
    };
}

describe('ExportToCSVAction error handling', () => {
    afterEach(() => {
        delete global.fetch;
        vi.restoreAllMocks();
    });

    it('notifies the user with the server message when the export request fails', async () => {
        global.fetch = vi.fn(() => Promise.resolve({
            ok: false,
            json: () => Promise.resolve({ msg: 'no data in range' })
        }));

        const openmct = createOpenmctMock();
        const action = new ExportToCSVAction(openmct, 'http://localhost:8090/', 'myproject');

        const objectPath = [{
            identifier: {
                key: 'param-a',
                namespace: ''
            },
            type: OBJECT_TYPES.TELEMETRY_OBJECT_TYPE
        }];

        action.invoke(objectPath);

        // invoke() is fire-and-forget; let its internal promise chain settle.
        await new Promise((resolve) => setTimeout(resolve, 0));
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(openmct.notifications.error).toHaveBeenCalledWith('Failed to export: no data in range');
    });
});
