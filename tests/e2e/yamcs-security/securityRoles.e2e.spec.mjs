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
 * Role-gated authorization checks against a REAL security-enabled YAMCS
 * ====================================================================
 *
 * This is the real-security counterpart to the "Role-gated authorization
 * checks via a faked user" describe block in
 * tests/e2e/yamcs/operatorStatusPollQuestion.e2e.spec.mjs. That block fakes
 * the `GET /api/user/` response with Playwright's `page.route` (because the
 * default QuickStart instance runs with security DISABLED, so every request is
 * an anonymous "guest" user carrying no roles/privileges). This spec instead
 * drives the adapter's role-gating against a genuinely security-ENABLED YAMCS
 * with a real, named, role-bearing user -- closing the #132/#135 integration-
 * boundary gap: does the adapter read REAL YAMCS roles/privileges JSON
 * correctly, end-to-end, and light up the same gates the faked test exercises?
 *
 * How auth works here (the adapter is UNMODIFIED):
 *   - The isolated instance (tests/setup-quickstart-secure.sh) enables security
 *     and provisions a real user `flight` with YAMCS role `Flight` and scoped
 *     WriteParameter privileges. Enabling security deactivates the anonymous
 *     guest, so every request must be authenticated.
 *   - The adapter itself sends NO credentials (Open MCT core's
 *     BatchingWebSocket.connect(url) takes only a URL -- no header hook), and we
 *     do NOT change that. Instead the DEV PROXY (.webpack/webpack.secure.mjs)
 *     injects an `Authorization: Basic ...` header on BOTH the HTTP requests and
 *     the websocket upgrade, so the browser/adapter stay credential-less and
 *     unchanged while YAMCS sees an authenticated, role-bearing user. This is
 *     the maintainer's own recommendation on issue #385: do auth at the proxy,
 *     not in the plugin.
 *
 * What this adds over the faked block: the faked user is a hand-authored JSON
 * blob, so it can only ever prove our parsing matches what we typed. Here the
 * roles/privileges JSON is produced by a real YAMCS 5.9.x security subsystem
 * from real security.yaml/users.yaml/roles.yaml, and the gates are evaluated on
 * THAT. In particular it exercises how the adapter matches the real privilege
 * patterns YAMCS emits (e.g. a regex-style `/OpenMCTTest/.*` WriteParameter),
 * which the faked block -- using only exact parameter names -- does not.
 *
 * Runs only via `npm run test:e2e:security` (separate webpack + playwright
 * configs, separate `tests/e2e/yamcs-security/` dir), so it is never swept into
 * the default `test:e2e:quickstart` path.
 */

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

/**
 * Resolve once Open MCT has a user provider AND the (proxy-authenticated)
 * `GET /api/user/` fetch behind getCurrentUser() has resolved.
 */
async function waitForAuthenticatedUser(page) {
    await page.evaluate(async () => {
        const start = Date.now();
        while (!(window.openmct?.user?.hasProvider?.())) {
            if (Date.now() - start > 20000) {
                throw new Error('Open MCT user provider never became available');
            }

            await new Promise((resolve) => setTimeout(resolve, 250));
        }

        await window.openmct.user.getCurrentUser();
    });
}

