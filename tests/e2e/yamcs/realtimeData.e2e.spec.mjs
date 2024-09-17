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

/**
 * IMPORTANT: CANNOT BE RUN IN PARALLEL, ENABLES & DISABLES LINKS
 */
import { expect, test } from '@playwright/test';
import { fileURLToPath } from 'url';
import { latestParameterValues, disableLink, enableLink, parameterArchive } from './quickstartTools.mjs';

import fs from 'fs';

const namesToParametersMap = JSON.parse(fs.readFileSync(new URL('./namesToParametersMap.json', import.meta.url)));
const realTimeDisplayPath = fileURLToPath(
    new URL('./test-data/e2e-real-time-test-layout.json', import.meta.url)
);

// Wait 1s from when telemetry is received before sampling values in the UI. This is 1s because by default
// Open MCT is configured to release batches of telemetry every 1s. So depending on when it is sampled it
// may take up to 1s for telemetry to propagate to the UI from when it is received.
const TELEMETRY_PROPAGATION_TIME = 1000;
const THIRTY_MINUTES = 30 * 60 * 1000;

test.describe('Realtime telemetry displays', () => {
    let yamcsURL;
    let websocketWorker;

    test.beforeEach(async ({ page }) => {
        page.on('worker', worker => {
            if (worker.url().startsWith('blob')) {
                websocketWorker = worker;
            }
        });

        // Go to baseURL
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await page.evaluate((thirtyMinutes) => {
            const openmct = window.openmct;

            openmct.install(openmct.plugins.RemoteClock({
                namespace: "taxonomy",
                key: "~myproject~Battery1_Temp"
            }));

            openmct.time.setClock('remote-clock');
            openmct.time.setClockOffsets({
                start: -thirtyMinutes,
                end: 0
            });
        }, THIRTY_MINUTES);
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();
        await enableLink(yamcsURL);

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

        // Upload memory-leak-detection.json
        await page.setInputFiles('#fileElem', realTimeDisplayPath);
        await page
            .getByRole('button', {
                name: 'Save'
            })
            .click();

        await expect(page.locator('a:has-text("e2e real-time test layout")')).toBeVisible();
    });
    test.afterEach(async ({ page }) => {
        await enableLink(yamcsURL);
    });

    test.describe('A complex display', () => {
        test.beforeEach(async ({ page }) => {
            const searchBox = page.getByRole('searchbox', { name: 'Search Input' });
            await searchBox.click();
            // Fill Search input
            await searchBox.fill("e2e real-time test layout");

            const searchResults = page.getByLabel('Search Results Dropdown');

            //Search Result Appears and is clicked
            const layoutSearchResult = searchResults.getByText("e2e real-time test layout", { exact: true });
            await layoutSearchResult.click();
        });

        test('renders correctly', async ({ page }) => {
            let count = await page.getByLabel('lad name').count();
            expect(count).toBe(Object.entries(namesToParametersMap).length);
        });

        test('Correctly shows the latest values', async ({ page }) => {
            // Wait a reasonable amount of time for new telemetry to come in.
            // There is nothing significant about the number chosen.
            const WAIT_FOR_MORE_TELEMETRY = 3000;

            const ladTable = await getLadTableByName(page, 'Test LAD Table');

            // Let it run for a few seconds
            await page.waitForTimeout(WAIT_FOR_MORE_TELEMETRY);

            // Disable playback
            await disableLink(yamcsURL);

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const latestValueObjects = await latestParameterValues(Object.values(namesToParametersMap), yamcsURL);
            const parameterNamesToLatestValues = toParameterNameToValueMap(latestValueObjects);
            const tableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const allAlphaNumericValuesByName = await getParameterValuesFromAllAlphaNumerics(page);
            const allGaugeValuesByName = await getParameterValuesFromAllGauges(page);
            const tableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, allAlphaNumericValuesByName);
            assertParameterMapsAreEqual(allGaugeValuesByName, parameterNamesToLatestValues, 2);

            // Enable playback
            await enableLink(yamcsURL);

            // Let it run for a few seconds to cycle through a few telemetry values
            await page.waitForTimeout(WAIT_FOR_MORE_TELEMETRY);

            // Disable playback
            await disableLink(yamcsURL);

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const secondLatestValueObjects = await latestParameterValues(Object.values(namesToParametersMap), yamcsURL);
            const secondParameterNamesToLatestValues = toParameterNameToValueMap(secondLatestValueObjects);
            const secondTableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const secondTableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);
            const secondAlphaNumericValuesByName = await getParameterValuesFromAllAlphaNumerics(page);
            const secondGaugeValuesByName = await getParameterValuesFromAllGauges(page);

            //First compare timestamps to make sure telemetry on screen is actually changing.
            Object.keys(namesToParametersMap).forEach(key => {
                expect(tableTimestampsByParameterName[key]).not.toBe(secondTableTimestampsByParameterName[key]);
            });

            // Next confirm that the values on screen are, again, the same as the latest values in Yamcs
            assertParameterMapsAreEqual(secondParameterNamesToLatestValues, secondTableValuesByParameterName);
            assertParameterMapsAreEqual(secondParameterNamesToLatestValues, secondAlphaNumericValuesByName);
            assertParameterMapsAreEqual(secondGaugeValuesByName, parameterNamesToLatestValues, 2);
        });

        test('Correctly reconnects and shows the latest values after websocket drop', async ({ page }) => {
            // Wait a reasonable amount of time for new telemetry to come in.
            // There is nothing significant about the number chosen.
            const WAIT_FOR_MORE_TELEMETRY = 3000;

            const ladTable = await getLadTableByName(page, 'Test LAD Table');

            // Let it run for a few seconds
            await page.waitForTimeout(WAIT_FOR_MORE_TELEMETRY);

            // Disable playback
            await disableLink(yamcsURL);

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const latestValueObjects = await latestParameterValues(Object.values(namesToParametersMap), yamcsURL);
            const parameterNamesToLatestValues = toParameterNameToValueMap(latestValueObjects);
            const tableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const allAlphaNumericValuesByName = await getParameterValuesFromAllAlphaNumerics(page);
            const allGaugeValuesByName = await getParameterValuesFromAllGauges(page);
            const tableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, allAlphaNumericValuesByName);
            assertParameterMapsAreEqual(allGaugeValuesByName, parameterNamesToLatestValues, 2);

            // Enable playback
            await enableLink(yamcsURL);

            // Drop the websocket
            websocketWorker.evaluate(() => {
                self.currentWebSocket.close();
            });

            //Wait for websocket to be re-established
            await page.waitForEvent('websocket');

            // Let it run for a few seconds to cycle through a few telemetry values
            await page.waitForTimeout(WAIT_FOR_MORE_TELEMETRY);

            // Disable playback
            await disableLink(yamcsURL);

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const secondLatestValueObjects = await latestParameterValues(Object.values(namesToParametersMap), yamcsURL);
            const secondParameterNamesToLatestValues = toParameterNameToValueMap(secondLatestValueObjects);
            const secondTableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const secondTableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);
            const secondAlphaNumericValuesByName = await getParameterValuesFromAllAlphaNumerics(page);
            const secondGaugeValuesByName = await getParameterValuesFromAllGauges(page);

            //First compare timestamps to make sure telemetry on screen is actually changing.
            Object.keys(namesToParametersMap).forEach(key => {
                expect(tableTimestampsByParameterName[key]).not.toBe(secondTableTimestampsByParameterName[key]);
            });

            // Next confirm that the values on screen are, again, the same as the latest values in Yamcs
            assertParameterMapsAreEqual(secondParameterNamesToLatestValues, secondTableValuesByParameterName);
            assertParameterMapsAreEqual(secondParameterNamesToLatestValues, secondAlphaNumericValuesByName);
            assertParameterMapsAreEqual(secondGaugeValuesByName, parameterNamesToLatestValues, 2);
        });

        test('Open MCT does not drop telemetry while app is loading', async ({ page }) => {
            const notification = page.getByRole('alert');
            const count = await notification.count();

            if (count > 0) {
                const text = await notification.innerText();
                expect(text).not.toBe('Telemetry dropped due to client rate limiting.');
            } else {
                expect(notification).toHaveCount(0);
            }
        });

        test('Open MCT does drop telemetry when the UI is under load', async ({ page }) => {
            // 1. Make sure the display is done loading, and populated with values (ie. we are in a steady state)
            const ladTable = await getLadTableByName(page, 'Test LAD Table');
            await getParameterValuesFromLadTable(ladTable);

            // 2. Block the UI with a loop
            await page.evaluate(() => {
                return new Promise((resolveBlockingLoop) => {
                    //5s x 10Hz data = 50 telemetry values which should easily overrun the buffer length of 20.
                    let start = Date.now();
                    let now = Date.now();
                    // Block the UI thread for 5s
                    while (now - start < 5000) {
                        now = Date.now();
                    }

                    resolveBlockingLoop();
                });
            });
            // Check for telemetry dropped notification
            const notification = page.getByRole('alert');
            expect(notification).toHaveCount(1);
            const text = await notification.innerText();
            expect(text).toBe('Telemetry dropped due to client rate limiting.');
        });

        test('Open MCT shows the latest telemetry after UI is temporarily blocked', async ({ page }) => {
            const ladTable = await getLadTableByName(page, 'Test LAD Table');
            // 1. Subscribe to batched telemetry,
            // 3. Confirm that it is correct and only the _oldest_ values missing
            await page.evaluate(() => {
                return new Promise((resolveBlockingLoop) => {
                    let start = Date.now();
                    let now = Date.now();
                    // Block the UI thread for 5s
                    while (now - start < 5000) {
                        now = Date.now();
                    }

                    resolveBlockingLoop();
                });
            });

            // Disable playback
            await disableLink(yamcsURL);

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const latestValueObjects = await latestParameterValues(Object.values(namesToParametersMap), yamcsURL);
            const parameterNamesToLatestValues = toParameterNameToValueMap(latestValueObjects);
            const tableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName);
        });
    });

    test('Open MCT accurately batches telemetry when requested', async ({ page }) => {

        // 1. Subscribe to batched telemetry,
        const telemetryValues = await page.evaluate(async () => {
            const openmct = window.openmct;
            const telemetryObject = await openmct.objects.get({
                namespace: 'taxonomy',
                key: '~myproject~Battery1_Temp'
            });

            return new Promise((resolveWithTelemetry) => {
                // First callback is the latest value for the parameter.
                let haveReceivedLatest = false;
                openmct.telemetry.subscribe(telemetryObject, (telemetry) => {
                    if (haveReceivedLatest === false) {
                        haveReceivedLatest = true;
                    } else {
                        resolveWithTelemetry(telemetry);
                    }
                }, {strategy: 'batch'});
            });
        });
        await disableLink(yamcsURL);
        sortOpenMctTelemetryAscending(telemetryValues);

        // 2. confirm that it is received as an array.
        expect(telemetryValues.length).toBeGreaterThan(1);
        const start = new Date(new Date(telemetryValues[0].timestamp).getTime() - 1).toISOString();
        const end = new Date(telemetryValues[telemetryValues.length - 1].timestamp).toISOString();
        const parameterArchiveTelemetry = await parameterArchive({
            start,
            end,
            parameterId: `/myproject/Battery1_Temp`,
            yamcsURL
        });
        const formattedParameterArchiveTelemetry = toOpenMctTelemetryFormat(parameterArchiveTelemetry);
        sortOpenMctTelemetryAscending(formattedParameterArchiveTelemetry);

        telemetryValues.forEach((telemetry, index) => {
            expect(telemetry.value).toBe(formattedParameterArchiveTelemetry[index].value);
            expect(telemetry.timestamp).toBe(formattedParameterArchiveTelemetry[index].timestamp);
        });
    });

    function sortOpenMctTelemetryAscending(telemetry) {
        return telemetry.sort((a, b) => {
            if (a.timestamp < b.timestamp) {
                return -1;
            } else if (a.timestamp > b.timestamp) {
                return 1;
            } else if (a.timestamp === b.timestamp) {
                return 0;
            } else {
                return undefined;
            }
        });
    }

    function assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName, toPrecision) {
        Object.keys(parameterNamesToLatestValues).forEach((parameterName) => {
            const valueInYamcs = parameterNamesToLatestValues[parameterName];
            const valueOnScreen = tableValuesByParameterName[parameterName];
            if (toPrecision !== undefined && !isNaN(valueInYamcs) && !isNaN(valueOnScreen)) {
                const numericalValueInYamcs = parseFloat(valueInYamcs).toFixed(toPrecision);
                const numericalValueOnScreen = parseFloat(valueInYamcs).toFixed(toPrecision);

                expect(numericalValueOnScreen).toBe(numericalValueInYamcs);
            } else {
                expect(valueOnScreen).toBe(valueInYamcs);
            }
        });
    }

    function toParameterNameToValueMap(latestParameterValueObjects) {
        return latestParameterValueObjects.reduce((mapping, parameterValue) => {
            mapping[parameterValue.id.name.substring(parameterValue.id.name.lastIndexOf('/') + 1)] =
            String(parameterValue.engValue.floatValue
              ?? parameterValue.engValue.stringValue
              ?? parameterValue.engValue.uint32Value
              ?? parameterValue.engValue.booleanValue);

            return mapping;
        }, {});
    }

    function toOpenMctTelemetryFormat(listOfParameterValueObjects) {
        return listOfParameterValueObjects.map((parameterValue) => {
            return {
                timestamp: parameterValue.generationTime,
                value: parameterValue.engValue.floatValue
                ?? parameterValue.engValue.stringValue
                ?? parameterValue.engValue.uint32Value
                ?? parameterValue.engValue.booleanValue
            };
        });
    }

    async function getLadTableByName(page, ladTableName) {
        const matchingLadTableFrames = await page.getByLabel("sub object frame").filter({
            has: page.getByLabel("object name", {
                name: ladTableName
            })
        });

        return matchingLadTableFrames.getByLabel('lad table').first();

    }

    /**
     * @param {import('playwright').Page} page 
     * @returns {Promise<{parameterNameText: string, parameterValueText: string}[]>}
     */
    async function getParameterValuesFromAllGauges(page) {
        const allGauges = await (page.getByLabel('sub object frame', { exact: true}).filter({
            has: page.getByLabel('Gauge', {
                exact: true
            })
        })).all();
        const arrayOfValues = await Promise.all(allGauges.map(async (gauge) => {
            const parameterNameText = await (gauge.getByLabel("object name")).innerText();
            const parameterValueText = await (gauge.getByLabel(/gauge value.*/)).innerText();

            return {
                parameterNameText,
                parameterValueText
            };
        }));

        return arrayOfValues.reduce((map, row) => {
            map[row.parameterNameText] = row.parameterValueText;

            return map;
        }, {});
    }

    async function getParameterValuesFromLadTable(ladTable) {
        const allRows = await (await ladTable.getByLabel('lad row')).all();
        const arrayOfValues = await Promise.all(allRows.map(async (row) => {
            const parameterNameText = await row.getByLabel('lad name').innerText();
            const parameterValueText = await row.getByLabel('lad value').innerText();

            return {
                parameterNameText,
                parameterValueText
            };
        }));

        return arrayOfValues.reduce((map, row) => {
            map[row.parameterNameText] = row.parameterValueText;

            return map;
        }, {});
    }

    async function getParameterValuesFromAllAlphaNumerics(page) {
        const allAlphaNumerics = await (page.getByLabel('Alpha-numeric telemetry', {exact: true})).all();
        const arrayOfValues = await Promise.all(allAlphaNumerics.map(async (alphaNumeric) => {
            const parameterNameText = await (alphaNumeric.getByLabel(/Alpha-numeric telemetry name.*/)).innerText();
            const parameterValueText = await (alphaNumeric.getByLabel(/Alpha-numeric telemetry value.*/)).innerText();

            return {
                parameterNameText,
                parameterValueText
            };
        }));

        return arrayOfValues.reduce((map, row) => {
            map[row.parameterNameText] = row.parameterValueText;

            return map;
        }, {});
    }

    async function getParameterTimestampsFromLadTable(ladTable) {
        const allRows = await (await ladTable.getByLabel('lad row')).all();
        const arrayOfValues = await Promise.all(allRows.map(async (row) => {
            const parameterNameText = await row.getByLabel('lad name').innerText();
            const parameterValueText = await row.getByLabel('lad timestamp').innerText();

            return {
                parameterNameText,
                parameterValueText
            };
        }));

        return arrayOfValues.reduce((map, row) => {
            map[row.parameterNameText] = row.parameterValueText;

            return map;
        }, {});
    }
});
