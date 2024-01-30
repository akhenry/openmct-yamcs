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

import { test, expect } from '../opensource/pluginFixtures.js';
import { setFixedTimeMode } from '../opensource/appActions.js';

/**
 * This test suite checks the network requests made by Open MCT to YAMCS.
 */
test.describe("Quickstart network requests @yamcs", () => {
    // Keeping track of network requests during the tests.
    let networkRequests = [];
    let filteredRequests = [];

    // These variables hold the promises for specific network requests we expect to occur.
    let parameterArchiveGet, batchGetStaleness, allParams, userGet, mdbOverride, mdbGet;

    test('Validate network traffic to YAMCS', async ({ page }) => {
        // Listening for all network requests and pushing them into networkRequests array.
        page.on('request', request => networkRequests.push(request));

        // Setting up promises to wait for specific network responses.
        networkRequests = [];
        mdbGet = page.waitForResponse('**/api/mdb/myproject/space-systems');
        allParams = page.waitForResponse('**/api/mdb/myproject/parameters?details=yes&limit=1000');
        userGet = page.waitForResponse('**/api/user/');
        mdbOverride = page.waitForResponse('**/api/mdb-overrides/myproject/realtime');

        // Testing the initial page load and verifying the presence of specific elements.
        await page.goto("./", { waitUntil: "networkidle" });
        await Promise.all([mdbGet, allParams, userGet, mdbOverride]);
        filteredRequests = filterNonFetchRequests(networkRequests);
        expect(filteredRequests.length).toBe(4);

        // I'm not sure what is going on here
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();
        await myProjectTreeItem.first().locator('span.c-disclosure-triangle').click();
        await myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle').click();

        // More UI interactions and network request verifications.
        await page.waitForLoadState('networkidle');
        networkRequests = [];
        batchGetStaleness = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click();
        await batchGetStaleness;

        await page.waitForLoadState('networkidle');
        expect(networkRequests.length).toBe(1);

        // Further UI interactions and network requests verification.
        networkRequests = [];
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        batchGetStaleness = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click();

        await Promise.all([parameterArchiveGet, batchGetStaleness]);

        await page.waitForLoadState('networkidle');
        expect(networkRequests.length).toBe(2);

        // Simulating the change to fixed time mode and validating network requests.
        networkRequests = [];
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        await setFixedTimeMode(page);
        await page.waitForLoadState('networkidle');
        await parameterArchiveGet;
        expect(networkRequests.length).toBe(1);

        // Clicking on a different telemetry item to generate new requests.
        networkRequests = [];
        let groupFlagsGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.GroupFlags**');
        let countGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.Count**');
        batchGetStaleness = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');

        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click();
        await page.waitForLoadState('networkidle');

        await Promise.all([groupFlagsGet, countGet, batchGetStaleness]);

        expect(networkRequests.length).toBe(3);

        // Clicking on the telemetry item in Fixed Time mode to generate two requests.
        networkRequests = [];
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        batchGetStaleness = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click();
        await page.waitForLoadState('networkidle');

        await Promise.all([parameterArchiveGet, batchGetStaleness]);

        // Waiting for debounced requests in YAMCS Latest Telemetry Provider to finish.
        expect(networkRequests.length).toBe(2);

        // Simulating a page refresh to generate a sequence of network requests.
        networkRequests = [];
        userGet = page.waitForResponse('**/api/user/');
        allParams = page.waitForResponse('**/api/mdb/myproject/parameters?details=yes&limit=1000');
        mdbOverride = page.waitForResponse('**/api/mdb-overrides/myproject/realtime');
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        batchGetStaleness = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        mdbOverride = page.waitForResponse('**/api/mdb-overrides/myproject/realtime');

        await page.reload({ waitUntil: 'networkidle' });
        await Promise.all([allParams, userGet, mdbOverride, parameterArchiveGet, batchGetStaleness, mdbOverride]);

        // Waiting for debounced requests in YAMCS Latest Telemetry Provider to finish.
        filteredRequests = filterNonFetchRequests(networkRequests);
        expect(filteredRequests.length).toBe(6);

        // Removing the 'request' event listener to prevent potential memory leaks.
        page.removeListener('request', request => networkRequests.push(request));
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
