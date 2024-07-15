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

    // An error will be thrown if an attempt to mutate an immutable object is made, this will cover
    // that case as well as any other errors during the test
    test.use({ failOnConsoleError: true });

    test.beforeEach(async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();

        // Expand myproject
        await page.getByLabel('Expand myproject').click();
    });

    test('Telemetry Tables viewing an unpersistable object, will not modify the configuration on mode change', async ({ page }) => {
        // Navigat to the Events table
        await page.getByLabel('Navigate to Events yamcs.').click();

        // Find the mode switch button and click it, this will trigger a mutation on mutable objects configuration
        await page.getByRole('button', { name: 'SHOW UNLIMITED' }).click();

        // Assert that the 'SHOW LIMITED' button is now visible
        await expect(page.getByRole('button', { name: 'SHOW LIMITED' })).toBeVisible();
    });

    test('Telemetry tables when changing mode, will not change the sort order of the request', async ({ page }) => {
        const EVENTS_URL_STRING = 'events?';

        // Navigate to the Events table
        await page.getByLabel('Navigate to Events yamcs.').click();

        // Intercept and validate the request before clicking the button
        const requestBefore = await page.waitForRequest(request => request.url().includes(EVENTS_URL_STRING) && request.url().includes('order=desc'));
        expect(requestBefore.url()).toContain('order=desc');

        // Find the mode switch button and click it, this will trigger a mutation on mutable objects configuration
        await page.getByRole('button', { name: 'SHOW UNLIMITED' }).click();

        // Intercept and validate the request after clicking the button
        const requestAfter = await page.waitForRequest(request => request.url().includes(EVENTS_URL_STRING) && request.url().includes('order=desc'));
        expect(requestAfter.url()).toContain('order=desc');

        // Assert that the 'SHOW LIMITED' button is now visible
        await expect(page.getByRole('button', { name: 'SHOW LIMITED' })).toBeVisible();
    });

});
