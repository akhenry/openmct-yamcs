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
Telemetry Table Specific Tests
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

test.describe("Telemetry Tables tests @yamcs", () => {

    test.beforeEach(async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();

        // Expand myproject and subfolder myproject
        await page.getByLabel('Expand myproject').click();
    });

    test('Telemetry Tables viewing an unpersistable object, will not modify the configuration on mode change', async ({ page }) => {
        await page.getByLabel('Navigate to Events yamcs.').click();

        // Before clicking the button, start listening for console errors
        let consoleErrors = [];
        page.on('console', message => {
            if (message.type() === 'error') {
                consoleErrors.push(message.text());
            }
        });

        // Find the mode switch button and click it
        await page.getByRole('button', { name: 'SHOW UNLIMITED' }).click();

        // Assert that the mutation error message is not present in the consoleErrors array
        await expect(consoleErrors).not.toContain('Error: Attempted to mutate immutable object Events');
    });

});
