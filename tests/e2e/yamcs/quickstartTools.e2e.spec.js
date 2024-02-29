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

import {
    enableLink,
    disableLink,
    isLinkEnabled,
    latestParameterValues,
    parameterArchive
} from './quickstartTools.js';
import { expect, test } from '@playwright/test';

test.describe('Quickstart library functions', () => {
    let yamcsURL;

    test.beforeEach(async ({page}) => {
        // Go to baseURL so we can get relative URL
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();
        await enableLink(yamcsURL);
    });
    test('Link can be disabled', async ({ page }) => {
        await disableLink(yamcsURL);
        expect(await isLinkEnabled(yamcsURL)).toBe(false);
    });
    test('Link can be enabled', async ({ page }) => {
        await disableLink(yamcsURL);
        expect(await isLinkEnabled(yamcsURL)).toBe(false);

        await enableLink(yamcsURL);
        expect(await isLinkEnabled(yamcsURL)).toBe(true);
    });
    test('Latest values can be retrieved', async () => {
        const latestValues = await latestParameterValues(['/myproject/Battery1_Temp', '/myproject/Battery1_Voltage'], yamcsURL);
        expect(latestValues.length).toBe(2);
        const areAllParameterValuesNumbers = latestValues.every((parameter) => {
            return !isNaN(parameter.engValue.floatValue);
        });

        expect(areAllParameterValuesNumbers).toBe(true);
    });
    test('Parameter archive values can be retrieved', async () => {
        const now = new Date();
        const ONE_MINUTE = 60 * 1000;
        const then = new Date(now - ONE_MINUTE);
        const latestValues = await parameterArchive({
            start: then.toISOString(),
            end: now.toISOString(),
            parameterId: '/myproject/Battery1_Temp',
            yamcsURL
        });
        expect(latestValues.length).toBeGreaterThan(0);

        const areAllParameterValuesNumbers = latestValues.every((parameter) => {
            return !isNaN(parameter.engValue.floatValue);
        });

        expect(areAllParameterValuesNumbers).toBe(true);
    });

});
