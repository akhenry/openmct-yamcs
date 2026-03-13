/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2026, United States Government
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

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, setFixedTimeMode, setStartOffset, setEndOffset, setTimeConductorBounds } = appActions;

test.describe(`Latest Available Data, or LAD (strategy='latest', greedyLAD=true) @yamcs`, () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();

        await setStartOffset(page, {
            startHours: '00',
            startMins: '00',
            startSecs: '00'
        });
        await setEndOffset(page, {
            endHours: '01',
            endMins: '00',
            endSecs: '00'
        });
    });

    test('LAD should always be requested if available', async ({ page }) => {
        let ladRowTimestamp;
        const ladTable = await createDomainObjectWithDefaults(page, { type: 'LAD Table'});
        const ladView = page.getByLabel(`${ladTable.name} Object View`);

        await page.getByLabel('Expand myproject folder').click();
        await page.getByLabel('Expand yamcs folder').click();
        await page.getByLabel('Expand yamcs folder').click();
        await page.getByLabel('Expand processor folder').click();

        const staticParameter = page.getByRole('treeitem', { name: /name/ });
        await staticParameter.dragTo(ladView);

        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        const ladRow = page.getByLabel('lad row');
        const ladRowTimestampCell = ladRow.getByLabel('lad timestamp');
        const ladRowValueCell = ladRow.getByLabel('lad value');

        await test.step(`shows LAD even if prior to time bounds in realtime mode`, async () => {
            await expect(ladRowValueCell).toHaveText('realtime');
            const ladRowTimestampString = await ladRowTimestampCell.textContent();
            ladRowTimestamp = new Date(ladRowTimestampString).getTime();
        });

        await test.step('shows LAD for timestamp before time bounds in fixed time mode', async () => {
            await setFixedTimeMode(page);

            await expect(ladRowValueCell).toHaveText('realtime');
            const ladRowTimestampString = await ladRowTimestampCell.textContent();
            const currentLadRowTimestamp = new Date(ladRowTimestampString).getTime();
            await expect(currentLadRowTimestamp).toBe(ladRowTimestamp);
        });

        await test.step('shows LAD for timestamp within time bounds', async () => {
            const date = new Date(ladRowTimestamp);
            const YYYYMMDD = date.toISOString().split('T')[0];

            await setTimeConductorBounds(page, {
                startDate: YYYYMMDD,
                endDate: YYYYMMDD,
                startTime: '00:00:00',
                endTime: '23:59:59'
            });

            await expect(ladRowValueCell).toHaveText('realtime');
            const ladRowTimestampString = await ladRowTimestampCell.textContent();
            const currentLadRowTimestamp = new Date(ladRowTimestampString).getTime();
            await expect(currentLadRowTimestamp).toBe(ladRowTimestamp);
        });

        await test.step('does not show LAD for timestamp after time bounds', async () => {
            const date = new Date(ladRowTimestamp);
            // Move date back by 1 day
            // telemetry should then be after the time bounds
            date.setDate(date.getDate() - 1);
            const YYYYMMDD = date.toISOString().split('T')[0];

            await setTimeConductorBounds(page, {
                startDate: YYYYMMDD,
                endDate: YYYYMMDD,
                startTime: '00:00:00',
                endTime: '23:59:59'
            });

            await expect(ladRowValueCell).toHaveText('---');
            await expect(ladRowTimestampCell).toHaveText('---');
        });
    });
});
