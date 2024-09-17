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
This test suite is dedicated to testing our use of our custom fixtures to verify
that they are working as expected.
*/

import { expect, filterNonFetchRequests, test} from '../quickstartFixtures.js';

test.describe('quickstartFixtures tests', () => {
    // Keeping track of network requests during the tests.
    let allNetworkRequests = [];
    let fetchRequests = [];

    test('filterNonFetchRequests', async ({ page }) => {
    // Listening for all network requests and pushing them into allNetworkRequests array.
    page.on('request', request => allNetworkRequests.push(request));

    // Setting up promises to wait for specific network responses.
    // Testing the initial page load and verifying the presence of specific elements.
    await page.goto("./", { waitUntil: "networkidle" });
    fetchRequests = filterNonFetchRequests(allNetworkRequests);
    expect(allNetworkRequests.length).toBeGreaterThan(0);
    expect(fetchRequests.length).toBeGreaterThan(0);

    // Removing the 'request' event listener to prevent potential memory leaks.
    page.removeListener('request', request => allNetworkRequests.push(request));
    });
});