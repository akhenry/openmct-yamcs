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
 * These two failure modes (missing `OpenMCT:role` on an operator-status
 * parameter, missing `OpenMCT:action` on a mission-status parameter) can only
 * be reached by shipping a malformed MDB. Doing that in the e2e MDB overlay
 * breaks dictionary load for *every* e2e spec, since object-provider.js
 * builds the whole tree once at load time. So we exercise them here by
 * driving the provider's public `get()` entry point with a mocked `fetch`
 * that returns a hand-crafted MDB-search-hit-shaped response.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

import YamcsObjectProvider from '../../../src/providers/object-provider.js';

const BASE_URL = 'http://localhost:8090/';
const INSTANCE = 'myproject';

function createOpenmctMock() {
    return {
        objects: {
            makeKeyString: ({ key }) => key,
            SEARCH_TYPES: { OBJECTS: 'OBJECTS' }
        },
        on: vi.fn(),
        off: vi.fn()
    };
}

function jsonResponse(body) {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(body)
    });
}

function createFetchMock(parameters) {
    return vi.fn((url) => {
        const urlString = url.toString();

        if (urlString.includes('/api/mdb/') && urlString.includes('/space-systems')) {
            return jsonResponse({
                spaceSystems: [
                    {
                        qualifiedName: '/myproject',
                        name: 'myproject'
                    }
                ]
            });
        }

        if (urlString.includes('/api/mdb/') && urlString.includes('/parameters')) {
            return jsonResponse({ parameters });
        }

        if (urlString.includes('/api/mdb-overrides/')) {
            return jsonResponse({ overrides: [] });
        }

        return jsonResponse({});
    });
}

function createProvider(parameters) {
    const openmct = createOpenmctMock();
    const roleStatusTelemetry = {
        dictionaryLoadComplete: vi.fn(),
        addStatus: vi.fn(),
        addStatusRole: vi.fn(),
        setTelemetryObjectForRole: vi.fn()
    };
    const missionStatusTelemetry = {
        dictionaryLoadComplete: vi.fn(),
        addStatus: vi.fn(),
        addMissionStatusParameterName: vi.fn(),
        addMissionAction: vi.fn(),
        setTelemetryObjectForAction: vi.fn()
    };
    const pollQuestionParameter = { isPollQuestionParameter: vi.fn(() => false) };
    const pollQuestionTelemetry = { setTelemetryObject: vi.fn() };
    const realtimeTelemetryProvider = { subscribeToMDBChanges: vi.fn(() => vi.fn()) };

    global.fetch = createFetchMock(parameters);

    const provider = new YamcsObjectProvider(
        openmct,
        BASE_URL,
        INSTANCE,
        'Spacecraft',
        roleStatusTelemetry,
        missionStatusTelemetry,
        pollQuestionParameter,
        pollQuestionTelemetry,
        realtimeTelemetryProvider
    );

    return provider;
}

describe('YamcsObjectProvider malformed status parameters', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('throws when an operator-status parameter has no OpenMCT:role alias', async () => {
        const parameter = {
            name: 'OperatorStatusA',
            qualifiedName: '/myproject/OperatorStatusA',
            type: { engType: 'integer' },
            alias: [
                {
                    name: 'yamcs.operatorStatus',
                    namespace: 'OpenMCT:type'
                }
            ]
        };
        const provider = createProvider([parameter]);

        await expect(provider.get({
            key: '~myproject~OperatorStatusA',
            namespace: ''
        }))
            .rejects.toThrow('Operator Status Parameter "/myproject/OperatorStatusA" does not specify a role');
    });

    it('throws when a mission-status parameter has no OpenMCT:action alias', async () => {
        const parameter = {
            name: 'MissionStatusA',
            qualifiedName: '/myproject/MissionStatusA',
            type: { engType: 'integer' },
            alias: [
                {
                    name: 'yamcs.missionStatus',
                    namespace: 'OpenMCT:type'
                }
            ]
        };
        const provider = createProvider([parameter]);

        await expect(provider.get({
            key: '~myproject~MissionStatusA',
            namespace: ''
        }))
            .rejects.toThrow('Mission Status Parameter "/myproject/MissionStatusA" does not specify a mission action');
    });
});
