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

test.describe("Quickstart network requests @yamcs", () => {
    // Collect all request events, specifically for YAMCS
    let networkRequests = [];
    let filteredRequests = [];

    test('Validate network traffic to YAMCS', async ({ page }) => {
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Sequence').first().click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // Network requests for the composite telemetry with multiple items should be:
        // 1.  batched request for latest telemetry using the bulk API
        expect(filteredRequests.length).toBe(1);

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Length').click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // Should only be fetching:
        // 1. telemetry from parameter archive
        // 2. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(2);

        // Change to fixed time
        await setFixedTimeMode(page);

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Sequence').first().click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // Should fetch from parameter archive, so:
        // 1. GET for first telemetry item from parameter archive
        // 2. GET for second telemetry item from parameter archive
        // 3. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(3);

        await page.waitForLoadState('networkidle');
        networkRequests = [];
        await page.locator('text=CCSDS_Packet_Length').first().click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));
        filteredRequests = filterNonFetchRequests(networkRequests);
        // Should only be fetching telemetry from parameter archive,
        // with no further request for limits should be made.
        // 1. GET for telemetry item from parameter archive
        // 2. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(2);

        networkRequests = [];
        await page.reload();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        // Should be fetching:
        // 1. user api
        // 2. space systems
        // 3. parameter dictionary
        // 4. specific parameter telemetry for CCSDS_Packet_Length
        // 5. POST: batchGet for staleness
        // 6. GET for telemetry item mdb overrides
        filteredRequests = filterNonFetchRequests(networkRequests);
        expect(filteredRequests.length).toBe(6);

    });

    // Try to reduce indeterminism of browser requests by only returning fetch requests.
    // Filter out preflight CORS, fetching stylesheets, page icons, etc. that can occur during tests
    function filterNonFetchRequests(requests) {
        return requests.filter(request => {
            return (request.resourceType() === 'fetch');
        });
    }
});