test.describe('Security roles via proxy-injected auth @yamcs @mutatesGlobalState', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        // Wait for the dictionary-derived object tree to finish loading before
        // interacting -- same rationale as the default operator-status spec.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
        await waitForAuthenticatedUser(page);
    });

    test.afterEach(async ({ page }) => {
        // The poll-question test mutates the real, shared PollQuestion parameter.
        // Clear it so a re-run / later test doesn't observe leftover state.
        await page.evaluate(() => fetch('/yamcs-proxy/api/processors/myproject/realtime/parameters/OpenMCTTest/PollQuestion', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'STRING',
                stringValue: ''
            })
        }).catch(() => {}));
    });

    test('The authenticated user carries the real Flight role from YAMCS', async ({ page }) => {
        // These are the same roles-based gates the faked block asserts, but the
        // JSON they read comes from real YAMCS security, fetched through the
        // auth-injecting proxy -- the adapter sent no credentials of its own.
        const { name, roles, hasFlight, possibleRoles, statusRole } = await page.evaluate(
            async () => {
                const openmct = window.openmct;
                const user = await openmct.user.getCurrentUser();

                return {
                    name: user.getName(),
                    roles: user.roles,
                    hasFlight: await openmct.user.hasRole('Flight'),
                    possibleRoles: await openmct.user.getPossibleRoles(),
                    // getStatusRoleForCurrentUser has no public StatusAPI/UserAPI
                    // entry point, so reach it via the provider directly (still
                    // real adapter code): it intersects the user's real YAMCS
                    // roles with the MDB-registered OpenMCT:role status roles.
                    statusRole: await openmct.user.getProvider().getStatusRoleForCurrentUser()
                };
            }
        );

        expect(name).toBe('flight');
        expect(roles).toContain('Flight');
        expect(hasFlight).toBe(true);
        expect(possibleRoles).toContain('Flight');
        expect(statusRole).toBe('Flight');
    });

    test('Real WriteParameter privileges unlock the mission-status and poll-question gates', async ({ page }) => {
        // canSetMissionStatus / canSetPollQuestion are the WriteParameter-
        // privilege-based gates. Against real YAMCS the privilege objects are
        // the regex-style patterns from roles.yaml (e.g. `/OpenMCTTest/.*` plus
        // the specific `/OpenMCTTest/PollQuestion`), NOT a hand-picked exact
        // name -- so this confirms the adapter reads and matches genuine YAMCS
        // privilege patterns, not just JSON we authored ourselves.
        const { writeParameters, canSetMissionStatus, canSetPollQuestion } = await page.evaluate(
            async () => {
                const openmct = window.openmct;
                const user = await openmct.user.getCurrentUser();

                return {
                    writeParameters: user.getWriteParameters(),
                    canSetMissionStatus: await openmct.user.status.canSetMissionStatus(),
                    canSetPollQuestion: await openmct.user.status.canSetPollQuestion()
                };
            }
        );

        expect(writeParameters.length).toBeGreaterThan(0);
        expect(canSetMissionStatus).toBe(true);
        expect(canSetPollQuestion).toBe(true);
    });

    test('The "Manage Status Poll" indicator renders (it does not on the default guest instance)', async ({ page }) => {
        // Open MCT core's OperatorStatus plugin only installs the poll-question
        // indicator when `canSetPollQuestion()` resolves true (see its
        // plugin.js). On the default security-disabled instance the guest user
        // fails that gate and the control never renders; here the real Flight
        // user's WriteParameter privilege makes it appear.
        //
        // SimpleIndicator#iconClass adds the icon class to the SAME root element
        // that PollQuestionIndicator tags with `c-indicator--operator-status`
        // (see node_modules/openmct SimpleIndicator.js), so this is a compound
        // (same-element) selector, not a descendant one. The indicator's title
        // ("Set the current poll question") comes from `.description(...)`.
        const pollIndicator = page.locator('.c-indicator--operator-status.icon-status-poll-edit');
        await expect(pollIndicator).toBeVisible({ timeout: 15000 });
        await expect(pollIndicator).toHaveAttribute('title', 'Set the current poll question');
    });

    test('Poll question can be set through Open MCT\'s real gated API and reads back', async ({ page }) => {
        // Unlike the default operator-status spec -- which must fall back to a
        // raw REST PUT because the guest user is gated off -- the real Flight
        // user's WriteParameter privilege makes Open MCT core's own
        // `setPollQuestion` succeed. StatusAPI.setPollQuestion re-checks
        // canSetPollQuestion itself before delegating, so this exercises that
        // gate, UserProvider#setPollQuestion, and
        // PollQuestionTelemetry#setPollQuestion end-to-end against real secured
        // YAMCS, then reads it back through the ungated getPollQuestion.
        const uniquePollQuestion = `Are the solar panels deployed? ${Date.now()}`;

        const setResult = await page.evaluate(
            (question) => window.openmct.user.status.setPollQuestion(question),
            uniquePollQuestion
        );
        expect(setResult).toBe(true);

        await expect.poll(async () => {
            const pollQuestion = await page.evaluate(
                () => window.openmct.user.status.getPollQuestion()
            );

            return pollQuestion?.question;
        }, { timeout: 15000 }).toBe(uniquePollQuestion);
    });
});
