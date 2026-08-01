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
Commands and Command Queues Specific Tests

Exercises the YAMCS command history telemetry provider end to end: a command is
issued directly against the running QuickStart instance via the YAMCS REST API,
and then the historical Commands table is checked to confirm the command shows
up with the correct queue, CCSDS header attributes, and acknowledgment status.
It also confirms that the raw command binary is rendered as hex via the
BinaryToHexFormatter plugin.

Stock QuickStart does not define any command arguments of a binary XTCE type, so
this suite only exercises the "binary" telemetry value (the raw, post-processed
command bytes), which every issued command carries regardless of its arguments.
Coverage of a binary-typed *argument* would require an MDB augmentation and is
left as a follow-up (a separate unit is already adding an MDB overlay for other
purposes and could carry a binary argument command at the same time).
*/

import { pluginFixtures } from 'openmct-e2e';
import { getCommandQueues, issueCommand } from './quickstartTools.mjs';
const { test, expect } = pluginFixtures;

const COMMANDS_TABLE_URL = './#/browse/taxonomy:spacecraft/taxonomy:yamcs.commands'
    + '?tc.mode=local&tc.startDelta=120000&tc.endDelta=30000&tc.timeSystem=utc&view=table';

test.describe("Commands @yamcs", () => {
    let yamcsURL;

    test.beforeEach(async ({ page }) => {
        await page.goto('./', { waitUntil: 'domcontentloaded' });
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();
    });

    test('Verify that Commands and Command Queues appear in the object tree', async ({ page }) => {
        await page.getByLabel('Expand myproject folder').click();
        // Tree item accessible names are prefixed with the expand/collapse action
        // (e.g. "Expand Commands yamcs.commands Navigate to Commands ... Object"),
        // not just the object's own name -- match anywhere in the label, not anchored.
        await expect(page.getByRole('treeitem', { name: /Commands/ })).toBeVisible();

        await page.getByLabel(/Expand Commands/).click();
        const queues = await getCommandQueues(yamcsURL);
        for (const queueName of queues) {
            // Same wrapped-label shape as above (e.g. "Navigate to default
            // yamcs.commands.queue Object"), so this can't be an exact match.
            await expect(page.getByRole('treeitem', { name: queueName })).toBeVisible();
        }
    });

    test('An issued command appears in the historical Commands table with queue, CCSDS attributes, and ack status, with binary rendered as hex', async ({ page }) => {
        const queues = await getCommandQueues(yamcsURL);
        expect(queues.length).toBeGreaterThan(0);
        const queueName = queues[0];

        await page.goto(COMMANDS_TABLE_URL);
        await expect(page.getByText('Loading...')).toBeHidden();

        const commandResponse = await issueCommand({
            qualifiedName: '/myproject/SwitchVoltageOn',
            args: { Battery: 1 },
            comment: 'openmct-yamcs e2e test command',
            yamcsURL
        });

        expect(commandResponse.commandName).toBe('/myproject/SwitchVoltageOn');

        const commandRow = page.getByLabel('Table Row').filter({
            has: page.getByLabel(`commandName table cell ${commandResponse.commandName}`)
        }).first();

        await test.step('command row appears with the correct queue and comment', async () => {
            await expect(commandRow).toBeVisible({ timeout: 15000 });
            await expect(commandRow.getByLabel(/^queue table cell/)).toHaveText(queueName);
            await expect(commandRow.getByLabel(/^comment table cell/)).toHaveText('openmct-yamcs e2e test command');
        });

        await test.step('CCSDS header attributes from the command assignments are rendered', async () => {
            await expect(commandRow.getByLabel(/^CCSDS_APID table cell/)).toHaveText('101');
        });

        await test.step('acknowledgment status attributes are rendered', async () => {
            await expect(commandRow.getByLabel(/^Acknowledge_Queued_Status table cell/)).toHaveText('OK', { timeout: 15000 });
            await expect(commandRow.getByLabel(/^Acknowledge_Released_Status table cell/)).toHaveText('OK', { timeout: 15000 });
            await expect(commandRow.getByLabel(/^Acknowledge_Sent_Status table cell/)).toHaveText('OK', { timeout: 15000 });
        });

        await test.step('raw command binary is rendered as hex via the BinaryToHexFormatter', async () => {
            const binaryCellText = await commandRow.getByLabel(/^binary table cell/).textContent();
            expect(binaryCellText).toMatch(/^0x[0-9A-F]+$/);
        });
    });

    test('A command with no user-supplied arguments (Reboot) still appears in the Commands table', async ({ page }) => {
        await page.goto(COMMANDS_TABLE_URL);
        await expect(page.getByText('Loading...')).toBeHidden();

        const commandResponse = await issueCommand({
            qualifiedName: '/myproject/Reboot',
            comment: 'openmct-yamcs e2e reboot test command',
            yamcsURL
        });

        expect(commandResponse.commandName).toBe('/myproject/Reboot');

        const commandRow = page.getByLabel('Table Row').filter({
            has: page.getByLabel(`commandName table cell ${commandResponse.commandName}`)
        }).first();

        await expect(commandRow).toBeVisible({ timeout: 15000 });
        await expect(commandRow.getByLabel(/^comment table cell/)).toHaveText('openmct-yamcs e2e reboot test command');
    });
});
