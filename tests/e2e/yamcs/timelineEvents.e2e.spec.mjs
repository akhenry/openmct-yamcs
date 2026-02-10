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
import { postAllEvents } from '../../../example/make-example-events.mjs';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults, setStartOffset, setEndOffset, setFixedTimeMode } = appActions;

test.describe("Timeline Events in @yamcs", () => {
    let eventsTreeItem;
    let eventTimelineView;
    let objectPane;
    let dropTarget;

    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });

        await page.getByLabel('Expand myproject folder').click();
        eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        eventTimelineView = await createDomainObjectWithDefaults(page, { type: 'Time Strip' });

        objectPane = page.getByLabel(`${eventTimelineView.name} Object View`);
        dropTarget = objectPane.getByLabel('Time Axis');
    });

    test('Can create a timeline with YAMCS events', async ({ page }) => {
        await eventsTreeItem.dragTo(objectPane);
        await postAllEvents();

        await setStartOffset(page, { startMins: '02' });
        await setEndOffset(page, { endMins: '02' });
        await setFixedTimeMode(page);

        await test.step('event tooltip appears on hover of event', async () => {
            await expect(
                page.getByRole('tooltip').getByText(/Pressure threshold exceeded/)
            ).not.toBeVisible();

            await page
                .getByLabel(eventTimelineView.name)
                .getByLabel(/Pressure threshold exceeded/)
                .first()
                .hover();

            await expect(
                page.getByRole('tooltip').getByText(/Pressure threshold exceeded/)
            ).toBeVisible();
        });

        await test.step('event details available in inspector on click of event', async () => {
            await expect(
                page.getByLabel('Inspector Views').getByText(/Pressure threshold exceeded/)
            ).not.toBeVisible();

            await page
                .getByLabel(eventTimelineView.name)
                .getByLabel(/Pressure threshold exceeded/)
                .first()
                .click();

            await page.getByRole('tab', { name: 'Event' }).click();

            await expect(
                page.getByLabel('Inspector Views')
                    .getByText(/Pressure threshold exceeded/)
            ).toBeVisible();
        });
    });
});
