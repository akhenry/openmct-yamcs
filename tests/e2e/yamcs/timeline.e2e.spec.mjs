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

import { pluginFixtures, appActions } from 'openmct-e2e';
import { postAllEvents } from '../../../example/make-example-events.mjs'; // Updated path and extension
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, setStartOffset, setFixedTimeMode } = appActions;

test.describe("Timeline Events in @yamcs", () => {
    test.only('Can create a timeline with YAMCS events', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });
        await page.getByLabel('Expand myproject folder').click();
        const eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        const eventTimelineView = await createDomainObjectWithDefaults(page, { type: 'Time Strip' });

        let objectPane = page.locator('.c-object-view');
        await eventsTreeItem.dragTo(objectPane);
        await postAllEvents();

        await setStartOffset(page, { startMins: '05' });
        await setFixedTimeMode(page);

        await page
            .getByLabel(eventTimelineView.name)
            .getByLabel(/Pressure threshold exceeded/)
            .first()
            .click();
        await page.getByRole('tab', { name: 'Event' }).click();

        // ensure the event inspector has the the same event
        await expect(page.getByText(/Pressure threshold exceeded/)).toBeVisible();

        // await page.getByLabel('Expand Events yamcs.events').click();
        // await page.getByLabel('Expand PressureModule yamcs.').click();
        // const pressureModuleInfoTreeItem = page.getByRole('treeitem', { name: /PressureModule: info/ });
        // objectPane = page.locator('.c-object-view');
        // await pressureModuleInfoTreeItem.dragTo(objectPane);

        // await page.pause();
    });
});
