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
Telemetry Table Specific Tests
*/

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, setRealTimeMode } = appActions;
const FIVE_SECONDS = 5 * 1000;

test.describe("Telemetry Tables tests @yamcs", () => {

    // An error will be thrown if an attempt to mutate an immutable object is made, this will cover
    // that case as well as any other errors during the test
    test.use({ failOnConsoleError: true });

    test.beforeEach(async ({ page }) => {
        // Go to baseURL first
        await page.goto("./", { waitUntil: "domcontentloaded" });

        // Set localStorage value after navigation
        await page.evaluate(() => {
            window.localStorage.setItem('exampleLayout', 'true');
        });

        // Reload the page to apply the localStorage setting
        await page.reload({ waitUntil: "domcontentloaded" });
        await expect(page.getByText('Loading...')).toBeHidden();
    });

    test('Telemetry Tables viewing an unpersistable object, will not modify the configuration on mode change', async ({ page }) => {
        // Navigate to the Events table
        await page.goto('./#/browse/taxonomy:spacecraft/taxonomy:yamcs.events?view=table');

        // Find the mode switch button and click it, this will trigger a mutation on mutable objects configuration
        await page.getByRole('button', { name: 'SHOW UNLIMITED' }).click();

        // Assert that the 'SHOW LIMITED' button is now visible
        await expect(page.getByRole('button', { name: 'SHOW LIMITED' })).toBeVisible();
    });

    test('Telemetry tables when changing mode, will not change the sort order of the request', async ({ page }) => {
        // Set up request promise for an events request in descending order
        let eventRequestOrderDescending = page.waitForRequest(/.*\/api\/.*\/events.*order=desc$/);

        // Navigate to the Events table
        await page.goto('./#/browse/taxonomy:spacecraft/taxonomy:yamcs.events?view=table');

        // Wait for the descending events request
        await eventRequestOrderDescending;

        // Reset request promise for an events request in descending order
        eventRequestOrderDescending = page.waitForRequest(/.*\/api\/.*\/events.*order=desc$/);

        // Find the mode switch button and click it, this will trigger another events request
        await page.getByRole('button', { name: 'SHOW UNLIMITED' }).click();

        await eventRequestOrderDescending;

        // Assert that the 'SHOW LIMITED' button is now visible
        await expect(page.getByRole('button', { name: 'SHOW LIMITED' })).toBeVisible();
    });

    test('Changing sort order in limited mode triggers a new request', async ({ page }) => {
        // Set up request promise for an events request in descending order
        const eventRequestOrderDescending = page.waitForRequest(/.*\/api\/.*\/events.*order=desc$/);

        // Navigate to the Events table
        await page.goto('./#/browse/taxonomy:spacecraft/taxonomy:yamcs.events?view=table');

        // Wait for and verify that the request was made
        await expect(eventRequestOrderDescending).resolves.toBeTruthy();

        // Assert that the 'SHOW UNLIMITED' button is visible (we are in limited mode)
        await expect(page.getByRole('button', { name: 'SHOW UNLIMITED' })).toBeVisible();

        // Set up request promise before clicking to change sort order
        const eventRequestOrderAscending = page.waitForRequest(/.*\/api\/.*\/events.*order=asc$/);

        // flip sort order
        await page.locator('thead div').filter({ hasText: 'Generation Time' }).click();

        // Wait for and verify that the request was made
        await expect(eventRequestOrderAscending).resolves.toBeTruthy();
    });

    test('Telemetry tables are sorted in desc order correctly', async ({ page }) => {
        await setRealTimeMode(page);

        //navigate to CCSDS_Packet_Length with a specified realtime window
        await page.goto('./#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~CCSDS_Packet_Length?tc.mode=local&tc.startDelta=5000&tc.endDelta=5000&tc.timeSystem=utc&view=table');

        // Wait for at least 10 value rows to be visible so we have a decent number of rows to sort
        await expect(page.getByLabel('name table cell CCSDS_Packet_Length').nth(10)).toBeVisible();

        // pause the table
        await page.getByLabel('Pause').click();
        await expect(page.getByLabel('Play', { exact: true })).toBeVisible();
        const telemTableDesc = await page.getByLabel("CCSDS_Packet_Length table content");

        // assert that they're in desc order
        expect(await assertTableRowsInOrder(telemTableDesc, 'desc')).toBe(true);

        // Unpause
        await page.getByLabel('Play', { exact: true }).click();
        await expect(page.getByLabel('Pause')).toBeVisible();

        const firstTimestamp = await page.getByLabel('utc table cell').first().textContent();
        // flip sort order
        await page.locator('thead div').filter({ hasText: 'Timestamp' }).click();
        // Wait for the timestamp of the first row to change signifying that the sort is complete and the newly sorted 
        // rows have been rendered, as rendering is throttled.
        await expect(page.getByLabel('utc table cell').first()).not.toHaveText(firstTimestamp);

        // pause the table
        await page.getByLabel('Pause', { exact: true }).click();
        await expect(page.getByLabel('Play', { exact: true })).toBeVisible();
        const telemTableAsc = await page.getByLabel("CCSDS_Packet_Length table content");
        // assert that they're in asc order
        expect(await assertTableRowsInOrder(telemTableAsc, 'asc')).toBe(true);
    });

    test('Telemetry tables allow manually added name column to be hidden', async ({ page }) => {
        // Create a table with a manually added name column
        const table = await createDomainObjectWithDefaults(page, {
            type: 'Telemetry Table',
            name: 'Hide Name Column Test'
        });
        await page.goto(table.url, { waitUntil: 'domcontentloaded' });

        // add a telemetry endpoint to the table
        await page.getByLabel('Expand myproject folder').click();
        await page.getByLabel('Expand myproject folder').click();
        const objectPane = page.locator('.c-object-view');
        const telemetryEndpoint = page.getByLabel('Navigate to A yamcs.telemetry');
        await telemetryEndpoint.dragTo(objectPane);

        // select the config tab
        await page.getByRole('tab', { name: 'Config' }).click();

        // verify that the name column is visible
        await expect(page.getByRole('cell', {
            name: 'Name',
            exact: true
        })).toBeVisible();

        // hide the name column
        await page.getByLabel('Name', { exact: true }).click();

        // Save (exit edit mode)
        await page.getByLabel('Save').click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        // verify that the name column is hidden
        await expect(page.getByRole('cell', {
            name: 'Name',
            exact: true
        })).toBeHidden();
    });

    /**
     * Returns whether a list of timestamp based rows are in asc or desc order
     * @param { Node } telemTable Node for telemetry table
     * @param { string } order 'asc' or 'desc'
     * @returns {Boolean} All table rows are in order
     */
    async function assertTableRowsInOrder(telemTable, order) {
        let rowsAreInOrder = false;
        const allRows = await (await telemTable.getByLabel('Table Row')).all();
        const arrayOfTimestamps = await Promise.all(allRows.map(async (row) => {
            const timestamp = await row.getByLabel(/utc table cell.*/).innerText();

            return new Date(timestamp).getTime();
        }));
        // check that they're in order
        // arrayOfTimestamps
        if (order === 'desc') {
            rowsAreInOrder = arrayOfTimestamps.every((timestamp, index) => {
                return index === 0 || timestamp <= arrayOfTimestamps[index - 1];
            });
        } else {
            //order === 'asc'
            rowsAreInOrder = arrayOfTimestamps.every((timestamp, index) => {
                return index === 0 || timestamp >= arrayOfTimestamps[index - 1];
            });
        }

        return rowsAreInOrder;
    }

});
