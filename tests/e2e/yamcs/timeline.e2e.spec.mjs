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
const { createDomainObjectWithDefaults, setStartOffset, setEndOffset, setFixedTimeMode } = appActions;

test.describe("Timeline Events in @yamcs", () => {
    test('Can create a timeline with YAMCS events', async ({ page }) => {
        // Go to baseURL
        await page.goto("./");
        await page.getByLabel('Expand myproject folder').click();
        const eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        const eventTimelineView = await createDomainObjectWithDefaults(page, { type: 'Time Strip' });
        const objectPane = page.getByLabel(`${eventTimelineView.name} Object View`);
        await eventsTreeItem.dragTo(objectPane);
        await postAllEvents();

        await setStartOffset(page, { startMins: '02' });
        await setEndOffset(page, { endMins: '02' });
        await setFixedTimeMode(page);

        await page
            .getByLabel(eventTimelineView.name)
            .getByLabel(/Pressure threshold exceeded/)
            .first()
            .click();
        await page.getByRole('tab', { name: 'Event' }).click();

        // ensure the event inspector has the the same event
        await expect(page.getByText(/Pressure threshold exceeded/)).toBeVisible();

        await page.getByLabel('Expand Events yamcs.events').click();
        await page.getByLabel('Expand PressureModule yamcs.event.specific').click();
        const pressureModuleInfoTreeItem = page.getByRole('treeitem', { name: /PressureModule: info/ });
        await pressureModuleInfoTreeItem.dragTo(objectPane);

        const pressureModuleCriticalTreeItem = page.getByRole('treeitem', { name: /PressureModule: critical/ });
        await pressureModuleCriticalTreeItem.dragTo(objectPane);

        // click on the event inspector tab
        await page.getByRole('tab', { name: 'Event' }).click();

        await expect(page.getByLabel('PressureModule: info Object').getByLabel(/Pressure system check completed/).first()).toBeVisible();
        await page.getByLabel('PressureModule: info Object').getByLabel(/Pressure system check completed/).first().click();
        // ensure the tooltip shows up
        await expect(
            page.getByRole('tooltip').getByText(/Pressure system check completed/)
        ).toBeVisible();

        // and that event appears in the inspector
        await expect(
            page.getByLabel('Inspector Views').getByText(/Pressure system check completed/)
        ).toBeVisible();

        // info statements should be hidden in critical severity
        await expect(page.getByLabel('PressureModule: critical Object View').getByLabel(/Pressure system check/).first()).toBeHidden();
        await expect(page.getByLabel('PressureModule: critical Object View').getByLabel(/Pressure threshold exceeded/).first()).toBeVisible();
        await page.getByLabel('PressureModule: critical Object View').getByLabel(/Pressure threshold exceeded/).first().click();
        await expect(page.getByLabel('Inspector Views').getByText('Pressure threshold exceeded')).toBeVisible();
        await expect(
            page.getByRole('tooltip').getByText(/Pressure threshold exceeded/)
        ).toBeVisible();

        // turn on extended lines
        await page.getByLabel('Toggle extended event lines overlay for PressureModule: critical').click();
        const overlayLinesContainer = page.locator('.c-timeline__overlay-lines');
        await expect(overlayLinesContainer.locator('.c-timeline__event-line--extended').last()).toBeVisible();
    });
});
