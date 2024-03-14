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
Fault Management Specific Tests
*/

const { test, expect } = require('../opensource/pluginFixtures');
// const { createDomainObjectWithDefaults, selectInspectorTab, waitForPlotsToRender } = require('../opensource/appActions');

const testXVelocity = {
    "action": "SET_DEFAULT_ALARMS",
    "defaultAlarm": {
        "minViolations": 1,
        "staticAlarmRange": [
            {
                "level": "WATCH",
                "minInclusive": -0.0043722373,
                "maxInclusive": 0
            }
        ]
    }
};

const testYVelocity = {
    "action": "SET_DEFAULT_ALARMS",
    "defaultAlarm": {
        "minViolations": 1,
        "staticAlarmRange": [
            {
                "level": "WATCH",
                "minInclusive": -0.0011090818,
                "maxInclusive": 0.003261634
            }
        ]
    }
};

const testZVelocity = {
    "action": "SET_DEFAULT_ALARMS",
    "defaultAlarm": {
        "minViolations": 1,
        "staticAlarmRange": [
            {
                "level": "WATCH",
                "minInclusive": -0.0011090818,
                "maxInclusive": 0.003261634
            }
        ]
    }
};

const testSunsensor = {
    "action": "SET_DEFAULT_ALARMS",
    "defaultAlarm": {
        "minViolations": 1,
        "staticAlarmRange": [
            {
                "level": "CRITICAL",
                "minInclusive": -0.0043722373,
                "maxInclusive": 0.0100000
            }
        ]
    }
};

const xVelocityEndpoint = 'http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Velocity.x';
const yVelocityEndpoint = 'http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Velocity.y';
const zVelocityEndpoint = 'http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Velocity.z';
const detectorTempEndpoint = 'http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Detector_Temp';
const sunsensorEndpoint = 'http://localhost:8090/api/mdb-overrides/myproject/realtime/parameters/myproject/Sunsensor';

function isInteger (number) {
    // if parsing as integer changes value then float
    return parseInt(number, 10) === number;
}

test.describe("Fault management limits tests @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        // reset alarms

        // velocity endpoint
        /*
        const runTimeLimitResetResponseX = await page.request.patch(xVelocityEndpoint, {
            data: {}
        });
        const runTimeLimitResetResponseY = await page.request.patch(yVelocityEndpoint, {
            data: {}
        });
        const runTimeLimitResetResponseZ = await page.request.patch(zVelocityEndpoint, {
            data: {}
        });
        await expect(runTimeLimitResetResponseX).toBeOK();
        await expect(runTimeLimitResetResponseY).toBeOK();
        await expect(runTimeLimitResetResponseZ).toBeOK();
        */

        // Reset the limits for the Detector_Temp parameter using the yamcs API
        const runTimeLimitResetResponseSunsensor = await page.request.patch(sunsensorEndpoint, {
            data: {}
        });
        await expect(runTimeLimitResetResponseSunsensor).toBeOK();

        // go to fault management page
        // navigate to fault management page by url
        // ./fault-management instead of tree
        await page.goto("./#/browse/faults.taxonomy:faultManagement.view", { waitUntil: "networkidle" });

        // verify no faults set
    });

    test.only('Can show mdb limits support floats', async ({ page }) => {
        await page.goto("./#/browse/faults.taxonomy:faultManagement.view", { waitUntil: "networkidle" });

        // set faults with command & refresh
        // Change the limits for the Detector_Temp parameter using the yamcs API)

        // Velocity
        /*
        const runTimeLimitResetResponseX = await page.request.patch(xVelocityEndpoint, {
            data: testXVelocity
        });
        const runTimeLimitResetResponseY = await page.request.patch(yVelocityEndpoint, {
            data: testYVelocity
        });
        const runTimeLimitResetResponseZ = await page.request.patch(zVelocityEndpoint, {
            data: testZVelocity
        });
        await expect(runTimeLimitResetResponseX).toBeOK();
        await expect(runTimeLimitResetResponseY).toBeOK();
        await expect(runTimeLimitResetResponseZ).toBeOK();
        */

        const runTimeLimitResetResponseSunsensor = await page.request.patch(sunsensorEndpoint, {
            data: testSunsensor
        });
        await expect(runTimeLimitResetResponseSunsensor).toBeOK();

        // reload fault management
        await page.goto("./#/browse/faults.taxonomy:faultManagement.view", { waitUntil: "networkidle" });
        // verify table exists
        await page.locator('.c-faults-list-view-header-item-container-wrapper').click();
        // await expect(page.locator('.c-fault-mgmt__list-header-results')).toHaveText('1 Results');

        // get value of sunsensor trip value
        const sunsensorTripValue = await page.locator('.c-fault-mgmt__list')
            .filter({ hasText: 'Sunsensor'})
            .getByTitle('Trip Value')
            .textContent();
        const parsedValue = parseFloat(sunsensorTripValue);
        expect(isInteger(parsedValue)).toBeFalsy();

        // validate the float version appears
        // enumerate through different supported types

    });
});

