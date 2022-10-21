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

test.describe("Quickstart network requests @yamcs", () => {
    // Collect all request events, specifically for YAMCS
    let networkRequests = [];

    test('Validate network traffic to YAMCS', async ({ page }) => {
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        await expandTreePaneItemByName(page, 'myproject');
        await expandTreePaneItemByName(page, 'myproject');

        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Sequence').click();
        await page.waitForLoadState('networkidle');
        // Network requests should be zero in real-time mode (using websocket cache)
        expect(filterNonFetchRequests(networkRequests).length).toBe(0);

        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Length').click();
        await page.waitForLoadState('networkidle');
        // Should only be fetching telemetry from parameter archive,
        // no second request (for limits) should be made
        expect(filterNonFetchRequests(networkRequests).length).toBe(1);

        // Change to fixed time
        await page.locator('button:has-text("Local Clock")').click();
        await page.locator('text="Fixed Timespan"').click();

        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Sequence').click();
        await page.waitForLoadState('networkidle');
        // Should fetch from parameter archive, so two requests, one for each item in the aggregate
        expect(filterNonFetchRequests(networkRequests).length).toBe(2);

        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Length').click();
        await page.waitForLoadState('networkidle');
        // Should only be fetching telemetry from parameter archive,
        // no second request (for limits) should be made
        expect(filterNonFetchRequests(networkRequests).length).toBe(1);

    });

    // Try to reduce indeterminism of browser requests by only returning fetch requests.
    // Filter out preflight CORS, fetching stylesheets, page icons, etc. that can occur during tests
    function filterNonFetchRequests(requests) {
        return requests.filter(request => {
            return (request.resourceType() === 'fetch');
        });
    }
});

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} name
 */
async function expandTreePaneItemByName(page, name) {
    const treePane = page.locator('#tree-pane');
    const treeItem = treePane.locator(`role=treeitem[expanded=false][name=/${name}/]`);
    const expandTriangle = treeItem.locator('.c-disclosure-triangle');
    await expandTriangle.click();
}
