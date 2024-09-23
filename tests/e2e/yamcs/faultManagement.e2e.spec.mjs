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
Staleness Specific Tests
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

const YAMCS_API_URL = "http://localhost:8090/api/";

test.describe("Fault Management @yamcs", () => {
    test.beforeAll("activate alarms on a telemetry point", async () => {
        // Set the default alarms for the parameter in such a way
        // that it is guaranteed to produce a fault on load.
        const response = await setDefaultAlarms('Latitude', [
            {
                level: 'WATCH',
                minInclusive: 808,
                maxInclusive: 810
            },
            {
                level: 'WARNING',
                minInclusive: 810.01,
                maxInclusive: 812
            },
            {
                level: 'DISTRESS',
                minInclusive: 812.01,
                maxInclusive: 814
            },
            {
                level: 'CRITICAL',
                minInclusive: 814.01,
                maxInclusive: 820
            },
            {
                level: 'SEVERE',
                minInclusive: 820.01,
                maxInclusive: 824
            }
        ]);
        expect(response.status).toBe(200);
    });

    test.beforeEach(async ({ page }) => {

        const networkPromise = page.waitForResponse('**/api/mdb/myproject/parameters**');

        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await networkPromise;
    });

    test('Shows faults of differing severities ', async ({ page }) => {
        await test.step('Shows fault with severity WATCH', async () => {
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, "Latitude", 'WATCH');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(page.getByLabel('Fault Latitude with severity WATCH in /myproject')).toBeVisible();
        });

        await test.step('Shows fault with severity WARNING', async () => {
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, "Latitude", 'WARNING');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(page.getByLabel('Fault Latitude with severity WARNING in /myproject')).toBeVisible();
        });

        await test.step('Shows fault with severity CRITICAL', async () => {
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, "Latitude", 'CRITICAL');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(page.getByLabel('Fault Latitude with severity CRITICAL in /myproject')).toBeVisible();
        });
    });

    test.afterAll("remove alarms from a telemetry point", async () => {
        const responses = await clearAlarms('Latitude');
        for (const res of responses) {
            expect.soft(res.status).toBe(200);
        }
    });
});

/**
 * @typedef {Object} AlarmRange
 * @property {'WATCH' | 'WARNING' | 'DISTRESS' | 'CRITICAL' | 'SEVERE'} level - The alarm level.
 * @property {number} minInclusive - The minimum inclusive value for the alarm.
 * @property {number} maxInclusive - The maximum inclusive value for the alarm.
 */

/**
 * Set default alarms for a parameter.
 * @param {string} parameter - The parameter to set alarms for.
 * @param {AlarmRange[]} staticAlarmRange - The static alarm range configuration.
 * @param {string} [instance='myproject'] - The instance name.
 * @param {string} [processor='realtime'] - The processor name.
 */
// eslint-disable-next-line require-await
async function setDefaultAlarms(parameter, staticAlarmRange = [], instance = 'myproject', processor = 'realtime') {
    return fetch(`${YAMCS_API_URL}mdb-overrides/${instance}/${processor}/parameters/${instance}/${parameter}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'SET_DEFAULT_ALARMS',
            defaultAlarm: {
                staticAlarmRange
            }
        })
    });
}

/**
 * Clear alarms for a parameter.
 * @param {string} parameter - The parameter to clear alarms for.
 * @param {string} [instance='myproject'] - The instance name.
 * @param {string} [processor='realtime'] - The processor name.
 * @returns {Promise<Response>} - The response from the server.
 */
// eslint-disable-next-line require-await
async function clearAlarms(parameter, instance = 'myproject', processor = 'realtime') {
    await setDefaultAlarms(parameter, [], instance, processor);
    const response = await getAlarms(instance);
    const alarms = await response.json();
    const alarmsToClear = Object.values(alarms).map(alarm => {

        return {
            name: alarm[0].id.name,
            seqNum: alarm[0].seqNum
        };
    });

    return Promise.all(
        alarmsToClear.map(alarm =>
            fetch(`${YAMCS_API_URL}processors/${instance}/${processor}/alarms/${alarm.name}/${alarm.seqNum}:clear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        )
    );
}

// eslint-disable-next-line require-await
async function getAlarms(instance = 'myproject') {
    return fetch(`${YAMCS_API_URL}archive/${instance}/alarms`);
}

async function modifyAlarmSeverity(route, alarmName, newSeverity) {
    const response = await route.fetch();
    let body = await response.json();

    // Modify the rawValue.floatValue to trigger a specific alarm
    body.alarms.forEach(alarm => {
        if (alarm.id.name === alarmName) {
            alarm.severity = newSeverity;
        }
    });

    await route.fulfill({
        response,
        body: JSON.stringify(body),
        headers: {
            ...response.headers(),
            'content-type': 'application/json'
        }
    });
}
