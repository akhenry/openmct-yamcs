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
 * This test suite is dedicated to testing the Bar Graph component.
 */

import { pluginFixtures, appActions } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
const { createDomainObjectWithDefaults } = appActions;

test.describe('Bar Graph', () => {
  let barGraph;
  let networkRequests = [];
  let historicalGet;

  test.beforeEach(async ({ page }) => {
    // Open a browser, navigate to the main page, and wait until all networkevents to resolve
    await page.goto('./', { waitUntil: 'domcontentloaded' });

    // Create the Bar Graph
    barGraph = await createDomainObjectWithDefaults(page, { type: 'Graph' });
  });

  test('Requests a single historical datum', async ({ page }) => {
    //Expand the myproject folder (/myproject)
    const myProjectTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
    const firstMyProjectTriangle = myProjectTreeItem.first().locator('span.c-disclosure-triangle');
    await firstMyProjectTriangle.click();

    //Expand the myproject under the previous folder (/myproject/myproject)
    const viperRoverTreeItem = page.locator('.c-tree__item').filter({ hasText: 'myproject'});
    const viperRoverProjectTriangle = viperRoverTreeItem.nth(1).locator('span.c-disclosure-triangle');
    await viperRoverProjectTriangle.click();

    //Find the Magnetometer parameter (/myproject/myproject/Magnetometer)
    const magnetometerTreeItem = page.getByRole('treeitem', { name: /Magnetometer/ });

    networkRequests = [];
    historicalGet = page.waitForRequest('**/api/archive/myproject/parameters/**');

    //Drag and drop the Magnetometer telemetry endpoint into this bar graph
    await magnetometerTreeItem.dragTo(page.getByLabel('Object View'));

    // Save (exit edit mode)
    await page.getByLabel('Save').click();
    await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    const historicalRequest = await historicalGet;
    await expect(historicalRequest.url()).toContain('limit=1');
  });
});

/**
 * Util for returning the size option for telemetry requests
 * @param {import('@playwright/test').Page} page
 */
async function addTelemetryInterceptor(page) {
  const getRequestOptionsPromise = new Promise((resolve) =>
    page.exposeFunction('getRequestOptions', resolve)
  );

  await page.evaluate(() => {
    function requestOptionsChecker() {
      return {
        appliesTo: () => {
          return true;
        },
        invoke: (request) => {
          window.getRequestOptions({
            strategy: request.strategy,
            size: request.size
          });
          return request;
        }
      };
    }
    window.openmct.telemetry.addRequestInterceptor(requestOptionsChecker());
  });

  return getRequestOptionsPromise;
}
