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

import { pluginFixtures, appActions } from 'openmct-e2e';
import { postEvents } from './quickstartTools.mjs';
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
        await page.waitForURL(/view=table/);
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

    test('When in table view and in limited mode, requests contain the "order=desc" parameter', async ({ page }) => {
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        //switch to table view
        networkRequests = [];
        await page.getByLabel('Open the View Switcher Menu').click();
        const viewAndRequestPromises = Promise.all([
            page.waitForURL(/view=table/),
            page.waitForResponse(/.*\/api\/archive.*order=desc.*$/)
        ]);
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();

        // Wait for the table view to load and for the order=desc parameter to be included in the request
        await viewAndRequestPromises;
        // Verify we are in "Limited" mode
        await expect(page.getByRole('button', { name: 'SHOW UNLIMITED' })).toBeVisible();
    });

    test('When in table view, samples endpoint is not used for enum type parameters', async ({ page }) => {
        await page.getByLabel('Navigate to Enum_Para_1 yamcs').click();

        //switch to table view
        networkRequests = [];
        await page.getByLabel('Open the View Switcher Menu').click();
        await page.getByRole('menuitem', { name: /Telemetry Table/ }).click();

        await page.waitForResponse(/.*\/api\/.*\/parameters.*$/);

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
        expect(filteredRequests.length).toBeGreaterThan(0);
    });

    // Try to reduce indeterminism of browser requests by only returning fetch requests.
    // Filter out preflight CORS, fetching stylesheets, page icons, etc. that can occur during tests
    function filterNonFetchRequests(requests) {
        return requests.filter(request => {
            return (request.resourceType() === 'fetch');
        });
    }
});

/*
 * Regression coverage for issues #62 ("Implement paging in telemetry
 * providers") and #67 ("[Historical Provider] Issues with auto paging").
 *
 * YAMCS caps every single archive response at 1000 records and returns a
 * `continuationToken` when more records are available. #62's fix taught
 * `accumulateResults` (src/utils.js) to keep following that token until
 * either every record has been gathered or a caller-supplied
 * `totalRequestSize` is reached, instead of the old behavior of silently
 * truncating results at 300 (or later 1000) records. #67's fix (in the same
 * PR series) corrected `getResponseKeyById` (historical-telemetry-provider.js)
 * to map the *events* endpoint to the `event` response-body key -- with the
 * wrong key, `accumulateResults` would find nothing to accumulate on any
 * page and silently return an empty/truncated result set for event history.
 *
 * Prior to this spec, multi-page ( >1000 record) coverage was only
 * incidental -- abortNavigation.e2e.spec.mjs exercises continuation tokens
 * as a side effect of testing abort behavior, but never asserts that the
 * full record count/order actually comes back correctly. This test seeds
 * >1000 archived *events* directly via the YAMCS REST API (fast and
 * deterministic, unlike waiting on the simulator's real-time parameter
 * cadence) and asserts the historical provider returns every one of them,
 * gapless and in order, having actually followed multiple continuation
 * tokens to do it.
 */
test.describe("Multi-page historical archive requests @yamcs", () => {
    test.use({ failOnConsoleError: true });

    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();
        await setFixedTimeMode(page);
    });

    test('A request for >1000 archived events returns every event, gapless and in order, across multiple continuation-token pages', async ({ page }) => {
        test.setTimeout(120 * 1000);

        const yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();

        // A per-run marker lets us pick our own seeded events back out of the
        // results even if the live instance also has unrelated archived
        // events (e.g. simulator-generated alarms) in the same time window.
        const runMarker = `paging-regression-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
        const EVENT_COUNT = 1200; // > 1000, so at least two continuation-token pages are required
        const baseTime = Date.now() - 10 * 60 * 1000; // safely in the past, clear of live simulator activity

        const events = Array.from({ length: EVENT_COUNT }, (_, i) => ({
            type: runMarker,
            message: `paging regression event ${i}`,
            severity: 'INFO',
            source: 'PagingRegressionTest',
            sequenceNumber: i,
            time: new Date(baseTime + i * 10).toISOString()
        }));

        // Seed the events directly via the YAMCS REST API rather than
        // waiting on ambient telemetry -- events are POST-able instantly.
        await postEvents(events, yamcsURL);

        // Track archive requests so we can prove multiple continuation-token
        // pages were actually fetched, not just that the total happened to
        // fit in a single response.
        const archiveRequests = [];
        page.on('request', (request) => {
            const url = request.url();
            if (url.includes('/api/archive/') && url.includes('/events')) {
                archiveRequests.push(url);
            }
        });

        const start = baseTime - 5000;
        const end = baseTime + (EVENT_COUNT * 10) + 5000;

        const results = await page.evaluate(async ({ requestStart, requestEnd }) => {
            const eventsObject = await window.openmct.objects.get({
                key: 'yamcs.events',
                namespace: 'taxonomy'
            });

            return window.openmct.telemetry.request(eventsObject, {
                start: requestStart,
                end: requestEnd
            });
        }, {
            requestStart: start,
            requestEnd: end
        });

        const ourEvents = results.filter((datum) => datum.type === runMarker);

        // The full result count is returned, not silently capped at 1000
        // (or the older 300) -- regression for #62.
        expect(ourEvents.length).toBe(EVENT_COUNT);

        // No duplicates or gaps at page boundaries, and results are
        // correctly ordered ascending by generation time.
        const seqNumbers = ourEvents.map((datum) => datum.seqNumber);
        expect(new Set(seqNumbers).size).toBe(EVENT_COUNT);
        expect(seqNumbers).toEqual([...seqNumbers].sort((a, b) => a - b));
        expect(Math.min(...seqNumbers)).toBe(0);
        expect(Math.max(...seqNumbers)).toBe(EVENT_COUNT - 1);

        // Prove paging actually happened (multiple requests, at least one
        // carrying a "next" continuation-token search param) -- if
        // getResponseKeyById mapped the events endpoint to the wrong
        // response-body key (#67), accumulateResults would find nothing to
        // accumulate on every page and the count assertions above would
        // already have failed; this additionally proves the code path that
        // exercises both fixes together was actually taken.
        const pagedRequests = archiveRequests.filter((url) => url.includes('next='));
        expect(pagedRequests.length).toBeGreaterThan(0);
    });
});
