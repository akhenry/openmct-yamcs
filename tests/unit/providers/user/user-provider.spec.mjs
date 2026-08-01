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
 * The operator-status/mission-status role-gated write paths in UserProvider
 * (canSetMissionStatus, canSetPollQuestion, getStatusForRole,
 * setStatusForRole, getRolesInStatus) can't be reached via e2e: YAMCS
 * QuickStart runs with security disabled, so the anonymous/guest user it
 * hands out has no roles at all. That's a hard limitation of the test
 * backend, not a config gap in the e2e harness, so this logic is exercised
 * here instead with a mocked openmct/fetch/roleStatus.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import UserProvider from '../../../../src/providers/user/user-provider.js';

class FakeOpenmctUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function createOpenmctMock() {
    return {
        user: { User: FakeOpenmctUser },
        telemetry: { subscribe: vi.fn(() => vi.fn()) },
        once: vi.fn()
    };
}

function mockUserInfoFetch(userInfo) {
    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(userInfo)
    }));
}

function createProvider({ userInfo, roleStatus, missionStatus, pollQuestionParameter, pollQuestionTelemetry, latestTelemetryProvider } = {}) {
    mockUserInfoFetch(userInfo ?? {
        name: 'guest',
        roles: [],
        objectPrivileges: []
    });

    const openmct = createOpenmctMock();

    return new UserProvider(openmct, {
        userEndpoint: 'http://localhost:8090/api/user',
        roleStatus: roleStatus ?? {},
        latestTelemetryProvider: latestTelemetryProvider ?? {},
        pollQuestionParameter: pollQuestionParameter ?? {},
        pollQuestionTelemetry: pollQuestionTelemetry ?? {},
        missionStatus: missionStatus ?? {}
    });
}

