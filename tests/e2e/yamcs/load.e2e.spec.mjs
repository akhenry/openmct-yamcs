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
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const YAMCS_URL = 'http://localhost:8090/';

test.describe("Tests to ensure that open mct loads correctly @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        await clearCustomAlgorithm(page);
    });

    test.afterEach(async ({ page }) => {
        await clearCustomAlgorithm(page);
    });

    test('Can load correctly when mdb algorithms are changed at runtime', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", {waitUntil: "networkidle"});
        await expect(page.getByLabel('Navigate to myproject folder')).toBeVisible();

        await updateCustomAlgorithm(page);

        await page.reload({waitUntil: "networkidle"});

        await expect(page.getByLabel('Navigate to myproject folder')).toBeVisible();
    });
});

async function clearCustomAlgorithm(page) {
    // clear the custom algorithm for the copySunsensor using the yamcs API
    const runTimeCustomAlgorithmResetResponse = await page.request.patch(`${YAMCS_URL}api/mdb/myproject/realtime/algorithms/myproject/copySunsensor`, {
        data: {
            "action": "RESET"
        }
    });
    await expect(runTimeCustomAlgorithmResetResponse).toBeOK();
}

async function updateCustomAlgorithm(page) {
    // Change the custom algorithm for the copySunsensor using the yamcs API
    const runTimeCustomAlgorithmChangeResponse = await page.request.patch(`${YAMCS_URL}api/mdb/myproject/realtime/algorithms/myproject/copySunsensor`, {
        data: {
            "action": "SET",
            "algorithm": {
                "text": "\n\t\t\t\t\tout0.setFloatValue(in.getEngValue().getFloatValue()); \n\t\t\t\t"
            }
        }
    });
    await expect(runTimeCustomAlgorithmChangeResponse).toBeOK();
}
