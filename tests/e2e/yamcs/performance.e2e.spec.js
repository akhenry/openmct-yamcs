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
const localstorageJson = require(`./performance-localstorage.json`);

test.describe.only("Performance regressions @yamcs", () => {
    test.beforeEach(async ({page}) => {
        await page.addInitScript(value => {
            window.localStorage.setItem('mct', value);
        }, localstorageJson.value);
    });

    const TARGET_FPS = 60;
    const FPS_TOLERANCE = 0.05;

    test(`Complex display maintains ${TARGET_FPS}fps +-${FPS_TOLERANCE * 100}%`, async ({ page }) => {
        // Go to baseURL
        await page.goto("./#/browse/mine/20f7e135-4637-444e-955a-0e4e3399268a", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // TODO: Detect the debounced network request going out.
        await new Promise(resolve => setTimeout(resolve, 500));

        //Now in plot steady-state
        await page.waitForLoadState('networkidle');

        // Measure FPS every 2s
        // Do this 5 times and average
        const fps = await page.evaluate(async () => {
            const measurements = [];
            for (let i = 0; i < 5; i++) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        measurements.push(window.openmct.performance.fps);
                        resolve();
                    }, 2000);
                });
            }

            const averageFPS = measurements.reduce((a, b) => a + b, 0) / measurements.length;

            return averageFPS;
        });

        expect(fps).toBeGreaterThanOrEqual((1 - FPS_TOLERANCE) * TARGET_FPS);

    });

    test('Complex display in steady state has no long tasks', async ({ page }) => {
        // Go to baseURL
        await page.goto("./#/browse/mine/20f7e135-4637-444e-955a-0e4e3399268a", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // TODO: Detect the debounced network request going out.
        await new Promise(resolve => setTimeout(resolve, 500));

        //Now in plot steady-state
        await page.waitForLoadState('networkidle');

        await page.evaluate(() => {
            window.testPerfEntries = [];

            window.testPerfObs = new PerformanceObserver((list) => {
                window.testPerfEntries = window.testPerfEntries.concat(list.getEntries());
            });

            window.testPerfObs.observe({
                type: "longtask",
                // don't care about entries collected before we reached steady state in this test.
                buffered: false
            });
        });

        // Run for 10 seconds
        await new Promise((resolve) => {
            setTimeout(resolve, 10000);
        });

        const entries = JSON.parse(await page.evaluate(() => {
            const captured = JSON.stringify(window.testPerfEntries.map((entry) => entry));

            window.testPerfObs.disconnect();

            return captured;
        }));

        expect(entries.length).toBe(0);

    });

    test('Complex display in steady state has no layout shifts', async ({ page }) => {
        // Go to baseURL
        await page.goto("./#/browse/mine/20f7e135-4637-444e-955a-0e4e3399268a", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');

        // wait for debounced requests in YAMCS Latest Telemetry Provider to finish
        // TODO: Detect the debounced network request going out.
        await new Promise(resolve => setTimeout(resolve, 500));

        //Now in plot steady-state
        await page.waitForLoadState('networkidle');

        await page.evaluate(() => {
            window.testPerfEntries = [];

            window.testPerfObs = new PerformanceObserver((list) => {
                window.testPerfEntries = window.testPerfEntries.concat(list.getEntries());
            });

            window.testPerfObs.observe({
                type: "layout-shift",
                // don't care about entries collected before we reached steady state in this test.
                buffered: false
            });
        });

        // Run for 10 seconds
        await new Promise((resolve) => {
            setTimeout(resolve, 10000);
        });

        const entries = JSON.parse(await page.evaluate(() => {
            const captured = JSON.stringify(window.testPerfEntries.map((entry) => entry));

            window.testPerfObs.disconnect();

            return captured;
        }));

        expect(entries.length).toBe(0);

    });

    // Only works in headless. I don't know why yet.
    test('Plots do not leak memory on navigation', async ({ page }) => {
        // Navigate to folder
        await page.goto("./#/browse/mine", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');
        // Garbage collect
        // await page.evaluate(() => {
        //     return new Promise((resolve) => {
        //         let gcDetector = {};

        //         window.fr = new FinalizationRegistry(resolve);
        //         window.fr.register(gcDetector, 'gc', gcDetector);

        //         gcDetector = null;
        //     });
        // });
        // Measure memory usage before
        // const memoryUsageBefore = await page.evaluate(() => {
        //     window.fr = null;

        //     return window.performance.memory.usedJSHeapSize;
        // });

        // Plot view of telemetry
        await page.goto("/#/browse/mine/fdfb509f-a693-479e-ad28-681bd528a14c/taxonomy:~myproject~Battery1_Voltage", { waitUntil: "networkidle" });

        //Empty display layout
        //await page.goto("#/browse/mine/788009b0-15e0-4bfc-8d57-d9a6821c7c7d", { waitUntil: "networkidle" });

        //Simple display layout
        //await page.goto("#/browse/mine/e323772c-6328-48f5-8448-48b3c09cd61e", { waitUntil: "networkidle" });

        //LAD Table
        //await page.goto("#/browse/mine/20f7e135-4637-444e-955a-0e4e3399268a/b517d955-a4c2-42ff-b572-eae487873685", { waitUntil: "networkidle" });

        //Display Layout with a LAD table
        //await page.goto("#/browse/mine/a76b568f-a987-418d-a6dd-47dca66c06dc", { waitUntil: "networkidle" });

        //await page.goto(".#/browse/mine/55c08608-0250-4de6-ba42-2a4b0381caa4", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');
        await page.evaluate(() => {
            window.gcPromise = new Promise((resolve) => {
                window.fr = new FinalizationRegistry(resolve);
                window.fr.register(window.openmct.layout.$refs.browseObject.$refs.objectViewWrapper.firstChild.__vue__, 'navigatedObject', window.openmct.layout.$refs.browseObject.$refs.objectViewWrapper.firstChild.__vue__); 
            });
        });

        //await page.goto("./#/browse/mine/55c08608-0250-4de6-ba42-2a4b0381caa4", { waitUntil: "networkidle" });
        //await page.waitForLoadState('networkidle');
        // Nav to folder
        await page.goto("./#/browse/mine", { waitUntil: "networkidle" });
        await page.waitForLoadState('networkidle');
        // Garbage collect
        // await page.evaluate(() => {
        //     return new Promise((resolve) => {
        //         let gcDetector = {};

        //         window.fr = new FinalizationRegistry(resolve);
        //         window.fr.register(gcDetector, 'gc', gcDetector);

        //         gcDetector = null;
        //     });
        // });
        // Measure memory usage after
        // const memoryUsageAfter = await page.evaluate(() => {
        //     window.fr = null;

        //     return window.performance.memory.usedJSHeapSize;
        // });
        await page.evaluate(() => {
            const gcPromise = window.gcPromise;
            window.gcPromise = null;
            window.gc();

            return gcPromise;
        });
        await page.evaluate(() => {
            window.fr = null;
        });

        expect(true);
        // Compare
        //expect(memoryUsageAfter).not.toBeGreaterThan(memoryUsageBefore);
    });
});
