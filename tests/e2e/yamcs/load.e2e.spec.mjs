/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
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
Open MCT load Specific Tests

This spec used to change an MDB algorithm's implementation at runtime (via a
PATCH to .../realtime/algorithms/.../copySunsensor with a "SET" action
supplying replacement script text) and confirm Open MCT still loaded
correctly afterward. YAMCS 5.12.7 fixed CVE-2026-46562 (CVSS 9.8: the Nashorn
ScriptEngine evaluated that replacement text with no ClassFilter, letting
anyone with the ChangeMissionDatabase privilege -- which QuickStart's default,
no-auth guest user has -- execute arbitrary Java code) by disabling the
runtime-algorithm-override capability outright, for both "SET" and "RESET".
There is no documented way to opt back into the old behavior.

This test now asserts the opposite of what it originally did: that the
override attempt is rejected, as a regression guard that this mitigation
stays in effect, and that Open MCT keeps working normally around it.
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const YAMCS_URL = 'http://localhost:8090/';

test.describe("Tests to ensure that open mct loads correctly @yamcs", () => {
    test('Runtime MDB algorithm override is rejected (regression guard for CVE-2026-46562)', async ({ page }) => {
        await page.goto("./");
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
        await expect(page.getByLabel('Navigate to myproject folder')).toBeVisible();

        const response = await page.request.patch(`${YAMCS_URL}api/mdb/myproject/realtime/algorithms/myproject/copySunsensor`, {
            data: {
                "action": "SET",
                "algorithm": {
                    "text": "\n\t\t\t\t\tout0.setFloatValue(in.getEngValue().getFloatValue()); \n\t\t\t\t"
                }
            }
        });
        expect(response.ok()).toBe(false);
        expect(response.status()).toBe(405);

        const body = await response.json();
        expect(body.type).toBe('MethodNotAllowedException');

        // Confirm the app remains fully functional after the rejected attempt.
        await page.reload();
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
        await expect(page.getByLabel('Navigate to myproject folder')).toBeVisible();
    });
});
