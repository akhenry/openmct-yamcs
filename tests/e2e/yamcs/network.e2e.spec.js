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

import { test, expect } from '../opensource/pluginFixtures.js';
import { setFixedTimeMode } from '../opensource/appActions.js';

test.describe("Quickstart network requests @yamcs", () => {
    let networkRequests = [];
    let filteredRequests = [];
    let parameterArchiveGet;
    let batchPost;
    let allParams;
    let userGet;
    let mdbOverride;

    test.only('Validate network traffic to YAMCS', async ({ page }) => {
        page.on('request', (request) => networkRequests.push(request));

        allParams = page.waitForResponse('/yamcs-proxy/api/mdb/myproject/parameters?details=yes&limit=1000');
        userGet = page.waitForResponse('/yamcs-proxy/api/user/');
        mdbOverride = page.waitForResponse('/yamcs-proxy/api/mdb-overrides/myproject/realtime');

        // First Load Tests
        await page.goto("./", { waitUntil: "networkidle" });

        await Promise.all([allParams, userGet, mdbOverride]);

        //I'm not sure what this block does yet
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        await expect(myProjectTreeItem).toBeVisible();
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const secondMyProjectTriangle = myProjectTreeItem.nth(1).locator('span.c-disclosure-triangle');
        await secondMyProjectTriangle.click();
 
        // Network requests tests for selecting a composite telemetry item
        await page.waitForLoadState('networkidle');
        networkRequests = [];
        batchPost = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click()
        await batchPost;

        await page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 500));
        filteredRequests = filterNonFetchRequests(networkRequests);

        // Network requests for the composite telemetry with multiple items should be:
        // 1.  batched request for latest telemetry using the bulk API
        expect(filteredRequests.length).toBe(1);

        networkRequests = [];
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        batchPost = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click()

        await Promise.all([parameterArchiveGet, batchPost]);

        await page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 500));
        filteredRequests = filterNonFetchRequests(networkRequests);

        // Should only be fetching:
        // 1. telemetry from parameter archive
        // 2. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(2);

        // Change to fixed time generates a single request for the current telemetry parameter archive
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        await setFixedTimeMode(page);
        await page.waitForLoadState('networkidle');
        await parameterArchiveGet;

        // Clicking on a different telemetry item should generate a request for the new telemetry
        networkRequests = [];
        let groupFlagsGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.GroupFlags**');
        let countGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Sequence.Count**');
        batchPost = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');

        await page.getByRole('treeitem', { name: 'Expand CCSDS_Packet_Sequence' }).click()
        await page.waitForLoadState('networkidle');

        await Promise.all([groupFlagsGet, countGet, batchPost]);

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));

        filteredRequests = filterNonFetchRequests(networkRequests);

        // Should fetch from parameter archive, so:
        // 1. GET for first telemetry item from parameter archive
        // 2. GET for second telemetry item from parameter archive
        // 3. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(3);

        //Clicking on the telemetry item should generate two requests when viewed in Fixed Time
        networkRequests = [];
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        batchPost = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        await page.getByRole('treeitem', { name: 'CCSDS_Packet_Length' }).click()
        await page.waitForLoadState('networkidle');

        await Promise.all([parameterArchiveGet, batchPost]);

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));
        filteredRequests = filterNonFetchRequests(networkRequests);
        // Should only be fetching telemetry from parameter archive,
        // with no further request for limits should be made.
        // 1. GET for telemetry item from parameter archive
        // 2. POST: batchGet for staleness
        expect(filteredRequests.length).toBe(2);

        //Refreshing the page should generate the following requests.
        // 1. user api
        userGet = page.waitForResponse('/yamcs-proxy/api/user/');
        // 2. space systems MDB
        allParams = page.waitForResponse('/yamcs-proxy/api/mdb/myproject/parameters?details=yes&limit=1000');
        // 3. parameter dictionary
        mdbOverride = page.waitForResponse('/yamcs-proxy/api/mdb-overrides/myproject/realtime');
        // 4. specific parameter telemetry for CCSDS_Packet_Length
        parameterArchiveGet = page.waitForResponse('**/api/archive/myproject/parameters/myproject/CCSDS_Packet_Length/samples**');
        // 5. POST: batchGet for staleness
        batchPost = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');
        // 6. GET for telemetry item mdb overrides
        mdbOverride = page.waitForResponse('/yamcs-proxy/api/mdb-overrides/myproject/realtime');

        networkRequests = [];
        await page.reload( {waitUntil : 'networkidle'});
        await Promise.all([allParams, userGet, mdbOverride, parameterArchiveGet, batchPost, mdbOverride]);

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        await new Promise(resolve => setTimeout(resolve, 500));
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