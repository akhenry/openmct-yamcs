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
Filter Specific Tests
*/

const { test, expect } = require('../opensource/pluginFixtures');
const { createDomainObjectWithDefaults } = require('../opensource/appActions');

test.describe("Filter tests @yamcs", () => {
    test('Can filter events by severity', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
        const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
        await firstMyProjectTriangle.click();
        const eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        await createDomainObjectWithDefaults(page, { type: 'Telemetry Table' });

        const objectPane = page.locator('.c-object-view');
        await eventsTreeItem.dragTo(objectPane);

        // ensure global filters work
        await page.getByRole('tab', { name: 'Filters' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Global Filtering' }).locator('span').click();
        await page.getByRole('listitem').filter({ hasText: 'Events' }).locator('span').click();
        await page.locator('[aria-label="Global Filter"]').selectOption('critical');
        await expect(page.getByText('Filters applied')).toBeVisible();
        await expect(page.getByTitle('Data filters are being applied to this view.').getByText('critical')).toBeVisible();
        await page.locator('[aria-label="Global Filter"]').selectOption('NONE');
        await expect(page.getByText('Filters applied')).toBeHidden();
        await expect(page.getByTitle('Data filters are being applied to this view.')).toBeHidden();

        // ensure specific object filters work
        await page.getByRole('switch').click();
        await page.locator('[aria-label="Specific Filter"]').selectOption('info');
        await expect(page.getByText('Filters applied')).toBeVisible();
        await expect(page.getByTitle('Data filters are being applied to this view.').getByText('info')).toBeVisible();
        await page.locator('[aria-label="Specific Filter"]').selectOption('NONE');
        await expect(page.getByText('Filters applied')).toBeHidden();
        await expect(page.getByTitle('Data filters are being applied to this view.')).toBeHidden();

        // ensure specific object filters override global filters
        await page.locator('[aria-label="Specific Filter"]').selectOption('info');
        await page.locator('[aria-label="Global Filter"]').selectOption('critical');
        await expect(page.getByText('Filters applied')).toBeVisible();
        await expect(page.getByTitle('Data filters are being applied to this view.').getByText('info')).toBeVisible();

        // ensure global filters override when switch is on
        await page.getByRole('switch').click();
        await expect(page.getByText('Filters applied')).toBeVisible();
        await expect(page.getByTitle('Data filters are being applied to this view.').getByText('critical')).toBeVisible();
    });
});
