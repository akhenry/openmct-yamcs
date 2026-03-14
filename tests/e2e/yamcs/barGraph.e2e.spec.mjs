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
 * This test suite is dedicated to testing the Bar Graph component.
 */

import { pluginFixtures, appActions } from 'openmct-e2e';
import { searchAndLinkTelemetryToObject } from '../yamcsAppActions.mjs';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults } = appActions;

test.describe('Bar Graph @yamcs', () => {
    let barGraph;

    test.beforeEach(async ({ page }) => {
        // Open a browser, navigate to the main page, and wait until the Yamcs dictionary is available in the tree.
        await page.goto('./');

        //Wait for Yamcs dictionary to load.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        // Set fixed time mode
        await page.evaluate(() => openmct.time.setMode('fixed', {
            start: Date.now() - 30000,
            end: Date.now()
        }));
        await page.waitForURL(/tc\.mode=fixed/);
        // Create the Bar Graph
        barGraph = await createDomainObjectWithDefaults(page, {
            type: 'Graph',
            name: 'Bar Graph'
        });
        // Enter edit mode for the overlay plot
        await searchAndLinkTelemetryToObject(page, 'Magnetometer', barGraph.name);
    });

    test('Requests a single historical datum', async ({ page }) => {
        page.goto(barGraph.url);

        await page.waitForResponse(/.*\/api\/.*\/parameters.*limit=1&order=desc$/);

        await expect(page.getByRole('main').getByText(barGraph.name)).toBeVisible();
    });
});
