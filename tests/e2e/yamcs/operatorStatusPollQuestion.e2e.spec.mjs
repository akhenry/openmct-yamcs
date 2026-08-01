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
 * Poll Question / Operator Status Specific Tests
 *
 * Background: YAMCS QuickStart runs with security disabled, so every
 * request is served by an anonymous "guest" user. That user's `/api/user`
 * response carries no `roles` and no `objectPrivileges` at all:
 *
 *   { "superuser": true, "active": true, "name": "guest", ... }
 *
 * `src/providers/user/createYamcsUser.js` defaults `roles` to `[]` when
 * absent, and `getWriteParameters()` returns `[]` whenever
 * `objectPrivileges` is undefined. That means BOTH of the gates in
 * `src/providers/user/user-provider.js` -- `getStatusRoleForCurrentUser`
 * (role-based, used by operator status) and `canSetPollQuestion` /
 * `canSetMissionStatus` (WriteParameter-privilege-based, used by poll
 * question and mission status) -- are unconditionally false for this guest
 * user. This is a hard YAMCS limitation (there is no roles/privileges
 * mechanism for the anonymous user when security is disabled), not a gap in
 * openmct-yamcs, and it isn't something this test environment can work
 * around.
 *
 * Practical fallout for this spec:
 *  - `openmct.plugins.OperatorStatus`'s built-in "Manage Status Poll"
 *    indicator/button is only installed when
 *    `openmct.user.status.canSetPollQuestion()` resolves `true`
 *    (see node_modules/openmct's operatorStatus `plugin.js`). Since that is
 *    always `false` here, the button never renders, so there is no UI
 *    control to click to set the poll question in this environment.
 *  - `openmct.user.status.setPollQuestion(...)` is ALSO gated: openmct core's
 *    `StatusAPI.setPollQuestion` (node_modules/openmct's
 *    `src/api/user/StatusAPI.js`) calls `canSetPollQuestion()` itself and
 *    refuses to invoke our provider's `setPollQuestion` at all if it
 *    resolves `false` -- it throws "User provider does not support setting
 *    polling question" instead. So, unlike what an initial reading of
 *    `src/providers/user/user-provider.js` suggests, there is NO ungated
 *    path to `UserProvider.setPollQuestion` through openmct's public API in
 *    this environment.
 *  - What IS ungated is `getPollQuestion()` (`StatusAPI.getPollQuestion`
 *    only checks that the provider implements the method, not
 *    `canSetPollQuestion`) and, independently, a raw PUT against YAMCS's
 *    REST API -- which is exactly what
 *    `PollQuestionTelemetry.setPollQuestion` does under the hood (see
 *    `src/providers/user/poll-question-telemetry.js`'s `#buildUrl`/`fetch`).
 *    So this spec sets the poll question with the same raw REST call
 *    openmct-yamcs itself would issue, then reads it back through the real,
 *    ungated `openmct.user.status.getPollQuestion()` -- exercising
 *    `UserProvider.getPollQuestion` and
 *    `PollQuestionTelemetry.toPollQuestionObjectFromTelemetry` end-to-end.
 *  - Operator-status role-gated set/get (`setStatusForRole`,
 *    `getStatusForRole`, the "on duty"/"off duty" UI) is NOT e2e-testable
 *    here for the same root-cause reason and is intentionally out of scope
 *    for this spec -- see the classification-only test at the bottom.
 */

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

test.describe("Poll Question @yamcs", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        // Wait for the dictionary-derived object tree to finish loading
        // before interacting with search; on a cold webServer start the
        // MDB fetch/parse can still be in progress right after `goto`
        // resolves, which otherwise makes the very first search flaky.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
        // The "set" test below mutates the real PollQuestion parameter in
        // YAMCS, which is shared, persistent state (not reset between
        // tests/specs). Clear it back out so a later spec in the same run
        // doesn't observe this test's leftover value.
        await page.evaluate(() => {
            return fetch('/yamcs-proxy/api/processors/myproject/realtime/parameters/OpenMCTTest/PollQuestion', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'STRING',
                    stringValue: ''
                })
            }).catch(() => {});
        });
    });

    test('Poll question parameter is discoverable and correctly classified', async ({ page }) => {
        // The overlay MDB's `PollQuestion` parameter carries the
        // `OpenMCT:type=yamcs.pollQuestion` alias, which object-provider.js's
        // `#getParameterType` turns directly into the Open MCT object type.
        // Open MCT's search result rows are labelled `${name} ${type} result`
        // (see ObjectSearchResult.vue), so asserting on that aria-label
        // confirms the parameter was classified as poll-question telemetry
        // and not generic numeric/string telemetry.
        const searchInput = page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]');
        await searchInput.click();
        await searchInput.fill('PollQuestion');

        await expect(page.getByLabel('PollQuestion yamcs.pollQuestion result')).toBeVisible({ timeout: 15000 });
    });

    test('Poll question can be set and persists across reload', async ({ page }) => {
        const uniquePollQuestion = `Are the solar panels deployed? ${Date.now()}`;

        // Confirm (and document in the test run, not just in comments) that
        // the guest user cannot use openmct's own "set poll question" API,
        // per the background above -- this also confirms
        // `openmct.user.status.setPollQuestion` would throw, not silently
        // no-op, if called here.
        const canSetPollQuestion = await page.evaluate(
            () => window.openmct.user.status.canSetPollQuestion()
        );
        expect(canSetPollQuestion).toBe(false);

        // Set the poll question with the same raw YAMCS REST PUT that
        // `PollQuestionTelemetry.setPollQuestion` issues (see
        // `src/providers/user/poll-question-telemetry.js`), since openmct's
        // own `setPollQuestion` API is gated off for this user (see above).
        const setResponseOk = await page.evaluate(async (question) => {
            const response = await fetch('/yamcs-proxy/api/processors/myproject/realtime/parameters/OpenMCTTest/PollQuestion', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'STRING',
                    stringValue: question
                })
            });

            return response.ok;
        }, uniquePollQuestion);
        expect(setResponseOk).toBe(true);

        // Read it back through the real, ungated provider API -- this
        // exercises `UserProvider.getPollQuestion` and
        // `PollQuestionTelemetry.toPollQuestionObjectFromTelemetry`
        // end-to-end. `LatestTelemetryProvider`'s cache is populated by the
        // realtime websocket subscription, which can lag the REST PUT
        // response by a beat, so poll rather than asserting immediately.
        await expect.poll(async () => {
            const pollQuestionAfterSet = await page.evaluate(
                () => window.openmct.user.status.getPollQuestion()
            );

            return pollQuestionAfterSet?.question;
        }).toBe(uniquePollQuestion);

        // Confirm the value round-trips through YAMCS (not just cached
        // client-side) by reloading and reading it back through the same
        // provider API, which re-fetches from the realtime processor.
        await page.reload();

        await expect.poll(async () => {
            const pollQuestionAfterReload = await page.evaluate(
                () => window.openmct.user.status.getPollQuestion()
            );

            return pollQuestionAfterReload?.question;
        }).toBe(uniquePollQuestion);
    });
});

