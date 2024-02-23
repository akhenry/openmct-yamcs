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
import { latestParameterValues, disableLink, enableLink, parameterArchive } from './quickstartTools.js';

const realTimeDisplayPath = fileURLToPath(
    new URL('./test-data/e2e-real-time-test-layout.json', import.meta.url)
);

const namesToParametersMap = {
    "A": "/myproject/A",
    "ADCS_Error_Flag":	"/myproject/ADCS_Error_Flag",
    "Battery1_Temp":	"/myproject/Battery1_Temp",
    "Battery1_Voltage":	"/myproject/Battery1_Voltage",
    "Battery2_Temp":	"/myproject/Battery2_Temp",
    "Battery2_Voltage":	"/myproject/Battery2_Voltage",
    "CCSDS_Packet_Length":	"/myproject/CCSDS_Packet_Length",
    "CDHS_Error_Flag":	"/myproject/CDHS_Error_Flag",
    "CDHS_Status":	"/myproject/CDHS_Status",
    "COMMS_Error_Flag":	"/myproject/COMMS_Error_Flag",
    "COMMS_Status":	"/myproject/COMMS_Status",
    "Contact_Golbasi_GS":	"/myproject/Contact_Golbasi_GS",
    "Contact_Svalbard":	"/myproject/Contact_Svalbard",
    "Detector_Temp":	"/myproject/Detector_Temp",
    "ElapsedSeconds":	"/myproject/ElapsedSeconds",
    "Enum_Para_1":	"/myproject/Enum_Para_1",
    "Enum_Para_2":	"/myproject/Enum_Para_2",
    "Enum_Para_3":	"/myproject/Enum_Para_3",
    "EpochUSNO":	"/myproject/EpochUSNO",
    "EPS_Error_Flag":	"/myproject/EPS_Error_Flag",
    "Gyro.x":	"/myproject/Gyro.x",
    "Gyro.y":	"/myproject/Gyro.y",
    "Gyro.z":	"/myproject/Gyro.z",
    "Height":	"/myproject/Height",
    "Latitude":	"/myproject/Latitude",
    "Longitude":	"/myproject/Longitude",
    "Magnetometer.x":	"/myproject/Magnetometer.x",
    "Magnetometer.y":	"/myproject/Magnetometer.y",
    "Magnetometer.z":	"/myproject/Magnetometer.z",
    "Mode_Day":	"/myproject/Mode_Day",
    "Mode_Night":	"/myproject/Mode_Night",
    "Mode_Payload":	"/myproject/Mode_Payload",
    "Mode_Safe":	"/myproject/Mode_Safe",
    "Mode_SBand":	"/myproject/Mode_SBand",
    "Mode_XBand":	"/myproject/Mode_XBand",
    "OrbitNumberCumulative":	"/myproject/OrbitNumberCumulative",
    "Payload_Error_Flag":	"/myproject/Payload_Error_Flag",
    "Payload_Status":	"/myproject/Payload_Status",
    "Position.x":	"/myproject/Position.x",
    "Position.y":	"/myproject/Position.y",
    "Position.z":	"/myproject/Position.z",
    "Shadow":	"/myproject/Shadow",
    "Sunsensor":	"/myproject/Sunsensor",
    "Velocity.x":	"/myproject/Velocity.x",
    "Velocity.y":	"/myproject/Velocity.y",
    "Velocity.z":	"/myproject/Velocity.z"
};
// Wait 1s from when telemetry is received before sampling values in the UI. This is 1s because by default
// Open MCT is configured to release batches of telemetry every 1s. So depending on when it is sampled it
// may take up to 1s for telemetry to propagate to the UI from when it is received.
const TELEMETRY_PROPAGATION_TIME = 1000;

test.describe('Realtime telemetry displays', () => {
    test.beforeEach(async ({ page }) => {
        await enableLink();
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
        await enableLink();
    });

    test.describe('A complex display', () => {
        test.beforeEach(async ({ page }) => {
            const searchBox = await page.getByRole('searchbox', { name: 'Search Input' });
            await searchBox.click();
            // Fill Search input
            await searchBox.fill("e2e real-time test layout");

            const searchResults = await page.getByLabel('Search Results Dropdown');

            //Search Result Appears and is clicked
            const layoutSearchResult = await searchResults.getByText("e2e real-time test layout", { exact: true });
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
            await disableLink();

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const latestValueObjects = await latestParameterValues(Object.values(namesToParametersMap));
            const parameterNamesToLatestValues = toParameterNameToValueMap(latestValueObjects);
            const tableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const tableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);
            assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName);

            // Disable playback
            await enableLink();

            // Let it run for a few seconds to cycle through a few telemetry values
            await page.waitForTimeout(WAIT_FOR_MORE_TELEMETRY);

            // Disable playback
            await disableLink();

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const secondLatestValueObjects = await latestParameterValues(Object.values(namesToParametersMap));
            const secondParameterNamesToLatestValues = toParameterNameToValueMap(secondLatestValueObjects);
            const secondTableValuesByParameterName = await getParameterValuesFromLadTable(ladTable);
            const secondTableTimestampsByParameterName = await getParameterTimestampsFromLadTable(ladTable);

            //First compare timestamps to make sure telemetry on screen is actually changing.
            Object.keys(namesToParametersMap).forEach(key => {
                expect(tableTimestampsByParameterName[key]).not.toBe(secondTableTimestampsByParameterName[key]);
            });

            // Next confirm that the values on screen are, again, the same as the latest values in Yamcs
            assertParameterMapsAreEqual(secondParameterNamesToLatestValues, secondTableValuesByParameterName);
        });

        test('Open MCT does not drop telemetry while app is loading', async ({ page }) => {
            const notification = await page.getByRole('alert');
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
            const notification = await page.getByRole('alert');
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
            await disableLink();

            // Wait 1 second for values to propagate to client and render on screen.
            await page.waitForTimeout(TELEMETRY_PROPAGATION_TIME);

            const latestValueObjects = await latestParameterValues(Object.values(namesToParametersMap));
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
        await disableLink();
        sortOpenMctTelemetryAscending(telemetryValues);

        // 2. confirm that it is received as an array.
        expect(telemetryValues.length).toBeGreaterThan(1);
        const start = new Date(new Date(telemetryValues[0].timestamp).getTime() - 1).toISOString();
        const end = new Date(telemetryValues[telemetryValues.length - 1].timestamp).toISOString();
        const parameterArchiveTelemetry = await parameterArchive({
            start,
            end,
            parameterId: `/myproject/Battery1_Temp`
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

    function assertParameterMapsAreEqual(parameterNamesToLatestValues, tableValuesByParameterName) {
        Object.keys(namesToParametersMap).forEach((parameterName) => {
            const valueInYamcs = parameterNamesToLatestValues[parameterName];
            const valueOnScreen = tableValuesByParameterName[parameterName];

            expect(valueOnScreen).toBe(valueInYamcs);
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
        const matchingLadTableFrames = await page.locator(`[aria-label="sub object frame"]:has([aria-label="object name"][title="${ladTableName}"])`);

        return matchingLadTableFrames.locator('[aria-label="lad table"]').first();

    }

    async function getParameterValuesFromLadTable(ladTable) {
        const allRows = await (await ladTable.locator('tbody>tr')).all();
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

    async function getParameterTimestampsFromLadTable(ladTable) {
        const allRows = await (await ladTable.locator('tbody>tr')).all();
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
