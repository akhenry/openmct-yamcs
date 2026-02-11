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
import { postAllEvents, postEvent } from '../../../example/make-example-events.mjs';
const { test, expect } = pluginFixtures;
const {
    createDomainObjectWithDefaults,
    setStartOffset,
    setEndOffset,
    setFixedTimeMode,
    setRealTimeMode
} = appActions;

const SEVERITIES = ['INFO', 'WATCH', 'WARNING', 'DISTRESS', 'CRITICAL', 'SEVERE'];

test.describe("Timeline Events in @yamcs", () => {
    let eventsTreeItem;
    let eventTimelineView;
    let objectPane;
    let timelineAxis;

    test.beforeEach(async ({ page }) => {
        await page.goto("./", { waitUntil: "domcontentloaded" });

        await page.getByLabel('Expand myproject folder').click();
        eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        eventTimelineView = await createDomainObjectWithDefaults(page, { type: 'Time Strip' });

        objectPane = page.getByLabel(`${eventTimelineView.name} Object View`);
        timelineAxis = objectPane.getByLabel('Time Axis');
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

    test('YAMCS event lines can extend over other telemetry in the timeline', async ({ page }) => {
        const plot = await createDomainObjectWithDefaults(page, { type: 'Overlay Plot' });
        const plotTreeItem = page.getByRole('treeitem', { name: plot.name });
        await page.goto(eventTimelineView.url);
        await page.getByLabel('Expand My Items folder').click();
        await plotTreeItem.dragTo(objectPane);
        await eventsTreeItem.dragTo(timelineAxis);

        await postAllEvents();

        await setStartOffset(page, { startMins: '02' });
        await setEndOffset(page, { endMins: '02' });
        await setFixedTimeMode(page);

        const eventsContainer = page.locator('.c-events-tsv__container');
        const eventLines = eventsContainer.locator('.c-events-tsv__event-line');
        const eventLinesCount = await eventLines.count();
        const overlayLinesContainer = page.locator('.c-timeline__overlay-lines__extended-line-container');
        const overlayLines = overlayLinesContainer.locator('.c-timeline__event-line--extended');
        await expect(overlayLines).toHaveCount(0);
        await page.getByLabel('Toggle extended event lines overlay for Events').click();
        await expect(overlayLines).toHaveCount(eventLinesCount);
    });

    test('Event subscriptions are filtered in fixed time', async ({ page }) => {
        await postAllEvents();

        await setStartOffset(page, { startMins: '02' });
        await setEndOffset(page, { endMins: '02' });
        await setFixedTimeMode(page);
        await page.getByLabel('Expand Events yamcs.events').click();

        await page.getByRole('treeitem', { name: /Events: info/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /Events: distress/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /Events: severe/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /PressureModule/ })
            .dragTo(timelineAxis);
        await page.getByLabel('Expand PressureModule yamcs.').click();
        await page.getByRole('treeitem', { name: /PressureModule: critical/ })
            .dragTo(timelineAxis);
        await page.getByLabel('Expand TemperatureModule yamcs.').click();
        await page.getByRole('treeitem', { name: /TemperatureModule: critical/ })
            .dragTo(timelineAxis);

        await page.getByLabel('Save').click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        const eventsInfoContainer = page.getByLabel('Events: info Object View').locator('.c-events-tsv__container');
        const eventsDistressContainer = page.getByLabel('Events: distress Object View').locator('.c-events-tsv__container');
        const eventsSevereContainer = page.getByLabel('Events: severe Object View').locator('.c-events-tsv__container');
        const pressureModuleContainer = page.getByLabel('PressureModule Object View').locator('.c-events-tsv__container');
        const pressureModuleCriticalContainer = page.getByLabel('PressureModule: critical Object View').locator('.c-events-tsv__container');
        const temperatureModuleCriticalContainer = page.getByLabel('TemperatureModule: critical Object View').locator('.c-events-tsv__container');

        const eventsFilterArray = [
            {
                severity: 'INFO',
                container: eventsInfoContainer
            },
            {
                severity: 'DISTRESS',
                container: eventsDistressContainer
            },
            {
                severity: 'SEVERE',
                container: eventsSevereContainer
            },
            {
                source: 'PressureModule',
                container: pressureModuleContainer
            },
            {
                source: 'PressureModule',
                severity: 'CRITICAL',
                container: pressureModuleCriticalContainer
            },
            {
                source: 'TemperatureModule',
                severity: 'CRITICAL',
                container: temperatureModuleCriticalContainer
            }
        ];

        for (const eventsFilter of eventsFilterArray) {
            const eventLines = await eventsFilter.container.locator('.c-events-tsv__event-line').all();

            for (const eventLine of eventLines) {
                await eventLine.click();

                const rows = page.getByLabel('Inspector Views').locator('.c-inspect-properties__row');

                if (eventsFilter.source) {
                    const sourceRow = rows.filter({
                        has: page.locator('.c-inspect-properties__label', { hasText: 'source' })
                    });
                    const source = await sourceRow.locator('.c-inspect-properties__value').textContent();

                    await expect(source).toBe(eventsFilter.source);
                }

                if (eventsFilter.severity) {
                    const severityRow = rows.filter({
                        has: page.locator('.c-inspect-properties__label', { hasText: 'severity' })
                    });
                    const severity = await severityRow.locator('.c-inspect-properties__value').textContent();
                    const shouldDisplaySeverity = hasSeverityLevel(severity, eventsFilter.severity);

                    await expect(shouldDisplaySeverity).toBe(true);
                }
            }
        }
    });

    test('Event subscriptions are filtered in real time', async ({ page }) => {
        await setRealTimeMode(page);
        await page.getByLabel('Expand Events yamcs.events').click();

        await page.getByRole('treeitem', { name: /Events: info/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /Events: distress/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /Events: severe/ })
            .dragTo(objectPane);
        await page.getByRole('treeitem', { name: /PressureModule/ })
            .dragTo(timelineAxis);
        await page.getByLabel('Expand PressureModule yamcs.').click();
        await page.getByRole('treeitem', { name: /PressureModule: critical/ })
            .dragTo(timelineAxis);
        await page.getByLabel('Expand TemperatureModule yamcs.').click();
        await page.getByRole('treeitem', { name: /TemperatureModule: critical/ })
            .dragTo(timelineAxis);

        await page.getByLabel('Save').click();
        await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

        const eventsInfoContainer = page.getByLabel('Events: info Object View').locator('.c-events-tsv__container');
        const eventsDistressContainer = page.getByLabel('Events: distress Object View').locator('.c-events-tsv__container');
        const eventsSevereContainer = page.getByLabel('Events: severe Object View').locator('.c-events-tsv__container');
        const pressureModuleContainer = page.getByLabel('PressureModule Object View').locator('.c-events-tsv__container');
        const pressureModuleCriticalContainer = page.getByLabel('PressureModule: critical Object View').locator('.c-events-tsv__container');
        const temperatureModuleCriticalContainer = page.getByLabel('TemperatureModule: critical Object View').locator('.c-events-tsv__container');

        const eventsFilterArray = [
            {
                severity: 'INFO',
                container: eventsInfoContainer
            },
            {
                severity: 'DISTRESS',
                container: eventsDistressContainer
            },
            {
                severity: 'SEVERE',
                container: eventsSevereContainer
            },
            {
                source: 'PressureModule',
                container: pressureModuleContainer
            },
            {
                source: 'PressureModule',
                severity: 'CRITICAL',
                container: pressureModuleCriticalContainer
            },
            {
                source: 'TemperatureModule',
                severity: 'CRITICAL',
                container: temperatureModuleCriticalContainer
            }
        ];

        await postEventWithParams('TestSource', 'DISTRESS', 1);
        await postEventWithParams('TemperatureModule', 'INFO', 2);
        await postEventWithParams('PressureModule', 'WARNING', 3);
        await postEventWithParams('PressureModule', 'CRITICAL', 4);

        for (const eventsFilter of eventsFilterArray) {
            const eventLines = await eventsFilter.container.locator('.c-events-tsv__event-line').all();

            for (const eventLine of eventLines) {
                await eventLine.click();

                const rows = page.getByLabel('Inspector Views').locator('.c-inspect-properties__row');

                if (eventsFilter.source) {
                    const sourceRow = rows.filter({
                        has: page.locator('.c-inspect-properties__label', { hasText: 'source' })
                    });
                    const source = await sourceRow.locator('.c-inspect-properties__value').textContent();

                    await expect(source).toBe(eventsFilter.source);
                }

                if (eventsFilter.severity) {
                    const severityRow = rows.filter({
                        has: page.locator('.c-inspect-properties__label', { hasText: 'severity' })
                    });
                    const severity = await severityRow.locator('.c-inspect-properties__value').textContent();
                    const shouldDisplaySeverity = hasSeverityLevel(severity, eventsFilter.severity);

                    await expect(shouldDisplaySeverity).toBe(true);
                }
            }
        }
    });

    function hasSeverityLevel(target, level) {
        const levelIndex = SEVERITIES.indexOf(level);
        const targetIndex = SEVERITIES.indexOf(target, levelIndex);

        return targetIndex >= 0;
    }

    async function postEventWithParams(source, severity, sequenceNumber) {
        await postEvent({
            type: 'EVENT',
            message: `Event ${sequenceNumber}: ${source}-${severity}`,
            severity,
            source,
            sequenceNumber,
            extra: {}
        }, 0);
    }
});
