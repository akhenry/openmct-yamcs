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
 * Role-gated authorization DENIAL against a REAL security-enabled YAMCS
 * ====================================================================
 *
 * This is the NEGATIVE counterpart to securityRoles.e2e.spec.mjs (the positive
 * / privileged path). Where that spec authenticates as the real `flight` user
 * (role Flight, scoped WriteParameter) and asserts every gate resolves TRUE,
 * this spec authenticates as a real, named, AUTHENTICATED-BUT-UNAUTHORIZED user
 * `observer` (role Observer -- read-only, NOT Flight, NO WriteParameter) and
 * asserts the mirror image: every gate resolves FALSE and a direct write is
 * rejected at the YAMCS boundary.
 *
 * Why this matters: the positive spec alone would still pass if the adapter's
 * authorization gates became UNCONDITIONAL (always-true). It only ever exercises
 * one user, one role, and expects `true` everywhere. This spec proves the gates
 * are genuinely conditional -- that the SAME adapter code, reading a REAL YAMCS
 * roles/privileges JSON for a user who lacks the role and the write privilege,
 * DENIES the operator-status / poll-question capabilities.
 *
 * How auth works here (identical mechanism to the positive spec, different
 * user): the adapter is UNMODIFIED and sends no credentials of its own. The DEV
 * PROXY (.webpack/webpack.secure.mjs) injects `Authorization: Basic ...` on both
 * HTTP and the websocket upgrade; which user it authenticates as is selected by
 * SECURE_YAMCS_USER. This spec's project (chromium-observer in
 * playwright-security.config.js) points at the observer-credentialed proxy
 * (webpack 9071) which authenticates as `observer` against the SAME single
 * secured YAMCS instance the flight proxy (9070) uses.
 *
 * The `beforeEach` (tree loads + user resolves read-only) is itself the
 * feasibility assertion that an authenticated read-only user with neither Flight
 * nor WriteParameter can fully load the app.
 *
 * Runs only via `npm run test:e2e:security` (project chromium-observer), so it
 * is never swept into the default `test:e2e:quickstart` path.
 */

import { pluginFixtures } from 'openmct-e2e';
const { test, expect } = pluginFixtures;

const POLL_QUESTION_PARAM_URL =
    '/yamcs-proxy/api/processors/myproject/realtime/parameters/OpenMCTTest/PollQuestion';

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

test.describe('Security roles denial via proxy-injected auth @yamcs @mutatesGlobalState', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        // Feasibility gate: the read-only observer user (no Flight, no
        // WriteParameter) must still fully load the dictionary-derived tree.
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
        await waitForAuthenticatedUser(page);
    });

    test('The authenticated user carries only the read-only Observer role, not Flight', async ({ page }) => {
        // Mirror image of the positive spec's Flight-role assertions: the real
        // YAMCS roles/privileges JSON is read by the SAME adapter code, but for a
        // user who lacks the Flight role -- so the role gates resolve negative.
        const { name, roles, hasFlight, possibleRoles, statusRole } = await page.evaluate(
            async () => {
                const openmct = window.openmct;
                const user = await openmct.user.getCurrentUser();

                return {
                    name: user.getName(),
                    roles: user.roles,
                    hasFlight: await openmct.user.hasRole('Flight'),
                    possibleRoles: await openmct.user.getPossibleRoles(),
                    // Same provider-level entry point the positive spec uses; here
                    // the user's real roles do NOT intersect the MDB-registered
                    // OpenMCT:role status roles, so it must resolve to nothing.
                    statusRole: await openmct.user.getProvider().getStatusRoleForCurrentUser()
                };
            }
        );

        expect(name).toBe('observer');
        expect(roles).toContain('Observer');
        expect(roles).not.toContain('Flight');
        expect(hasFlight).toBe(false);
        expect(possibleRoles).not.toContain('Flight');
        // getStatusRoleForCurrentUser returns the first intersecting status role,
        // or undefined when none intersect -- it must NOT return 'Flight'.
        expect(statusRole).not.toBe('Flight');
        expect(statusRole).toBeUndefined();
    });

    test('Missing WriteParameter privilege leaves the mission-status and poll-question gates closed', async ({ page }) => {
        // The negative of the positive spec's WriteParameter gate assertions:
        // observer has NO WriteParameter privilege, so getWriteParameters() is
        // empty and both gates evaluate false against real YAMCS security.
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

        expect(writeParameters.length).toBe(0);
        expect(canSetMissionStatus).toBe(false);
        expect(canSetPollQuestion).toBe(false);
    });

    test('The "Manage Status Poll" indicator does NOT render for the unprivileged user', async ({ page }) => {
        // Open MCT core's OperatorStatus plugin installs the poll-question
        // indicator only when canSetPollQuestion() resolves true (see its
        // plugin.js). On the positive (flight) path it renders; here the observer
        // fails that gate so the control must be absent. Assert it never appears
        // (give the same window the positive spec waits for it to appear in).
        const pollIndicator = page.locator('.c-indicator--operator-status.icon-status-poll-edit');
        // First let the app fully settle so this is a genuine "never rendered"
        // rather than a "not yet rendered" -- the mission-status indicator that
        // the OperatorStatus plugin always installs is a reliable settle signal.
        await expect(pollIndicator).toHaveCount(0);
        await page.waitForTimeout(3000);
        await expect(pollIndicator).toHaveCount(0);
    });

    test('A direct poll-question write is rejected (403) at the YAMCS boundary', async ({ page }) => {
        // Belt-and-suspenders: prove denial at the SERVER too, not just the
        // adapter gate. This PUT goes through the observer-credentialed proxy
        // (which injects observer's Basic auth), so YAMCS itself must reject it
        // with 403 Forbidden because observer lacks WriteParameter on this
        // parameter. (On the positive path the same PUT succeeds -- see the
        // flight spec's afterEach, which uses it to clear the parameter.)
        const status = await page.evaluate(async (url) => {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'STRING',
                    stringValue: 'observer should not be able to set this'
                })
            });

            return response.status;
        }, POLL_QUESTION_PARAM_URL);

        expect(status).toBe(403);
    });
});
