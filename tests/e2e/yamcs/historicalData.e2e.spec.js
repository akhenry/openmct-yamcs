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
Network Specific Tests
*/

const { test, expect } = require('../opensource/pluginFixtures');
const { setFixedTimeMode } = require('../opensource/appActions');

test.describe("Samples endpoint with useRawValue search param @yamcs", () => {
    // Collect all request events, specifically for YAMCS
    let networkRequests = [];
    let filteredRequests = [];

    test('When in plot view, samples endpoint is used for enum type parameters with the useRawValue parameter', async ({ page }) => {
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Change to fixed time
        await setFixedTimeMode(page);

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=Enum_Para_1').first().click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // 1.  batched request for latest telemetry using the bulk API
        // 2.  samples request for telemetry data
        const samplesRequests = filteredRequests.filter(request => request.url().indexOf('/samples') > -1);
        const nonSampleRequests = filteredRequests.filter(request => request.url().indexOf('/samples') < 0);
        expect(samplesRequests.length).toBe(1);
        expect(samplesRequests[0].url()).toContain("useRawValue=true");
        expect(nonSampleRequests.length).toBe(1);
    });

    test('When in plot view, samples endpoint is used for scalar (number) type parameters with no useRawValue parameter', async ({ page }) => {
        networkRequests = [];
        filteredRequests = [];
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Change to fixed time
        await setFixedTimeMode(page);

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Length').first().click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // 1.  batched request for latest telemetry using the bulk API
        // 2.  samples request for telemetry data
        const samplesRequests = filteredRequests.filter(request => request.url().indexOf('/samples') > -1);
        const nonSampleRequests = filteredRequests.filter(request => request.url().indexOf('/samples') < 0);
        expect(samplesRequests.length).toBe(1);
        expect(samplesRequests[0].url()).not.toContain("useRawValue");
        expect(nonSampleRequests.length).toBe(1);
    });

    test('When in table view, samples endpoint and useRawValue are not used for scalar (number) type parameters', async ({ page }) => {
        networkRequests = [];
        filteredRequests = [];
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Change to fixed time
        await setFixedTimeMode(page);

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();

        await page.waitForLoadState('networkidle');
        await page.locator('text=Enum_Para_1').first().click();
        await page.waitForLoadState('networkidle');

        //switch to table view
        networkRequests = [];
        await page.locator("button[title='Change the current view']").click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // 1.  batched request for latest telemetry using the bulk API
        // 2.  samples request for telemetry data
        //Switch view to table
        // 3.  batched request for latest telemetry using the bulk API
        // 4.  parameters history request for telemetry data
        // 5.  parameters history request for telemetry data with token
        const samplesRequests = filteredRequests.filter(request => request.url().indexOf('/samples') > -1);
        const nonSampleRequests = filteredRequests.filter(request => request.url().indexOf('/samples') < 0);
        expect(samplesRequests.length).toBe(0);
        expect(nonSampleRequests.length).toBe(filteredRequests.length);
    });

    test('When in table view, samples endpoint and useRawValue are not used for enum type parameters', async ({ page }) => {
        networkRequests = [];
        filteredRequests = [];
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // Change to fixed time
        await setFixedTimeMode(page);

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();

        await page.waitForLoadState('networkidle');
        await page.locator('text=Enum_Para_1').first().click();
        await page.waitForLoadState('networkidle');

        //switch to table view
        networkRequests = [];
        await page.locator("button[title='Change the current view']").click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // 1.  batched request for latest telemetry using the bulk API
        // 2.  samples request for telemetry data
        //Switch view to table
        // 3.  batched request for latest telemetry using the bulk API
        // 4.  parameters history request for telemetry data
        // 5.  parameters history request for telemetry data with token
        const samplesRequests = filteredRequests.filter(request => request.url().indexOf('/samples') > -1);
        const nonSampleRequests = filteredRequests.filter(request => request.url().indexOf('/samples') < 0);
        expect(samplesRequests.length).toBe(0);
        expect(nonSampleRequests.length).toBe(filteredRequests.length);
    });

    // Try to reduce indeterminism of browser requests by only returning fetch requests.
    // Filter out preflight CORS, fetching stylesheets, page icons, etc. that can occur during tests
    function filterNonFetchRequests(requests) {
        return requests.filter(request => {
            return (request.resourceType() === 'fetch');
        });
    }
});
