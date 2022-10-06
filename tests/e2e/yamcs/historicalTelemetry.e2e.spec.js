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
Search Specific Tests
*/

const { test, expect } = require('../opensource/pluginFixtures');

test.describe("Quickstart historical request tests @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        return page.addInitScript(() => {
            window.__nativeFetch = window.fetch;

            window.__openmct_fetches = [];

            window.fetch = (...args) => {
                window.__openmct_fetches.push(args);

                return window.__nativeFetch.apply(window, args);
            };
        });
    });

    test.afterEach(({ page }, testInfo) => {
        return page.evaluate(() => {
            window.fetch = window.__nativeFetch;
            delete window.__nativeFetch;
            delete window.__openmct_fetches;
        });
    });

    test('Historical telemetry requests are sent with low priority', async ({ page }) => {
        await page.goto('/#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~Height', { waitUntil: 'networkidle' });

        const fetchWithLowPriority = await page.evaluate(() => {
            return window.__openmct_fetches.some((args) => {
                const url = args[0];
                const options = args[1];

                return url.includes('api/archive/myproject/parameters/myproject/Height') 
                    && options.priority === 'low';
            });
        });

        expect(fetchWithLowPriority).toBe(true);
    });

    test('Limit requests are sent with low priority', async ({ page }) => {
        await page.goto('/#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~Height', { waitUntil: 'networkidle' });

        const fetchWithLowPriority = await page.evaluate(() => {
            return window.__openmct_fetches.some((args) => {
                const url = args[0];
                const options = args[1];

                return url.includes('api/archive/myproject/parameters/myproject/Height')
                    && url.includes('limit=1')
                    && options.priority === 'low';
            });
        });

        expect(fetchWithLowPriority).toBe(true);
    });

    test('Fault requests are sent with low priority', async ({ page }) => {
        await page.goto('/#/browse/faults.taxonomy:faultManagement.view', { waitUntil: 'networkidle' });

        const fetchWithLowPriority = await page.evaluate(() => {
            return window.__openmct_fetches.some((args) => {
                const url = args[0];
                const options = args[1];

                return url.includes('api/processors/myproject/realtime/alarms')
                    && options.priority === 'low';
            });
        });

        expect(fetchWithLowPriority).toBe(true);
    });
});
