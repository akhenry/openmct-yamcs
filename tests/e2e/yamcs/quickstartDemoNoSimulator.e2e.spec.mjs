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

import { baseFixtures } from 'openmct-e2e';
const { test, expect } = baseFixtures;

/**
 * Regression test for the "quickstart demo loads without the python simulator" case.
 *
 * Instead of requiring the external quickstart simulator to be stopped, we stub the
 * Yamcs latest-telemetry batch endpoint to return an empty list. This makes the
 * latest telemetry provider return `undefined` for many requests, matching the
 * failure mode that previously broke demo display setup.
 */
test.describe('Quickstart demo layout without simulator @yamcs', () => {
    // Ensure the example layout bootstrap runs by NOT setting `exampleLayout` in localStorage.
    test.use({
        storageState: {
            cookies: [],
            origins: [
                {
                    origin: 'http://localhost:9000',
                    localStorage: []
                }
            ]
        }
    });

    test('Demo layout loads without uncaught errors when latest telemetry is empty', async ({ page }) => {
        const pageErrors = [];
        const consoleErrors = [];

        page.on('pageerror', (err) => pageErrors.push(String(err)));
        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });

        function isLatestBatchGet(request) {
            return request.url().includes('/parameters:batchGet');
        }

        // Track "network idle", but ONLY for the latest-telemetry batch endpoint.
        // This avoids the flakiness of Playwright's global `networkidle` on SPAs.
        let latestBatchGetInFlight = 0;
        let latestBatchGetTotal = 0;
        let latestBatchGetLastFinishedAt = Date.now();

        page.on('request', (request) => {
            if (!isLatestBatchGet(request)) {
                return;
            }

            latestBatchGetTotal += 1;
            latestBatchGetInFlight += 1;
        });

        function onLatestBatchGetDone(request) {
            if (!isLatestBatchGet(request)) {
                return;
            }

            // Be defensive; we don't want a transient tracking mismatch to break the test.
            latestBatchGetInFlight = Math.max(0, latestBatchGetInFlight - 1);
            latestBatchGetLastFinishedAt = Date.now();
        }

        page.on('requestfinished', onLatestBatchGetDone);
        page.on('requestfailed', onLatestBatchGetDone);

        // We'll use this to deterministically wait until Open MCT actually attempted
        // to fetch "latest telemetry" at least once (the call we stub below).
        const firstLatestBatchGet = page.waitForResponse('**/api/processors/*/*/parameters:batchGet');

        // Simulate "no simulator" by returning no latest parameter values.
        await page.route('**/api/processors/*/*/parameters:batchGet', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ value: [] })
            });
        });

        // Avoid `networkidle` for SPAs (Open MCT can keep background requests active).
        // Instead, wait for deterministic app readiness signals.
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page).toHaveURL(/#\/browse/);

        // The demo bootstrap imports and navigates to the example flexible layout.
        await expect(page.getByRole('main').getByText('Example Flexible Layout')).toBeVisible();

        // Deterministic "settled" signals:
        // - demo bootstrap finished (it sets this flag after navigating)
        // - at least one latest-telemetry request completed (stubbed above)
        await page.waitForFunction(() => localStorage.getItem('exampleLayout') === 'true');
        await firstLatestBatchGet;

        // Wait until latest-telemetry batch requests go quiet for a bit.
        // This gives the UI time to process any async updates that could throw,
        // without relying on fixed sleeps.
        const QUIET_WINDOW_MS = 750;
        const MAX_WAIT_MS = 15_000;
        const start = Date.now();
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const now = Date.now();
            const quietForMs = now - latestBatchGetLastFinishedAt;

            if (latestBatchGetTotal > 0 && latestBatchGetInFlight === 0 && quietForMs >= QUIET_WINDOW_MS) {
                break;
            }

            if (now - start > MAX_WAIT_MS) {
                throw new Error(
                    `Timed out waiting for parameters:batchGet to go quiet. `
                    + `total=${latestBatchGetTotal} inFlight=${latestBatchGetInFlight} quietForMs=${quietForMs}`
                );
            }

            await page.waitForTimeout(50);
        }

        expect(pageErrors, `Uncaught page errors:\n${pageErrors.join('\n')}`).toEqual([]);
        expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toEqual([]);
    });
});

