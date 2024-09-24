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
const FAULT_PARAMETER = "Latitude";

/**
 * Get the locator for a triggered fault list item by severity.
 * @param {import('@playwright/test').Page} page - The page object.
 * @param {string} severity - The severity of the fault.
 * @returns {import('@playwright/test').Locator} - The locator for the fault's severity label.
 */
function getTriggeredFaultBySeverity(page, severity) {
    return page.getByLabel(new RegExp(`Fault triggered at.*${severity}.*`, 'i'));
}

test.describe("Fault Management @yamcs", () => {
    test.beforeAll("activate alarms on the telemetry point", async () => {
        // Set the default alarms for the parameter in such a way
        // that it is guaranteed to produce a fault on load.
        const response = await setDefaultAlarms(FAULT_PARAMETER, [
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
        // Wait until the YAMCS parameter request resolves
        await networkPromise;
    });

    test('Shows faults of differing severities ', async ({ page }) => {
        await test.step('Shows fault with severity WATCH', async () => {
            // Intercept the request to set the alarm to WATCH severity
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, FAULT_PARAMETER, 'WATCH');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(getTriggeredFaultBySeverity(page, 'WATCH')).toBeVisible();
        });

        await test.step('Shows fault with severity WARNING', async () => {
            // Intercept the request to set the alarm to WARNING severity
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, FAULT_PARAMETER, 'WARNING');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(getTriggeredFaultBySeverity(page, 'WARNING')).toBeVisible();
        });

        await test.step('Shows fault with severity CRITICAL', async () => {
            // Intercept the request to set the alarm to CRITICAL severity
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, FAULT_PARAMETER, 'CRITICAL');
            });

            await page.goto('./', { waitUntil: 'domcontentloaded' });

            await page.getByLabel('Navigate to Fault Management').click();
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeVisible();
        });
    });

    test('Faults may be shelved for a period of time', async ({ page }) => {
        await test.step('Set the alarm to critical and mock the shelve request', async () => {
            // Intercept the response to set the alarm to critical
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, FAULT_PARAMETER, 'CRITICAL');
            });

            // Intercept the request to shelve the fault and set the duration to 1000ms so
            // we don't have to wait long for the fault to un-shelve
            await page.route(/.*:shelve$/, async route => {
                let requestBody = await route.request().postDataJSON();
                requestBody.shelveDuration = 1000;
                await route.continue({ postData: requestBody });
            });
        });

        await test.step('Shelve the fault', async () => {
            await page.getByLabel('Navigate to Fault Management').click();
            await expect(page.getByLabel(/Fault triggered at.*CRITICAL.*/)).toBeVisible();
            await page.getByLabel('Select fault: Latitude in /myproject').check();
            await page.getByLabel('Shelve selected faults').click();
            await page.locator('#comment-textarea').fill("Shelvin' a fault!");
            await page.getByLabel('Save').click();
        });

        await test.step('Shelved faults are visible in the Shelved view', async () => {
            await expect(page.getByLabel(/Fault triggered at.*CRITICAL.*/)).toBeHidden();
            await page.getByTitle('View Filter').getByRole('combobox').selectOption('Shelved');
            await expect(page.getByLabel(/Fault triggered at.*CRITICAL.*/)).toBeVisible();
            await page.getByTitle('View Filter').getByRole('combobox').selectOption('Standard View');
        });
        await test.step('Fault is visible in the Standard view after shelve duration expires', async () => {
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeVisible();
            await page.getByTitle('View Filter').getByRole('combobox').selectOption('Shelved');
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeHidden();
        });
    });

    test('Faults may be acknowledged', async ({ page }) => {
        await test.step('Set the alarm to critical', async () => {
            // Intercept the response to set the alarm to critical
            await page.route('**/api/**/alarms', async route => {
                await modifyAlarmSeverity(route, FAULT_PARAMETER, 'CRITICAL');
            });
        });

        await test.step('Acknowledge the fault', async () => {
            await page.getByLabel('Navigate to Fault Management').click();
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeVisible();
            await page.getByLabel('Select fault: Latitude in /myproject').check();
            await page.getByLabel('Acknowledge selected faults').click();
            await page.locator('#comment-textarea').fill("Acknowledging a fault!");
            await page.getByLabel('Save').click();
        });

        await test.step('Acknowledged faults are visible in the Acknowledged view', async () => {
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeHidden();
            await page.getByTitle('View Filter').getByRole('combobox').selectOption('Acknowledged');
            await expect(getTriggeredFaultBySeverity(page, 'CRITICAL')).toBeVisible();
        });
    });

    test.afterAll("remove alarms from the telemetry point", async () => {
        const responses = await clearAlarms(FAULT_PARAMETER);
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
