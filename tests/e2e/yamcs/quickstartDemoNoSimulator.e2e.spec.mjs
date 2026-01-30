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

        // Give the UI a beat to process any async telemetry updates that could throw.
        await page.waitForTimeout(1000);

        expect(pageErrors, `Uncaught page errors:\n${pageErrors.join('\n')}`).toEqual([]);
        expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toEqual([]);
    });
});

