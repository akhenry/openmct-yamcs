/* eslint-disable no-undef */
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
 * The file contains custom fixtures which extend the base functionality of the Playwright fixtures
 * and appActions. These fixtures should be generalized across all plugins.
 */

// import { createDomainObjectWithDefaults } from './appActions.js';
import { test, request, expect } from './opensource/pluginFixtures.js';

/**
 * The name of the "My Items" folder in the domain object tree.
 *
 * Default: `"My Items"`
 *
 * @type {string}
 */
export const myItemsFolderName = 'My Items';

export { expect, request, test };

/**
 * Filters out non-fetch requests from the given array of network requests.
 * This includes preflight CORS, fetching stylesheets, page icons, etc.
 * Requires that a page requests object be instantiated.
 * page.on('request', request => allNetworkRequests.push(request));
 * @param {Array} requests - Array of network requests to filter.
 * @returns {Array} Filtered network requests.
 */
export function filterNonFetchRequests(requests) {
    return requests.filter(request => request.resourceType() === 'fetch');
}