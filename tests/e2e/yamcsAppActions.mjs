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

/**
 * The fixtures in this file are to be used to consolidate common actions performed by the
 * various test suites. The goal is only to avoid duplication of code across test suites and not to abstract
 * away the underlying functionality of the application. For more about the App Action pattern, see /e2e/README.md)
 *
 * For example, if two functions are nearly identical in
 * timer.e2e.spec.js and notebook.e2e.spec.js, that function should be generalized and moved into this file.
 */

/**
 * Search for telemetry and link it to an object. objectName should come from the domainObject.name function.
 * @param {import('@playwright/test').Page} page 
 * @param {string} parameterName 
 * @param {string} objectName 
 */
async function searchAndLinkTelemetryToObject(page, parameterName, objectName) {
    await page.getByRole('searchbox', { name: 'Search Input' }).click();
    await page.getByRole('searchbox', { name: 'Search Input' }).fill(parameterName);
    await page.getByLabel(`${parameterName} yamcs.aggregate result`).getByText(parameterName).click();
    await page.getByLabel('More actions').click();
    await page.getByLabel('Create Link').click();
    await page.getByLabel('Modal Overlay').getByLabel('Search Input').click();
    await page.getByLabel('Modal Overlay').getByLabel('Search Input').fill(objectName);
    await page.getByLabel('Navigate to Bar Graph').click();
    await page.getByText('Ok').click();
}

export {
  searchAndLinkTelemetryToObject
};
