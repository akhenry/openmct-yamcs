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

const { test, expect } = require('../opensource/pluginFixtures');

test.describe("Quickstart search tests @yamcs", () => {
    test('Validate aggregate in search result', async ({ page }) => {
        // Go to baseURL
        await page.goto("./", { waitUntil: "networkidle" });

        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').click();
        // Search for Sequence
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('Sequence');
        await expect(page.locator('[aria-label="Search Result"] >> nth=0')).toContainText("CCSDS_Packet_Sequence");
        await expect(page.locator('[aria-label="Search Result"] >> nth=1')).toContainText("CCSDS_Packet_Sequence.GroupFlags");
        await expect(page.locator('[aria-label="Search Result"] >> nth=2')).toContainText("CCSDS_Packet_Sequence.Count");
        // Search for mixed case and get same results
        await page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]').fill('seQuence');
        await expect(page.locator('[aria-label="Search Result"] >> nth=0')).toContainText("CCSDS_Packet_Sequence");
        await expect(page.locator('[aria-label="Search Result"] >> nth=1')).toContainText("CCSDS_Packet_Sequence.GroupFlags");
        await expect(page.locator('[aria-label="Search Result"] >> nth=2')).toContainText("CCSDS_Packet_Sequence.Count");
    });
});