test.describe("Operator Status classification @yamcs", () => {
    // Role-gated operator-status reads/writes (setStatusForRole,
    // getStatusForRole, and the "on duty" / "off duty" UI) are NOT
    // e2e-testable in this environment and are intentionally out of scope
    // here: YAMCS QuickStart's anonymous/guest user (security disabled) has
    // no roles mechanism at all, so `getStatusRoleForCurrentUser` in
    // `src/providers/user/user-provider.js` can never resolve a role for the
    // current user. This was confirmed by tracing YAMCS's
    // `SecurityStore.java` in the prerequisite unit that added the overlay
    // MDB used by this spec; it is a hard YAMCS limitation, not a gap in
    // openmct-yamcs, and is expected residue for a later unit-test pass.
    //
    // What IS real, exercisable src/ code without needing roles is the
    // alias-parsing/classification branch in object-provider.js: parameters
    // carrying the `OpenMCT:type=yamcs.operatorStatus` alias must be
    // recognized as operator-status telemetry (via
    // `isOperatorStatusParameter`/`getRoleFromParameter` in
    // `src/providers/user/operator-status-parameter.js`) rather than falling
    // through to generic numeric/enumerated telemetry. That is what this
    // test covers.
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        // See the note in the "Poll Question @yamcs" describe block above:
        // wait for the object tree to finish loading before searching.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
    });

    test('Operator status parameters are classified as operator-status telemetry', async ({ page }) => {
        const searchInput = page.locator('[aria-label="OpenMCT Search"] [aria-label="Search Input"]');
        await searchInput.click();
        await searchInput.fill('FlightOperatorStatus');
        await expect(page.getByLabel('FlightOperatorStatus yamcs.operatorStatus result')).toBeVisible({ timeout: 15000 });

        await searchInput.fill('ScienceOperatorStatus');
        await expect(page.getByLabel('ScienceOperatorStatus yamcs.operatorStatus result')).toBeVisible({ timeout: 15000 });
    });
});
