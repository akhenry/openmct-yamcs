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

import { expect, test } from '@playwright/test';
import { fileURLToPath } from 'url';
import { setRealTimeMode } from '../opensource/appActions.js';

const telemetryEvictionFilePath = fileURLToPath(
    new URL('../test-data/telemetry-eviction-test-objects.json', import.meta.url)
);

test.describe('Telemetry Eviction', () => {
    test.beforeEach(async ({ page }) => {
        page.on('console', (msg) => {
            console.log(msg);
        });
        // Go to baseURL
        await page.goto('./', { waitUntil: 'domcontentloaded' });

        await page
            .getByRole('treeitem', {
                name: /My Items/
            })
            .click({
                button: 'right'
            });

        await page
            .getByRole('menuitem', {
                name: /Import from JSON/
            })
            .click();

        // Upload JSON file
        await page.setInputFiles('#fileElem', telemetryEvictionFilePath);

        await page
            .getByRole('button', {
                name: 'Save'
            })
            .click();

        await expect(page.locator('a:has-text("Telemetry Eviction Test")')).toBeVisible();

        // put in real time mode so telemetry will eventually go out of range and be garbage collected
        await setRealTimeMode(page);

        // set the time range to 5 seconds
        await page.getByLabel('Global Time Conductor').click();
        await page.getByLabel('Start offset minutes').click();
        await page.getByLabel('Start offset minutes').fill('0');
        await page.getByLabel('Start offset seconds').click();
        await page.getByLabel('Start offset seconds').fill('5');
        await page.getByLabel('Submit time offsets').click();
    });

    test('Complex Display', async ({ page }) => {
        const result = await navigateToObjectAndDetectTelemetryEviction(page, 'Complex Display Layout');

        // If we got here without timing out, then the root view object was garbage collected and no memory leak was detected.
        expect(result).toBe(true);
    });

    async function setupRequestTelemetryEviction(page) {
        await page.evaluate(() => {
            const oldTelemetryRequest = window.openmct.telemetry.request.bind(window.openmct.telemetry);
            async function newTelemetryRequest(domainObject) {
                const returnedTelemetry = await oldTelemetryRequest(domainObject);
                // only register items for garbage collection if we have some telemetry
                if (returnedTelemetry?.[0]) {
                    if (!window.garbageCollectionPromises) {
                        window.garbageCollectionPromises = [];
                    }

                    if (!window.finalizationRegistries) {
                        window.finalizationRegistries = [];
                    }

                    window.garbageCollectionPromises.push(new Promise((resolve) => {
                        // eslint-disable-next-line no-undef
                        const newFinalizationRegistry = new FinalizationRegistry(resolve);
                        newFinalizationRegistry.register(
                            returnedTelemetry[0],
                            'firstReturnedTelemetry',
                            returnedTelemetry[0]
                        );

                        window.finalizationRegistries.push(newFinalizationRegistry);
                    }));
                    window.garbageCollectionPromises.push(new Promise((resolve) => {
                        // eslint-disable-next-line no-undef
                        const newFinalizationRegistry = new FinalizationRegistry(resolve);
                        newFinalizationRegistry.register(
                            returnedTelemetry[returnedTelemetry.length - 1],
                            'lastReturnedTelemetry',
                            returnedTelemetry[returnedTelemetry.length - 1]
                        );

                        window.finalizationRegistries.push(newFinalizationRegistry);
                    }));
                }

                return returnedTelemetry;
            }

            window.openmct.telemetry.request = newTelemetryRequest;
        });
    }

    async function setupSubscribeTelemetryEviction(page) {
        await page.evaluate(() => {
            const oldTelemetrySubscribe = window.openmct.telemetry.subscribe.bind(window.openmct.telemetry);
            function newTelemetrySubscribe(domainObject, oldCallback, options) {
                function newCallback(data) {
                    if (!window.garbageCollectionPromises) {
                        window.garbageCollectionPromises = [];
                    }

                    if (!window.finalizationRegistries) {
                        window.finalizationRegistries = [];
                    }

                    const newGarbageCollectionPromise = new Promise((resolve) => {
                        // eslint-disable-next-line no-undef
                        const newFinalizationRegistry = new FinalizationRegistry(resolve);
                        newFinalizationRegistry.register(
                            data,
                            'theReturnedTelemetry',
                            data
                        );
                        window.finalizationRegistries.push(newFinalizationRegistry);
                    });
                    window.garbageCollectionPromises.push(newGarbageCollectionPromise);
                    oldCallback(data);
                }

                const unsubscribeCallback = oldTelemetrySubscribe(domainObject, newCallback, options);

                return unsubscribeCallback;
            }

            window.openmct.telemetry.subscribe = newTelemetrySubscribe;
        });
    }

    /**
     *
     * @param {import('@playwright/test').Page} page
     * @param {*} objectName
     * @returns
     */
    async function navigateToObjectAndDetectTelemetryEviction(page, objectName) {
        await page.getByRole('searchbox', { name: 'Search Input' }).click();
        // Fill Search input
        await page.getByRole('searchbox', { name: 'Search Input' }).fill(objectName);

        await setupRequestTelemetryEviction(page);

        await setupSubscribeTelemetryEviction(page);

        //Search Result Appears and is clicked
        await page.getByText(objectName, { exact: true }).click();

        // Wait a few seconds for some telemetry to accumulate
        await page.waitForTimeout(7000);

        // This next code block blocks until the finalization listener is called and the gcPromise resolved.
        // This means that the root node for the view has been garbage collected.
        // In the event that the root node is not garbage collected, the gcPromise will never resolve and the test will time out.
        await (page.evaluate(async () => {
            const garbageCollectionPromisesToWait = window.garbageCollectionPromises;
            console.debug(`⏲️  Waiting for ${garbageCollectionPromisesToWait?.length} garbage collection promises to resolve`);
            window.garbageCollectionPromises = null;

            // Manually invoke the garbage collector once all references are removed.
            window.gc();

            await Promise.all(garbageCollectionPromisesToWait);
            console.debug('🎉 All garbage collection promises resolved');
        }));

        // Clean up the finalization registry since we don't need it any more.
        await page.evaluate(() => {
            window.finalizationRegistries = null;
        });

        // If we get here without timing out, it means the garbage collection promise resolved and the test passed.
        return true;
    }
});