describe('UserProvider role-gated status paths', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    afterEach(() => {
        delete global.fetch;
    });

    describe('canSetMissionStatus', () => {
        it('returns true when the user can write a mission-status parameter', async () => {
            const missionStatus = {
                isMissionStatusParameterName: vi.fn((name) => Promise.resolve(name === '/myproject/MissionStatusA'))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'operator',
                    roles: [{ name: 'FlightDirector' }],
                    objectPrivileges: [
                        {
                            type: 'WriteParameter',
                            objects: ['/myproject/MissionStatusA', '/myproject/Other']
                        }
                    ]
                },
                missionStatus
            });

            await expect(provider.canSetMissionStatus()).resolves.toBe(true);
        });

        it('returns false when the user cannot write any mission-status parameter', async () => {
            const missionStatus = {
                isMissionStatusParameterName: vi.fn(() => Promise.resolve(false))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'operator',
                    roles: [],
                    objectPrivileges: [
                        {
                            type: 'WriteParameter',
                            objects: ['/myproject/Other']
                        }
                    ]
                },
                missionStatus
            });

            await expect(provider.canSetMissionStatus()).resolves.toBe(false);
        });
    });

    describe('canSetPollQuestion', () => {
        it('returns true when the user can write the poll-question parameter', async () => {
            const pollQuestionParameter = {
                isPollQuestionParameterName: vi.fn((name) => Promise.resolve(name === '/myproject/PollQuestion'))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'operator',
                    roles: [],
                    objectPrivileges: [
                        {
                            type: 'WriteParameter',
                            objects: ['/myproject/PollQuestion']
                        }
                    ]
                },
                pollQuestionParameter
            });

            await expect(provider.canSetPollQuestion()).resolves.toBe(true);
        });

        it('returns false with no write privileges at all', async () => {
            const pollQuestionParameter = {
                isPollQuestionParameterName: vi.fn(() => Promise.resolve(false))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'guest',
                    roles: [],
                    objectPrivileges: []
                },
                pollQuestionParameter
            });

            await expect(provider.canSetPollQuestion()).resolves.toBe(false);
        });
    });

    describe('getStatusForRole', () => {
        it('returns the latest telemetry-derived status when available', async () => {
            const telemetryObject = { identifier: { key: 'status-a' } };
            const roleStatus = {
                getTelemetryObjectForRole: vi.fn(() => Promise.resolve(telemetryObject)),
                toStatusFromTelemetry: vi.fn(() => ({ key: 'nominal' })),
                getDefaultStatusForRole: vi.fn()
            };
            const latestTelemetryProvider = {
                requestLatest: vi.fn(() => Promise.resolve({ value: 1 }))
            };
            const provider = createProvider({
                roleStatus,
                latestTelemetryProvider
            });

            const status = await provider.getStatusForRole('FlightDirector');

            expect(status).toEqual({ key: 'nominal' });
            expect(roleStatus.getDefaultStatusForRole).not.toHaveBeenCalled();
        });

        it('falls back to the default status when there is no telemetry yet', async () => {
            const telemetryObject = { identifier: { key: 'status-a' } };
            const roleStatus = {
                getTelemetryObjectForRole: vi.fn(() => Promise.resolve(telemetryObject)),
                toStatusFromTelemetry: vi.fn(),
                getDefaultStatusForRole: vi.fn(() => Promise.resolve({ key: 'off-nominal' }))
            };
            const latestTelemetryProvider = {
                requestLatest: vi.fn(() => Promise.resolve(undefined))
            };
            const provider = createProvider({
                roleStatus,
                latestTelemetryProvider
            });

            const status = await provider.getStatusForRole('FlightDirector');

            expect(status).toEqual({ key: 'off-nominal' });
        });
    });

    describe('setStatusForRole', () => {
        it('delegates to roleStatus.setStatusForRole and returns its result', async () => {
            const roleStatus = { setStatusForRole: vi.fn(() => Promise.resolve(true)) };
            const provider = createProvider({ roleStatus });

            await expect(provider.setStatusForRole('FlightDirector', 'nominal')).resolves.toBe(true);
            expect(roleStatus.setStatusForRole).toHaveBeenCalledWith('FlightDirector', 'nominal');
        });
    });

    describe('getStatusRoleForCurrentUser', () => {
        it('returns the first status role the current user holds', async () => {
            const roleStatus = {
                getAllStatusRoles: vi.fn(() => Promise.resolve(['FlightDirector', 'CapCom']))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'operator',
                    roles: [{ name: 'CapCom' }],
                    objectPrivileges: []
                },
                roleStatus
            });

            await expect(provider.getStatusRoleForCurrentUser()).resolves.toBe('CapCom');
        });

        it('returns undefined when the current user holds none of the status roles', async () => {
            const roleStatus = {
                getAllStatusRoles: vi.fn(() => Promise.resolve(['FlightDirector', 'CapCom']))
            };
            const provider = createProvider({
                userInfo: {
                    name: 'guest',
                    roles: [],
                    objectPrivileges: []
                },
                roleStatus
            });

            await expect(provider.getStatusRoleForCurrentUser()).resolves.toBeUndefined();
        });
    });

    describe('getRolesInStatus', () => {
        it('returns only the roles whose latest status matches the requested status', async () => {
            const telemetryObjects = {
                FlightDirector: { identifier: { key: 'fd' } },
                CapCom: { identifier: { key: 'cc' } }
            };
            const roleStatus = {
                getAllStatusRoles: vi.fn(() => Promise.resolve(['FlightDirector', 'CapCom'])),
                getTelemetryObjectForRole: vi.fn((role) => Promise.resolve(telemetryObjects[role])),
                toStatusFromTelemetry: vi.fn((telemetryObject) => {
                    return telemetryObject === telemetryObjects.FlightDirector
                        ? { key: 'nominal' }
                        : { key: 'off-nominal' };
                })
            };
            const latestTelemetryProvider = {
                requestLatest: vi.fn(() => Promise.resolve({ value: 1 }))
            };
            const provider = createProvider({
                roleStatus,
                latestTelemetryProvider
            });

            await expect(provider.getRolesInStatus('nominal')).resolves.toEqual(['FlightDirector']);
        });
    });
});
