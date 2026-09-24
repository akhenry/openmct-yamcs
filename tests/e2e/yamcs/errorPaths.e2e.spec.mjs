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
Error Path Specific Tests

These tests force YAMCS backend requests to fail (via page.route) to exercise
error/fallback branches in the plugin providers that are otherwise unreachable
against a healthy YAMCS QuickStart instance. Each test asserts that the plugin
degrades gracefully (no uncaught exception, no hung UI) rather than crashing.
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

test.describe("Error paths @yamcs", () => {
    test('Events tree still renders when the event sources endpoint fails (events.js#getEventSources)', async ({ page }) => {
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error));

        // Force the event-sources listing endpoint to fail. getEventSources()
        // is expected to log the error and fall back to an empty array rather
        // than throwing.
        await page.route('**/api/archive/myproject/events/sources', (route) => route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Internal Server Error' })
        }));

        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();
        await myProjectTreeItem.first().locator('span.c-disclosure-triangle').click();

        // The Events root object is still created (only the per-source children,
        // which come from the failed request, are omitted).
        const eventsTreeItem = page.getByRole('treeitem', { name: /Events/ });
        await expect(eventsTreeItem).toBeVisible();
        await eventsTreeItem.locator('span.c-disclosure-triangle').click();
        await expect(page.getByRole('treeitem', { name: /Events: info/ })).toBeVisible();

        expect(pageErrors).toEqual([]);
    });

    test('Command Queues UI still renders when the queues endpoint fails (commands.js#getCommandQueues)', async ({ page }) => {
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error));

        // Force the command-queues endpoint to fail. getCommandQueues() is
        // expected to log the error and fall back to an empty array rather
        // than throwing.
        await page.route('**/api/processors/myproject/realtime/queues', (route) => route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Internal Server Error' })
        }));

        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();

        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();
        await myProjectTreeItem.first().locator('span.c-disclosure-triangle').click();

        // The Commands root object is still created (only the per-queue
        // children, which come from the failed request, are omitted).
        const commandsTreeItem = page.getByRole('treeitem', { name: /Commands/ });
        await expect(commandsTreeItem).toBeVisible();

        expect(pageErrors).toEqual([]);
    });

    test('Shows an error notification when the LAD batchGet request fails (latest-telemetry-provider.js#requestLatest)', async ({ page }) => {
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error));

        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.getByText('Loading...')).toBeHidden();

        // Expand myproject and its subfolder so the parameter is reachable.
        await page.getByLabel('Expand myproject').click();
        await page.getByLabel('Expand myproject').click();
        await expect(page.getByLabel('Navigate to CCSDS_Packet_Length yamcs')).toBeVisible();

        // Force the LAD batchGet request (used by LatestTelemetryProvider) to
        // fail with a network error after the tree has loaded successfully, so
        // that only requestLatest()'s error branch is exercised.
        await page.route('**/api/processors/myproject/realtime/parameters:batchGet', (route) => route.abort());

        // Navigating to a parameter's object view triggers a request for its
        // latest telemetry value via LatestTelemetryProvider#requestLatest.
        await page.getByLabel('Navigate to CCSDS_Packet_Length yamcs').click();

        const notification = page.getByRole('alert').filter({ hasText: 'Unable to fetch latest telemetry' });
        await expect(notification).toBeVisible();

        // The UI should not hang: the tree and object view remain usable.
        await expect(page.getByLabel('Navigate to CCSDS_Packet_Length yamcs')).toBeVisible();

        expect(pageErrors).toEqual([]);
    });

    test('Does not crash the app when the user info endpoint fails (user-provider.js#getUserInfo)', async ({ browser }) => {
        // Use a fresh browser context so there is no chance that a previous
        // test's successful `/api/user/` response is served from cache.
        const context = await browser.newContext();
        const page = await context.newPage();
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error));

        try {
            // Force the user-info request to fail with a network error.
            // #getUserInfo() re-throws in this case, which rejects the
            // in-flight getCurrentUser()/login promise.
            await page.route('**/api/user/', (route) => route.abort());

            await page.goto('./', { waitUntil: 'domcontentloaded' });
            await expect(page.getByText('Loading...')).toBeHidden();

            // The rest of the application (telemetry dictionary tree) should
            // still be usable even though user-dependent features (e.g.
            // mission/role status) may be unavailable.
            const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
            await expect(myProjectTreeItem).toBeVisible();
            await expect(page.getByLabel('Navigate to myproject folder')).toBeVisible();
        } finally {
            await context.close();
        }
    });
});
