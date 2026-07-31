/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2026, United States Government
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
Mission Status Specific Tests

Mission Status is surfaced in Open MCT through the first-party `openmct.user.status`
API (see node_modules/openmct/src/api/user/StatusAPI.js and the userIndicator
plugin's MissionStatusPopup.vue), which openmct-yamcs's UserProvider
(src/providers/user/user-provider.js) implements on top of
MissionStatusTelemetry (src/providers/mission-status/mission-status-telemetry.js).
The userIndicator plugin is installed unconditionally by Open MCT core
(MCT.js), so the "Mission Status" button next to the user indicator is always
present in the DOM *when the current user is permitted to write to a mission
status parameter* (`canSetMissionStatus()`, gated on YAMCS `objectPrivileges`
of type `WriteParameter`).

The stock YAMCS QuickStart docker-compose setup used by these e2e tests runs
with no authentication configured, so `/api/user/` returns a bare
`{ superuser: true, name: "guest" }` with no `objectPrivileges` array at all
(verified against a live instance). `getWriteParameters()` in createYamcsUser.js
treats a missing `objectPrivileges` as "no write access to anything", so
`canSetMissionStatus()` is always `false` here and the clickable "Mission
Status" button never renders — this is a property of the auth-less QuickStart
environment, not a bug in openmct-yamcs. Enabling the click-driven popup
end-to-end would require configuring YAMCS `roles.yaml` with an explicit
`WriteParameter` grant (see src/providers/mission-status/README.md), which is
out of scope for the `dataSource="local"` overlay MDB this suite exercises.

Given that constraint, these tests exercise the `openmct.user.status` API
directly (the same API the UI popup calls into once permission is granted)
end-to-end against the live YAMCS backend, and confirm that `object-provider.js`
classifies each mission status parameter correctly rather than as generic
numeric telemetry.
*/

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, getDomainObject } = appActions;

const NO_GO = 0;
const GO = 1;

const MISSION_ACTIONS = [
    {
        action: 'drivingStatus',
        qualifiedName: '/OpenMCTTest/DrivingStatus',
        name: 'DrivingStatus'
    },
    {
        action: 'drillingStatus',
        qualifiedName: '/OpenMCTTest/DrillingStatus',
        name: 'DrillingStatus'
    },
    {
        action: 'imageryStatus',
        qualifiedName: '/OpenMCTTest/ImageryStatus',
        name: 'ImageryStatus'
    }
];

/**
 * Mirror src/utils.js `qualifiedNameToId`: YAMCS qualified names are
 * slash-separated but Open MCT identifier keys cannot contain `/`.
 * @param {string} qualifiedName
 * @returns {string}
 */
