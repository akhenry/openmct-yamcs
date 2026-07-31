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
 * Staleness Specific Tests
 *
 * IMPORTANT: CANNOT BE RUN IN PARALLEL, ENABLES & DISABLES LINKS
 *
 * The QuickStart MDB does not declare a container arrival rate (XTCE `RateInStream`), which is
 * what Yamcs uses to compute a parameter's expiration window. So Yamcs itself never marks a
 * parameter's acquisitionStatus as EXPIRED - disabling the udp-in link just stops new values
 * from arriving, it does not, on its own, produce an EXPIRED status.
 *
 * Instead, these tests disable the link (so no further real values can race the assertions
 * below) and then inject a synthetic websocket message carrying an acquisitionStatus directly,
 * the same message-injection technique already used by realtimeData.e2e.spec.mjs to test
 * batching. This exercises RealtimeProvider#convertMessageToDatumAndReportStaleness and the
 * STALENESS_STATUS_MAP mapping (src/const.js) deterministically, without depending on
 * Yamcs-side expiration timing that the test environment does not configure.
 */

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;
import { disableLink, enableLink } from './quickstartTools.mjs';

test.describe("Staleness tests @yamcs", () => {
    let websocketWorker;
    let yamcsURL;

    test.beforeEach(async ({ page }) => {
        page.on('worker', (worker) => {
            if (worker.url().startsWith('blob')) {
                websocketWorker = worker;
            }
        });

        // Load the app and wait for the dictionary-derived tree to be ready before navigating
        // straight to a parameter's own (table) view - navigating there directly before the MDB
        // has loaded resolves to a "Missing" object.
        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible({ timeout: 20000 });
        yamcsURL = new URL('/yamcs-proxy/', page.url()).toString();
    });

    test.afterEach(async () => {
        await enableLink(yamcsURL);
    });

    test('Shows a stale indicator when Yamcs reports a parameter as EXPIRED, and clears it once ACQUIRED again', async ({ page }) => {
        await page.goto(
            './#/browse/taxonomy:spacecraft/taxonomy:~myproject/taxonomy:~myproject~Battery1_Temp'
            + '?tc.mode=local&tc.startDelta=1800000&tc.endDelta=0&tc.timeSystem=utc&view=table',
            { waitUntil: 'domcontentloaded' }
        );

        const tableWrapper = page.locator('.c-table-wrapper');
        await expect(tableWrapper).toBeVisible();

        // Wait for at least one live row so we know a realtime subscription (and its
        // Yamcs `call` number, assigned once Yamcs acknowledges the subscription) is established.
        await expect(page.getByLabel('name table cell Battery1_Temp')).not.toHaveCount(0);

        // Live telemetry is flowing, so the object should not be reported as stale. This
        // exercises YamcsStalenessProvider#isStale returning a defined, non-stale response
        // from the LAD cache at mount.
        await expect(tableWrapper).not.toHaveClass(/is-stale/);

        const callNumber = await page.evaluate(async () => {
            const openmct = window.openmct;
            const objectIdentifier = { namespace: 'taxonomy', key: '~myproject~Battery1_Temp' };
            const telemetryObject = await openmct.objects.get(objectIdentifier);
            const yamcsRealtimeProvider = await openmct.telemetry.findSubscriptionProvider(telemetryObject);

            return yamcsRealtimeProvider.getSubscriptionByObjectIdentifier(objectIdentifier).call;
        });

        // Stop further real values from arriving so they can't race the synthetic messages below.
        await disableLink(yamcsURL);

        // Simulate Yamcs reporting the parameter's most recent value as EXPIRED, i.e. no new
        // value has arrived within the parameter's expiration window.
        await dispatchAcquisitionStatus(websocketWorker, callNumber, 'EXPIRED');
        await expect(tableWrapper).toHaveClass(/is-stale/);

        // Simulate a fresh value arriving, restoring ACQUIRED status.
        await dispatchAcquisitionStatus(websocketWorker, callNumber, 'ACQUIRED');
        await expect(tableWrapper).not.toHaveClass(/is-stale/);
    });
});

/**
 * Dispatches a synthetic websocket 'message' event carrying a single parameter value for the
 * given Yamcs subscription `call` number, with the given `acquisitionStatus`. Mirrors the
 * message-injection technique used in realtimeData.e2e.spec.mjs.
 * @param {import('@playwright/test').Worker} websocketWorker
 * @param {number} call
 * @param {'ACQUIRED'|'EXPIRED'} acquisitionStatus
 */
async function dispatchAcquisitionStatus(websocketWorker, call, acquisitionStatus) {
    await websocketWorker.evaluate(({ call: subscriptionCall, acquisitionStatus: status }) => {
        const message = {
            "type": "parameters",
            "call": subscriptionCall,
            "seq": 0,
            "data": {
                "@type": "/yamcs.protobuf.processing.SubscribeParametersData",
                "values": [
                    {
                        "rawValue": {
                            "type": "FLOAT",
                            "floatValue": 1
                        },
                        "engValue": {
                            "type": "FLOAT",
                            "floatValue": 1
                        },
                        "acquisitionTime": new Date().toISOString(),
                        "generationTime": new Date().toISOString(),
                        "acquisitionStatus": status,
                        "numericId": 1
                    }
                ]
            }
        };
        const event = new Event('message');
        event.data = JSON.stringify(message);
        self.currentWebSocket.dispatchEvent(event);
    }, { call, acquisitionStatus });
}
