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

import { test, expect, filterNonFetchRequests } from '../quickstartFixtures.js';
import { createDomainObjectWithDefaults, expandEntireTree, setFixedTimeMode } from '../opensource/appActions.js';

test.describe('Reload action', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./', { waitUntil: 'domcontentloaded' });

    const displayLayout = await createDomainObjectWithDefaults(page, {
      type: 'Display Layout'
    });

    const alphaTable = await createDomainObjectWithDefaults(page, {
      type: 'Telemetry Table',
      name: 'Alpha Table'
    });

    await page.getByLabel('Expand myproject folder').click();
    await page.getByLabel('Expand myproject folder').click();
    await page.locator('.c-table__body-w').click();
    await page.getByLabel('Edit Object').click();
    await page.getByRole('treeitem', { name: 'Battery1_Temp' }).dragTo(page.locator('.c-table__body-w'));

            // Save (exit edit mode)
            await page.getByRole('button', { name: 'Save' }).click();
            await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    const betaTable = await createDomainObjectWithDefaults(page, {
        type: 'Telemetry Table',
        name: 'Beta Table'
      });

      await page.locator('.c-table__body-w').click();
      await page.getByLabel('Edit Object').click();
      await page.getByRole('treeitem', { name: 'Battery1_Voltage' }).dragTo(page.locator('.c-table__body-w'));

              // Save (exit edit mode)
              await page.getByRole('button', { name: 'Save' }).click();
              await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();

    await page.goto(displayLayout.url);



    await page.getByLabel('Edit Object', { exact: true }).click();

    await page.dragAndDrop(`text='Alpha Table'`, '.l-layout__grid-holder', {
      targetPosition: { x: 0, y: 0 }
    });

    await page.dragAndDrop(`text='Beta Table'`, '.l-layout__grid-holder', {
      targetPosition: { x: 0, y: 250 }
    });

    await page.locator('button[title="Save"]').click();
    await page.getByRole('listitem', { name: 'Save and Finish Editing' }).click();
  });

  test.only('can reload display layout and its children', async ({ page }) => {
    const beforeReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');
    const beforeReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');
    // reload alpha
    await page.getByTitle('View menu items').first().click();
    await page.getByRole('menuitem', { name: /Reload/ }).click();

    const afterReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');
    const afterReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');

    expect(beforeReloadAlphaTelemetryValue).not.toEqual(afterReloadAlphaTelemetryValue);
    expect(beforeReloadBetaTelemetryValue).toEqual(afterReloadBetaTelemetryValue);

    // now reload parent
    await page.getByTitle('More actions').click();
    await page.getByRole('menuitem', { name: /Reload/ }).click();

    const fullReloadAlphaTelemetryValue = await page
      .getByLabel('Alpha Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');
    const fullReloadBetaTelemetryValue = await page
      .getByLabel('Beta Table table content')
      .getByLabel('wavelengths table cell')
      .first()
      .getAttribute('title');

    expect(fullReloadAlphaTelemetryValue).not.toEqual(afterReloadAlphaTelemetryValue);
    expect(fullReloadBetaTelemetryValue).not.toEqual(afterReloadBetaTelemetryValue);
  });
});