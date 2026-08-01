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
Export to CSV Action Specific Tests
*/

import fs from 'fs';
import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { setFixedTimeMode } = appActions;

const TELEMETRY_PARAMETER = 'CCSDS_Packet_Length';

test.describe("Export to CSV action @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();
        await setFixedTimeMode(page);

        // Expand myproject and its subfolder
        await page.getByLabel('Expand myproject').click();
        await page.getByLabel('Expand myproject').click();

        await page.getByLabel(`Navigate to ${TELEMETRY_PARAMETER} yamcs`).click();
    });

    test('Exports a downloadable CSV file for a telemetry object', async ({ page }, testInfo) => {
        await page.getByLabel('More actions').click();

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('menuitem', { name: 'Export to CSV' }).click()
        ]);

        expect(download.suggestedFilename()).toMatch(/\.csv$/);

        const savedFilePath = testInfo.outputPath(download.suggestedFilename());
        await download.saveAs(savedFilePath);

        const { size } = fs.statSync(savedFilePath);
        expect(size).toBeGreaterThan(0);
    });

    test('Shows an error notification when the export request fails', async ({ page }) => {
        // Playwright glob routes: a single `*` never matches `/`. The export URL's query
        // string embeds the parameter's qualified name as `parameters=myproject/Name`, which
        // contains a literal `/` -- a single trailing `*` can't span across it, so the route
        // silently never matched and no request was ever intercepted. `**` matches across `/`.
        await page.route('**:exportParameterValues**', async (route) => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ msg: 'Simulated export failure' })
            });
        });

        await page.getByLabel('More actions').click();
        await page.getByRole('menuitem', { name: 'Export to CSV' }).click();

        const notification = page.getByRole('alert');
        await expect(notification).toBeVisible();
        await expect(notification).toContainText('Failed to export: Simulated export failure');
    });
});
