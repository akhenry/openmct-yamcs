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
 * Network Specific Tests for Open MCT and YAMCS connectivity.
 * This suite verifies the network requests made by the application to ensure correct interaction with YAMCS.
 */

import { test, expect, filterNonFetchRequests } from '../quickstartFixtures.mjs';
import { createDomainObjectWithDefaults, setFixedTimeMode } from '../opensource/appActions.js';

test.describe('Reload action', () => {
  let displayLayout;
  let batchGetResponse;
  let battery1tempResponse;
  let battery1tempResponseCont;
  let battery1voltageResponse;
  let battery1voltageResponeCont;
  let allNetworkRequests = [];
  test.beforeEach(async ({ page }) => {
    await page.goto('./', { waitUntil: 'domcontentloaded' });

    displayLayout = await createDomainObjectWithDefaults(page, {
      type: 'Display Layout',
      name: 'Display Layout'
    });

    await createDomainObjectWithDefaults(page, {
      type: 'Telemetry Table',
      name: 'Alpha Table'
    });

    //Expand the quickstart myproject twice to get to the telemetry in the tree
    await page.getByLabel('Expand myproject folder').click();
    await page.getByLabel('Expand myproject folder').click();

    //Add Battery1_Temp to Alpha Table
    await page.getByLabel('Edit Object').click();
    await page.getByRole('treeitem', { name: 'Battery1_Temp' }).dragTo(page.locator('.c-table__body-w'));
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    await createDomainObjectWithDefaults(page, {
        type: 'Telemetry Table',
        name: 'Beta Table'
      });

    //Add Battery1_Voltage to Beta Table
    await page.getByLabel('Edit Object').click();
    await page.getByRole('treeitem', { name: 'Battery1_Voltage' }).dragTo(page.locator('.c-table__body-w'));
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    //Add both Telemetry Tables to the Display Layout
    await page.goto(displayLayout.url, { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Edit Object', { exact: true }).click();
    await page.getByLabel('Collapse myproject folder').first().click();
    await page.getByLabel('Expand My Items folder').click();

    await page.getByLabel('Preview Alpha Table table')
      .dragTo(page.getByLabel('Display Layout Layout Grid').locator('div').nth(1), {
      targetPosition: { x: 0, y: 0 }
    });

    await page.getByLabel('Preview Beta Table table')
      .dragTo(page.getByLabel('Display Layout Layout Grid').locator('div').nth(1), {
      targetPosition: { x: 0, y: 250 }
    });


    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    await page.goto(displayLayout.url, { waitUntil: 'networkidle' });
    //Set to 1 Minute to reduce the time the opportunity for paginated data
    // await page.getByRole('menuitem', { name: /Real-Time/ }).click();

    await page.getByLabel('Start offset: 00:30:00').click();
    await page.getByLabel('Start offset minutes').fill('1');
    await page.getByLabel('Submit time offsets').click();
    await page.waitForLoadState('networkidle');
  });

  test('can reload display layout and its telemetry table children', async ({ page }) => {
    // Listening for all network requests and pushing them into allNetworkRequests array.
    page.on('request', request => allNetworkRequests.push(request));

    const beforeReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');
    const beforeReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');

    //reload Alpha Table and verify network correctness
    await page.waitForLoadState('networkidle');
    allNetworkRequests = [];

    //Create response promises
    battery1tempResponse = page.waitForResponse('**/api/archive/myproject/parameters/myproject/Battery1_Temp**')
    batchGetResponse = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');

    //Intercept the request to /api/archive/myproject/parameters/myproject/Battery1_Temp
    await page.route('**/api/archive/myproject/parameters/myproject/Battery1_Temp', async route => {
      const response = await route.fetch();
      const json = await response.json();

      // Replace every "floatValue" with 1337
      json.parameter.forEach(param => {
        if (param.rawValue && param.rawValue.type === 'FLOAT') {
          param.rawValue.floatValue = 1337;
        }
        if (param.engValue && param.engValue.type === 'FLOAT') {
          param.engValue.floatValue = 1337;
        }
      });

      console.log('Request:', JSON.stringify({
        url: route.request().url(),
        method: route.request().method(),
        headers: route.request().headers(),
        postData: route.request().postData()
      }, null, 2));

      console.log('Response:', JSON.stringify({
        status: response.status(),
        statusText: response.statusText(),
        headers: response.headers(),
        body: json
      }, null, 2));

      // Fulfill using the modified JSON object
      await route.fulfill({
        status: response.status(),
        headers: response.headers(),
        contentType: response.headers()['content-type'],
        body: JSON.stringify(json)
      });
    });

    //Click on Reload Action on Alpha Table
    await page.getByLabel('Alpha Table Frame Controls').getByLabel('View menu items').click();
    await page.getByLabel('Reload').click();
    
    await Promise.all([battery1tempResponse, batchGetResponse]);

    await page.waitForLoadState('networkidle');
    expect(allNetworkRequests.length).toBe(2);

    const afterReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');
    const afterReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');

    //After reload, the telemetry value should be different for Alpha Table
    expect(beforeReloadAlphaTelemetryValue).not.toEqual(afterReloadAlphaTelemetryValue);

    // expect(beforeReloadBetaTelemetryValue).toEqual(afterReloadBetaTelemetryValue);

    await page.waitForLoadState('networkidle');
    allNetworkRequests = [];

    battery1tempResponse = page.waitForResponse('**/api/archive/myproject/parameters/myproject/Battery1_Temp**')
    battery1voltageResponse = page.waitForResponse('**/api/archive/myproject/parameters/myproject/Battery1_Voltage**')
    batchGetResponse = page.waitForResponse('**/api/processors/myproject/realtime/parameters:batchGet');

    await page.getByTitle('More actions').click();
    await page.getByRole('menuitem', { name: /Reload/ }).click();

    await Promise.all([battery1tempResponse, battery1voltageResponse, batchGetResponse]);
    await page.waitForLoadState('networkidle');
    console.log(JSON.stringify(allNetworkRequests));

    expect(allNetworkRequests.length).toBe(3);

    const fullReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');
    const fullReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('value table cell')
      .first()
      .getAttribute('title');

    expect(fullReloadAlphaTelemetryValue).not.toEqual(afterReloadAlphaTelemetryValue);
    expect(fullReloadBetaTelemetryValue).not.toEqual(afterReloadBetaTelemetryValue);
  });
  test.fixme('can reload notebook', async ({ page }) => {});
  test.fixme('can reload gauge', async ({ page }) => {});
});
