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
MDB Limits Specific Tests
*/

const { test, expect } = require('../opensource/pluginFixtures');
const { createDomainObjectWithDefaults, waitForPlotsToRender } = require('../opensource/appActions');

test.describe("Mdb runtime limits tests @yamcs", () => {
    test('Can show mdb limits when changed', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Create an Overlay Plot
        const overlayPlot = await createDomainObjectWithDefaults(page, {
            type: 'Overlay Plot'
        });

        //Expand the myproject folder (/myproject)
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();

        //Expand the myproject under the previous folder (/myproject/myproject)
        const viperRoverTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        const viperRoverProjectTriangle = viperRoverTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await viperRoverProjectTriangle.click();

        //Find the Detector_Temp parameter (/myproject/myproject/Detector_Temp)
        const detectorTreeItem = page.getByRole('treeitem', { name: /Detector_Temp/ });

        // Enter edit mode for the overlay plot
        await page.click('button[title="Edit"]');

        //Drag and drop the Detector_Temp telemetry endpoint into this overlay plot
        const objectPane = page.locator('.c-object-view');
        await detectorTreeItem.dragTo(objectPane);

        // Save (exit edit mode)
        await page.locator('button[title="Save"]').click();
        await page.locator('li[title="Save and Finish Editing"]').click();

        // Assert that no limit lines are shown by default
        await page.waitForSelector('.js-limit-area', { state: 'attached' });
        expect(await page.locator('.c-plot-limit-line').count()).toBe(0);

        // Enter edit mode
        await page.click('button[title="Edit"]');

        // Expand the "Detector_Temp" plot series options and enable limit lines
        await page.getByRole('tab', { name: 'Config' }).click();
        await page
            .getByRole('list', { name: 'Plot Series Properties' })
            .locator('span')
            .first()
            .click();
        await page
            .getByRole('list', { name: 'Plot Series Properties' })
            .locator('[title="Display limit lines"]~div input')
            .check();

        // Save (exit edit mode)
        await page.locator('button[title="Save"]').click();
        await page.locator('li[title="Save and Finish Editing"]').click();

        // Change the limits for the Detector_Temp parameter using the yamcs API)
        const runTimeLimitChangeResponse = await page.request.patch('http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp', {
            data: {
                action: 'SET_DEFAULT_ALARMS',
                defaultAlarm: {
                    minViolations: 1,
                    staticAlarmRange: [
                        {
                            level: 'WATCH',
                            minInclusive: -0.8,
                            maxInclusive: 0.5
                        }
                    ]
                }
            }
        });

        await expect(runTimeLimitChangeResponse).toBeOK();

        // Ensure that the changed limits are now displayed without a reload
        await assertLimitLinesExistAndAreVisible(page);
    });

    test('Can show changed mdb limits when you navigate away from the view and back', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Reset the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitResetResponse = await page.request.patch('http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp', {
            data: {}
        });
        await expect(runTimeLimitResetResponse).toBeOK();

        // Create an Overlay Plot
        const overlayPlot = await createDomainObjectWithDefaults(page, {
            type: 'Overlay Plot'
        });

        //Expand the myproject folder (/myproject)
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();

        //Expand the myproject under the previous folder (/myproject/myproject)
        const viperRoverTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        const viperRoverProjectTriangle = viperRoverTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await viperRoverProjectTriangle.click();

        //Find the Detector_Temp parameter (/myproject/myproject/Detector_Temp)
        const detectorTreeItem = page.getByRole('treeitem', { name: /Detector_Temp/ });

        // Enter edit mode for the overlay plot
        await page.click('button[title="Edit"]');

        //Drag and drop the Detector_Temp telemetry endpoint into this overlay plot
        const objectPane = page.locator('.c-object-view');
        await detectorTreeItem.dragTo(objectPane);

        // Save (exit edit mode)
        await page.locator('button[title="Save"]').click();
        await page.locator('li[title="Save and Finish Editing"]').click();

        // Assert that no limit lines are shown by default
        await page.waitForSelector('.js-limit-area', { state: 'attached' });
        expect(await page.locator('.c-plot-limit-line').count()).toBe(0);

        // Enter edit mode
        await page.click('button[title="Edit"]');

        // Expand the "Detector_Temp" plot series options and enable limit lines
        await page.getByRole('tab', { name: 'Config' }).click();
        await page
            .getByRole('list', { name: 'Plot Series Properties' })
            .locator('span')
            .first()
            .click();
        await page
            .getByRole('list', { name: 'Plot Series Properties' })
            .locator('[title="Display limit lines"]~div input')
            .check();

        // Save (exit edit mode)
        await page.locator('button[title="Save"]').click();
        await page.locator('li[title="Save and Finish Editing"]').click();

        //navigate away from the overlay plot
        await page.goto("./", { waitUntil: "networkidle" });

        // Change the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitChangeResponse = await page.request.patch('http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp', {
            data: {
                action: 'SET_DEFAULT_ALARMS',
                defaultAlarm: {
                    minViolations: 1,
                    staticAlarmRange: [
                        {
                            level: 'WATCH',
                            minInclusive: -0.8,
                            maxInclusive: 0.5
                        }
                    ]
                }
            }
        });

        await expect(runTimeLimitChangeResponse).toBeOK();

        //navigate back to the overlay plot
        await page.goto(overlayPlot.url, { waitUntil: "networkidle" });

        // Ensure that the changed limits are now displayed without a reload
        await assertLimitLinesExistAndAreVisible(page);
    });
});

/**
 * Asserts that limit lines exist and are visible
 * @param {import('@playwright/test').Page} page
 */
async function assertLimitLinesExistAndAreVisible(page) {
    // Wait for plot series data to load
    await waitForPlotsToRender(page);
    // Wait for limit lines to be created
    await page.waitForSelector('.c-plot-limit-line', { state: 'attached' });
    const limitLineCount = await page.locator('.c-plot-limit-line').count();
    // There should be 2 limit lines created by default
    expect(await page.locator('.c-plot-limit-line').count()).toBe(2);
    for (let i = 0; i < limitLineCount; i++) {
        await expect(page.locator('.c-plot-limit-line').nth(i)).toBeVisible();
    }
}
