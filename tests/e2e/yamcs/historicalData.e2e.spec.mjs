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

import { pluginFixtures, appActions } from '@openmct/e2e';
const { test, expect } = pluginFixtures;
const { setFixedTimeMode } = appActions;

test.describe("Samples endpoint with useRawValue search param @yamcs", () => {
    // Collect all request events, specifically for YAMCS
    let filteredRequests = [];
    let networkRequests = [];
    test.beforeEach(async ({ page }) => {
        page.on('request', (request) => networkRequests.push(request));
        // Go to baseURL
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();
        // Change to fixed time
        await setFixedTimeMode(page);

        // Expand myproject and subfolder myproject
        await page.getByLabel('Expand myproject').click();
        await page.getByLabel('Expand myproject').click();
        // await expect(page.getByText('Loading...')).toBeHidden();
        networkRequests = [];
        filteredRequests = [];
    });

    test('When in plot view, samples endpoint is used for enum type parameters with the useRawValue parameter', async ({ page }) => {
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // FIXME: can we use waitForRequest?
        await page.waitForTimeout(500);

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
        await page.getByLabel('Navigate to CCSDS_Packet_Length yamcs').click();

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // FIXME: can we use waitForRequest?
        await page.waitForTimeout(500);

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
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        //switch to table view
        networkRequests = [];
        await page.getByLabel('Open the View Switcher Menu').click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // FIXME: can we use waitForRequest?
        await page.waitForTimeout(500);

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

    test('When in table view and in unlimited mode, requests contain the "order=desc" parameter', async ({ page }) => {
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        //switch to table view
        networkRequests = [];
        await page.getByLabel('Open the View Switcher Menu').click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // FIXME: can we use waitForRequest?
        await page.waitForTimeout(500);

        filteredRequests = filterNonFetchRequests(networkRequests);
        // Verify we are in "Limited" mode
        await expect(page.getByRole('button', { name: 'SHOW UNLIMITED' })).toBeVisible();

        // Check if any request URL contains the 'order=desc' parameter
        const hasOrderDesc = filteredRequests.some(request => request.url().includes('order=desc'));
        expect(hasOrderDesc).toBe(true);
    });

    test('When in table view, samples endpoint and useRawValue are not used for enum type parameters', async ({ page }) => {
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        //switch to table view
        networkRequests = [];
        await page.getByLabel('Open the View Switcher Menu').click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // FIXME: can we use waitForRequest?
        await page.waitForTimeout(500);

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
