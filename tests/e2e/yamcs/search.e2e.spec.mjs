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
Search Specific Tests
*/

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

test.describe("Quickstart search tests @yamcs", () => {
    test('Validate aggregate in search result', async ({ page }) => {
        // Go to baseURL
        await page.goto("./");
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();

        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').click();
        // Search for Sequence
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('Sequence');

        await expect(page.getByLabel('Object Search Result').nth(0)).toContainText("CCSDS_Packet_Sequence");
        await expect(page.getByLabel('Object Search Result').nth(1)).toContainText("CCSDS_Packet_Sequence.GroupFlags");
        await expect(page.getByLabel('Object Search Result').nth(2)).toContainText("CCSDS_Packet_Sequence.Count");
        // Search for mixed case and get same results
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('seQuence');
        await expect(page.getByLabel('Object Search Result').nth(0)).toContainText("CCSDS_Packet_Sequence");
        await expect(page.getByLabel('Object Search Result').nth(1)).toContainText("CCSDS_Packet_Sequence.GroupFlags");
        await expect(page.getByLabel('Object Search Result').nth(2)).toContainText("CCSDS_Packet_Sequence.Count");
    });

    test('Duplicate raw search hits from YAMCS are deduped in search results', async ({ page }) => {
        // CCSDS_Packet_ID is an aggregate with four members (Version, Type,
        // SecHdrFlag, APID). YAMCS's MDB search API (with searchMembers=true)
        // returns the *parent* parameter once per matching member in the raw
        // response, so a query of "CCSDS_Packet_ID" yields five raw hits that
        // all share the same qualifiedName (/myproject/CCSDS_Packet_ID).
        // #convertSearchHitToTelemetries must dedupe those raw hits before
        // recursing into members, otherwise the parent (and by extension its
        // members) would be duplicated in the search results.
        await page.goto("./");
        const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject' });
        await expect(myProjectTreeItem).toBeVisible();

        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').click();
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('CCSDS_Packet_ID');

        // Exactly one entry per parameter/member: the parent plus its four
        // members, with no duplicates despite YAMCS sending the parent five
        // times in its raw response.
        await expect(page.getByLabel('Object Search Result')).toHaveCount(5);
        await expect(page.getByLabel('Object Search Result').nth(0)).toContainText("CCSDS_Packet_ID");
        await expect(page.getByLabel('Object Search Result').nth(1)).toContainText("CCSDS_Packet_ID.Version");
        await expect(page.getByLabel('Object Search Result').nth(2)).toContainText("CCSDS_Packet_ID.Type");
        await expect(page.getByLabel('Object Search Result').nth(3)).toContainText("CCSDS_Packet_ID.SecHdrFlag");
        await expect(page.getByLabel('Object Search Result').nth(4)).toContainText("CCSDS_Packet_ID.APID");
    });
});
