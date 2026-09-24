/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2024, United States Government
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
 * Tests that rapidly navigating away from a view with a large, in-flight
 * historical request does not leave the application in a broken state.
 *
 * When a user navigates away from a view before its historical telemetry
 * request has resolved, Open MCT aborts the underlying fetch(es) via an
 * AbortSignal. Both the continuation-token paging in `accumulateResults`
 * and the streaming generator in `yieldResults`/`getHistoryYieldRequest`
 * (src/utils.js) check that signal with the `aborted()` helper, and
 * `historical-telemetry-provider.js`'s `request()` threads it through to
 * every request it issues. `realtime-provider.js` also has to defensively
 * guard against subscriptions that were torn down mid-flight due to rapid
 * navigation during tests (see the "possibly cancelled" comments around
 * `resolveSubscription`/message-handling in that file).
 *
 * This spec forces those abort code paths to actually run (rather than
 * relying on a real, racy fetch) by delaying the historical archive
 * endpoint via page.route, then navigating away before the delayed
 * response can arrive. It asserts that no console errors occur and
 * that the application is still usable afterwards.
 */

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { setFixedTimeMode } = appActions;

// Artificial delay (ms) added to historical archive requests so that
// navigating away reliably happens while the request is still in-flight.
const ARCHIVE_RESPONSE_DELAY = 3000;
// Number of rapid navigate-away cycles to perform.
const ABORT_CYCLES = 4;

const LARGE_RANGE_PARAMETER_URL =
    './#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~CCSDS_Packet_Length' +
    `?tc.mode=fixed&tc.timeSystem=utc&tc.startBound=0&tc.endBound=${Date.now()}`;
const ROOT_URL = './#/browse/taxonomy:spacecraft';
const NORMAL_PARAMETER_URL =
    './#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~CCSDS_Packet_Length' +
    '?tc.mode=local&tc.startDelta=1800000&tc.endDelta=30000&tc.timeSystem=utc';

test.describe("Aborting in-flight historical requests via rapid navigation @yamcs", () => {
    // Any uncaught console error (including from an unhandled rejection in an
    // aborted-but-mishandled request) will fail the test.
    test.use({ failOnConsoleError: true });

    test.beforeEach(async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();
        await setFixedTimeMode(page);
    });

    test('Rapidly navigating away from a view with a large in-flight historical request does not error and leaves the app usable', async ({ page }) => {
        // Delay every historical archive request so that navigating away happens
        // while it is still in-flight, making the abort path reliably reproducible.
        await page.route('**/api/archive/**', async (route) => {
            await new Promise((resolve) => setTimeout(resolve, ARCHIVE_RESPONSE_DELAY));
            await route.continue();
        });

        for (let i = 0; i < ABORT_CYCLES; i++) {
            // Navigate to a view with a large historical time range. This kicks off
            // a historical request that will not resolve for ARCHIVE_RESPONSE_DELAY ms.
            await page.goto(LARGE_RANGE_PARAMETER_URL, { waitUntil: 'domcontentloaded' });

            // Immediately navigate away, well before the delayed response arrives,
            // which should cause Open MCT to abort the in-flight request.
            await page.goto(ROOT_URL, { waitUntil: 'domcontentloaded' });
        }

        // Remove the artificial delay so subsequent requests resolve promptly.
        await page.unroute('**/api/archive/**');

        // The app should still be responsive: navigating to a normal view with a
        // modest time range should still load and display telemetry data.
        await page.goto(NORMAL_PARAMETER_URL, { waitUntil: 'domcontentloaded' });

        await expect(page.getByLabel('Browse bar object name')).toHaveText('CCSDS_Packet_Length');

        // Confirm telemetry data actually renders (e.g. a plot canvas or a
        // populated value), proving the historical/realtime providers are still
        // functioning correctly after the aborted requests.
        await expect(page.locator('canvas').first()).toBeVisible();
    });
});