function qualifiedNameToId(qualifiedName) {
    return qualifiedName.replace(/\//g, '~');
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} action
 * @returns {Promise<{key: number, label: string}>}
 */
function getStatusForMissionAction(page, action) {
    return page.evaluate((missionAction) => {
        return window.openmct.user.status.getStatusForMissionAction(missionAction);
    }, action);
}

/**
 * Sets the status for a mission action via the same `openmct.user.status`
 * API that the Mission Status popup UI calls into, and returns whether the
 * underlying YAMCS write succeeded.
 * @param {import('@playwright/test').Page} page
 * @param {string} action
 * @param {number} statusKey
 * @returns {Promise<boolean>}
 */
function setStatusForMissionAction(page, action, statusKey) {
    return page.evaluate(async ({ missionAction, key }) => {
        const possibleStatuses = await window.openmct.user.status.getPossibleMissionActionStatuses();
        const status = possibleStatuses.find((candidate) => candidate.key === key);

        return window.openmct.user.status.setStatusForMissionAction(missionAction, status);
    }, {
        missionAction: action,
        key: statusKey
    });
}

test.describe("Mission Status @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });
        // 'Loading...' also transiently labels tree items whose composition
        // hasn't streamed in yet, so wait for the root folder instead of
        // relying on that text being absent everywhere in the tree.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' }).first()).toBeVisible({ timeout: 15000 });
    });

    test('mission status parameters are discoverable via the user status API and classified correctly', async ({ page }) => {
        await test.step('all three mission actions are reported by openmct.user.status', async () => {
            const possibleActions = await page.evaluate(() => {
                return window.openmct.user.status.getPossibleMissionActions();
            });

            for (const { action } of MISSION_ACTIONS) {
                expect(possibleActions).toContain(action);
            }
        });

        await test.step('the possible statuses are exactly NO GO (0) and GO (1)', async () => {
            const possibleStatuses = await page.evaluate(() => {
                return window.openmct.user.status.getPossibleMissionActionStatuses();
            });

            const byKey = Object.fromEntries(possibleStatuses.map((status) => [status.key, status.label]));
            expect(byKey[NO_GO]).toBe('NO GO');
            expect(byKey[GO]).toBe('GO');
        });

        for (const { qualifiedName, name } of MISSION_ACTIONS) {
            await test.step(`${name} is classified as a Mission Status object, not generic telemetry`, async () => {
                const identifier = {
                    namespace: 'taxonomy',
                    key: qualifiedNameToId(qualifiedName)
                };
                const domainObject = await getDomainObject(page, identifier);

                expect(domainObject).toBeDefined();
                expect(domainObject.type).toBe('yamcs.missionStatus');

                const valueMetadata = domainObject.telemetry.values.find((value) => value.key === 'value');
                const enumerationLabels = (valueMetadata.enumerations || []).map((enumeration) => enumeration.string);
                expect(enumerationLabels).toEqual(expect.arrayContaining(['NO GO', 'GO']));
            });
        }

        await test.step('the current user cannot set mission status in this no-auth environment, so no clickable affordance is rendered', async () => {
            // The stock QuickStart docker-compose setup runs with no YAMCS
            // authentication, so `/api/user/` never returns `objectPrivileges`
            // and `canSetMissionStatus()` is always false here. Confirm that
            // reality rather than assume it, so this test breaks loudly if
            // the backend fixture ever changes underneath it.
            const canSetMissionStatus = await page.evaluate(() => {
                return window.openmct.user.status.canSetMissionStatus();
            });
            expect(canSetMissionStatus).toBe(false);
            await expect(page.getByLabel('Toggle Mission Status Panel')).toHaveCount(0);
        });
    });

    test('setting DrivingStatus to GO via the user status API is reflected on read-back and persists across reload', async ({ page }) => {
        const { action } = MISSION_ACTIONS[0];

        await test.step('set status to GO', async () => {
            const success = await setStatusForMissionAction(page, action, GO);
            expect(success).toBe(true);
        });

        await test.step('read-back reflects GO', async () => {
            const status = await getStatusForMissionAction(page, action);
            expect(status.key).toBe(GO);
            expect(status.label).toBe('GO');
        });

        await test.step('a LAD Table shows the current status', async () => {
            const ladTable = await createDomainObjectWithDefaults(page, { type: 'LAD Table' });
            const ladView = page.getByLabel(`${ladTable.name} Object View`);

            await page.getByRole('searchbox', { name: 'Search Input' }).click();
            await page.getByRole('searchbox', { name: 'Search Input' }).fill('DrivingStatus');
            const searchResult = page.getByLabel('Object Results').getByText('DrivingStatus', { exact: true });
            await expect(searchResult).toBeVisible();
            await searchResult.dragTo(ladView);

            await page.getByRole('button', {
                name: 'Save',
                exact: true
            }).click();
            await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

            const ladRow = page.getByLabel('lad row');
            await expect(ladRow.getByLabel('lad value')).toHaveText('GO');
        });

        await test.step('status persists across a page reload', async () => {
            await page.reload({ waitUntil: 'domcontentloaded' });
            await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' }).first()).toBeVisible({ timeout: 15000 });

            const status = await getStatusForMissionAction(page, action);
            expect(status.key).toBe(GO);
            expect(status.label).toBe('GO');
        });

        await test.step('cleanup: reset status back to NO GO', async () => {
            const success = await setStatusForMissionAction(page, action, NO_GO);
            expect(success).toBe(true);
        });
    });

    test('each mission action can transition between NO GO and GO independently', async ({ page }) => {
        for (const { action, name } of MISSION_ACTIONS) {
            await test.step(`${name}: NO GO -> GO -> NO GO`, async () => {
                let success = await setStatusForMissionAction(page, action, GO);
                expect(success).toBe(true);
                let status = await getStatusForMissionAction(page, action);
                expect(status.key).toBe(GO);

                success = await setStatusForMissionAction(page, action, NO_GO);
                expect(success).toBe(true);
                status = await getStatusForMissionAction(page, action);
                expect(status.key).toBe(NO_GO);
            });
        }
    });
});
