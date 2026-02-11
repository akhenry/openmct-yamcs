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
 * Network Specific Tests for Open MCT and YAMCS connectivity.
 * This suite verifies the network requests made by the application to ensure correct interaction with YAMCS.
 */

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { setFixedTimeMode } = appActions;

/**
 * Performs a series of UI actions and verifies the network requests made by the application meet expectations.
 */
test.describe("Quickstart network requests @yamcs", () => {
    // Keeping track of network requests during the tests.
    let networkRequests = [];
    let filteredRequests = [];
    let expectedRequests = [];

    test('Validate network traffic to YAMCS', async ({ page }) => {
        // Listening for all network requests and pushing them into networkRequests array.
        page.on('request', (request) => {
            networkRequests.push(request);
        });

        networkRequests = [];
        //Expect requests to establish Yamcs telemetry dictionary
        expectedRequests = [
            page.waitForResponse('**/api/mdb/myproject/space-systems'),
            page.waitForResponse('**/api/mdb/myproject/parameters?details=yes&limit=1000'),
            page.waitForResponse('**/api/user/'),
            page.waitForResponse('**/api/processors/myproject/realtime/queues'),
            page.waitForResponse('**/api/mdb-overrides/myproject/realtime')
        ];

        // Testing the initial page load and verifying that only the expected requests are made.
        await page.goto("./");
        // Wait for all expected requests to resolve.
        await Promise.all(expectedRequests);
        filteredRequests = filterNonFetchRequests(networkRequests);
        // Confirm that no unexpected requests were made
        expect(filteredRequests.length).toBe(expectedRequests.length);

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();
        await myProjectTreeItem.first().locator('span.c-disclosure-triangle').click();
        await myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle').click();

        await expect(page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' })).toBeVisible();

        networkRequests = [];
        // When item is expanded in the tree, expect a single batch get request to the dictionary to get children
        expectedRequests = [
            page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet')
        ];
        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click();
        await expect(page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' })).toBeVisible();
        await Promise.all(expectedRequests);

        expect(filterNonFetchRequests(networkRequests).length).toBe(expectedRequests.length);

        networkRequests = [];
        // When navigating to a parameter, expect to see a request for samples (default view is plot)
        // Also expect to see a request to establish the children of the navigated parameter
        expectedRequests = [
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**'),
            page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet')
        ];
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click();

        await Promise.all(expectedRequests);

        expect(networkRequests.length).toBe(expectedRequests.length);

        // Simulating the change to fixed time mode and validating network requests.
        networkRequests = [];
        await setFixedTimeMode(page);
        await page.waitForURL(/.*mode=fixed.*/);
        // Simply switching to fixed time mode should not generate any new requests. We have everything we need already.
        expect(filterNonFetchRequests(networkRequests).length).toBe(0);

        networkRequests = [];
        //Expand a different paramter in the tree and wait for expected requests for children
        expectedRequests = [
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.GroupFlags**'),
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.Count**'),
            page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet')
        ];

        await expect(page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' })).toBeVisible();
        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click();

        await Promise.all(expectedRequests);

        expect(networkRequests.length).toBe(expectedRequests.length);

        // Clicking on the telemetry item in Fixed Time mode to generate two requests.
        networkRequests = [];
        expectedRequests = [
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**'),
            page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet')
        ];

        await expect(page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' })).toBeVisible();
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click();

        await Promise.all(expectedRequests);

        // Waiting for debounced requests in YAMCS Latest Telemetry Provider to finish.
        expect(networkRequests.length).toBe(expectedRequests.length);

        // Simulating a page refresh to generate a sequence of network requests.
        networkRequests = [];
        expectedRequests = [
            page.waitForResponse('**/api/mdb/myproject/space-systems'),
            page.waitForResponse('**/api/processors/myproject/realtime/queues'),
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**'),
            page.waitForResponse('**/api/user/'),
            page.waitForResponse('**/api/mdb/myproject/parameters?details=yes&limit=1000'),
            page.waitForResponse('**/api/mdb-overrides/myproject/realtime'),
            page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**'),
            page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet')
        ];
        await page.reload();

        //Wait until all expected requests are resolved.
        await Promise.all(expectedRequests);

        // Waiting for debounced requests in YAMCS Latest Telemetry Provider to finish.
        filteredRequests = filterNonFetchRequests(networkRequests);
        // Confirm that no unexpected requests were made.
        expect(filteredRequests.length).toBe(expectedRequests.length);
    });

    /**
     * Filters out non-fetch requests from the given array of network requests.
     * This includes preflight CORS, fetching stylesheets, page icons, etc.
     * @param {Array} requests - Array of network requests to filter.
     * @returns {Array} Filtered network requests.
     */
    function filterNonFetchRequests(requests) {
        return requests.filter(request => request.resourceType() === 'fetch');
    }
});
