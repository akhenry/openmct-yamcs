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

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, waitForPlotsToRender } = appActions;
const YAMCS_URL = 'http://localhost:8090/';

test.describe("Mdb runtime limits tests @yamcs", () => {

    test.beforeEach(async ({ page }) => {
        await clearLimitsForParameter(page);
    });

    test.afterEach(async ({ page }) => {
        await clearLimitsForParameter(page);
    });

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
        await page.getByLabel('Edit Object').click();

        //Drag and drop the Detector_Temp telemetry endpoint into this overlay plot
        const objectPane = page.locator('.c-object-view');
        await detectorTreeItem.dragTo(objectPane);

        // Save (exit edit mode)
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        // Assert that no limit lines are shown by default
        await page.waitForSelector('.js-limit-area', { state: 'attached' });
        expect(await page.locator('.c-plot-limit-line').count()).toBe(0);

        // Enter edit mode
        await page.getByLabel('Edit Object').click();

        // Expand the "Detector_Temp" plot series options and enable limit lines
        await page.getByRole('tab', { name: 'Config' }).click();
        await page.getByLabel('Expand Detector_Temp Plot').click();
        await page.getByLabel('Limit lines').check();

        // Save (exit edit mode)
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        // Change the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitChangeResponse = await page.request.patch(`${YAMCS_URL}api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp`, {
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

    test('Can show changed mdb limits when you navigate away from the view and back and no new requests are made on resize', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Reset the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitResetResponse = await page.request.patch(`${YAMCS_URL}api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp`, {
            data: {}
        });
        await expect(runTimeLimitResetResponse).toBeOK();

        // Create an Overlay Plot
        const overlayPlot = await createDomainObjectWithDefaults(page, {
            type: 'Overlay Plot'
        });

        //Expand the myproject folder (/myproject)
        await page.getByLabel('Expand myproject folder').click();
        //Expand the myproject under the previous folder (/myproject/myproject)
        await page.getByLabel('Expand myproject folder').click();

        //Find the Detector_Temp parameter (/myproject/myproject/Detector_Temp)
        const detectorTreeItem = page.getByRole('treeitem', { name: /Detector_Temp/ });
        await page.getByLabel('Edit Object').click();

        //Drag and drop the Detector_Temp telemetry endpoint into this overlay plot
        await detectorTreeItem.dragTo(page.locator('.c-object-view'));

        // Save (exit edit mode)
        await page.getByLabel('Save').click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        // Assert that no limit lines are shown by default
        await page.waitForSelector('.js-limit-area', { state: 'attached' });
        expect(await page.locator('.c-plot-limit-line').count()).toBe(0);

        // Enter edit mode
        await page.getByLabel('Edit Object').click();

        // Expand the "Detector_Temp" plot series options and enable limit lines
        await page.getByRole('tab', { name: 'Config' }).click();
        await page.getByLabel('Expand Detector_Temp Plot').click();
        await page.getByLabel('Limit lines').check();

        // Save (exit edit mode)
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        //navigate away from the overlay plot
        await page.goto("./", { waitUntil: "networkidle" });

        // Change the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitChangeResponse = await page.request.patch(`${YAMCS_URL}api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp`, {
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
        await page.locator('.plot-legend-item').hover();
        await expect(page.locator('.c-plot-limit')).toHaveCount(2);
        await assertExpectedLimitsValues(page.locator('.c-plot-limit'), {
            minInclusive: -0.8,
            maxInclusive: 0.5
        });

        // Setting up checks for the absence of specific network responses after networkidle.
        const responsesChecks = [
            checkForNoResponseAfterNetworkIdle(page, '**/api/mdb/myproject/space-systems'),
            checkForNoResponseAfterNetworkIdle(page, '**/api/mdb/myproject/parameters?details=yes&limit=1000'),
            checkForNoResponseAfterNetworkIdle(page, '**/api/user/'),
            checkForNoResponseAfterNetworkIdle(page, '**/api/mdb-overrides/myproject/realtime')
        ];

        // Resize the chart container by showing the snapshot pane.
        await page.getByLabel('Show Snapshots').click();
        // Wait for all checks to complete
        const responsesNotFound = await Promise.all(responsesChecks);
        // Ensure no network responses were found
        const noResponsesFound = responsesNotFound.every(notFound => notFound);
        expect(noResponsesFound).toBe(true);

        test.info().annotations.push({
            type: 'issue',
            description: 'https://github.com/akhenry/openmct-yamcs/issues/447'
        });
        // Ensure that the limits still show and have not changed
        await assertLimitLinesExistAndAreVisible(page);
        await page.locator('.plot-legend-item').hover();
        await expect(page.locator('.c-plot-limit')).toHaveCount(2);
        await assertExpectedLimitsValues(page.locator('.c-plot-limit'), {
            minInclusive: -0.8,
            maxInclusive: 0.5
        });
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
    // There should be 2 limit lines created by default
    await expect(page.locator('.c-plot-limit-line')).toHaveCount(2);
    const limitLineCount = await page.locator('.c-plot-limit-line').count();
    for (let i = 0; i < limitLineCount; i++) {
        await expect(page.locator('.c-plot-limit-line').nth(i)).toBeVisible();
    }
}

/**
 * Asserts that the limit line has the expected min and max values
 * @param {import('@playwright/test').Locator} limitLine
 * @param {{ minInclusive: number, maxInclusive: number }} expectedResults
 */
async function assertExpectedLimitsValues(limitLine, { minInclusive, maxInclusive }) {
    await expect(limitLine.first()).toContainText(`${maxInclusive}`);
    await expect(limitLine.nth(1)).toContainText(`${minInclusive}`);
}

// Function to check for the absence of a network response after networkidle
async function checkForNoResponseAfterNetworkIdle(page, urlPattern) {
    let responseReceived = false;
    // Listen for the network response before navigating to ensure we catch early requests
    page.on('response', response => {
        if (response.url().match(urlPattern)) {
            responseReceived = true;
        }
    });
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');

    // Return the inverse of responseReceived to indicate absence of response
    return !responseReceived;
}

async function clearLimitsForParameter(page) {
    // clear the limits for the Detector_Temp parameter using the yamcs API
    const runTimeLimitChangeResponse = await page.request.patch(`${YAMCS_URL}api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp`, {
        data: {}
    });
    await expect(runTimeLimitChangeResponse).toBeOK();
}
