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
 *
 * UPDATE: two more pieces of this ARE e2e-testable after all, and are
 * covered further down in this file:
 *
 *  - Operator-status set/get for a role (`setStatusForRole`,
 *    `getStatusForRole`, `getRolesInStatus`) turns out NOT to depend on the
 *    current (guest) user's own roles at all. `openmct.user.status`'s
 *    `setStatusForRole`/`canProvideStatusForRole` key off
 *    `openmct.user.getActiveRole()` -- which is just sessionStorage, settable
 *    directly via `openmct.user.setActiveRole(role)` -- and our own
 *    `UserProvider#canProvideStatusForRole` (src/providers/user/user-provider.js)
 *    only checks that the role is one of the MDB-registered status roles
 *    (`OperatorStatusTelemetry#getAllStatusRoles`), not anything about the
 *    logged-in user. So the real on-duty/off-duty round trip through YAMCS is
 *    exercisable without any authentication or role faking whatsoever -- see
 *    the "Operator status set/get via active role" describe block below.
 *  - The privilege/role GATES themselves --
 *    `canSetMissionStatus`/`canSetPollQuestion` (WriteParameter-privilege
 *    based) and `hasRole`/`getPossibleRoles` (roles-based) -- are pure
 *    functions of the JSON `src/providers/user/user-provider.js`'s
 *    `#getUserInfo` fetches from `yamcsUserEndpoint`
 *    (`GET .../api/user/`), via `src/providers/user/createYamcsUser.js`.
 *    Nothing about that fetch is YAMCS-security-specific -- it's just an
 *    HTTP response our own code parses -- so it's fakeable with Playwright's
 *    `page.route`, the same technique Open MCT itself uses upstream to test
 *    its own `OperatorStatus` plugin against synthetic roles
 *    (`e2e/helper/addInitExampleUserMultipleRoles.js` in nasa/openmct, via a
 *    fully client-side fake user provider). Faking the raw REST response
 *    here is a better fit for openmct-yamcs specifically because it drives
 *    our *actual* provider code end-to-end through the real UI, rather than
 *    swapping in a generic fake provider that would bypass it entirely. See
 *    the "Role-gated authorization checks via a faked user" describe block
 *    below.
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
    // The alias-parsing/classification branch in object-provider.js:
    // parameters carrying the `OpenMCT:type=yamcs.operatorStatus` alias must
    // be recognized as operator-status telemetry (via
    // `isOperatorStatusParameter`/`getRoleFromParameter` in
    // `src/providers/user/operator-status-parameter.js`) rather than falling
    // through to generic numeric/enumerated telemetry. That is what this
    // test covers. The actual set/get round trip for a role, and the
    // privilege gates that guard it, are covered by the two describe blocks
    // further down in this file.
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

test.describe("Operator status set/get via active role @yamcs", () => {
    // openmct.user.status's setStatusForRole/canProvideStatusForRole gate on
    // openmct.user.getActiveRole() (sessionStorage, settable directly via
    // openmct.user.setActiveRole) and on whether the role is one of the
    // MDB-registered status roles (OperatorStatusTelemetry#getAllStatusRoles,
    // populated from the overlay MDB's FlightOperatorStatus/
    // ScienceOperatorStatus OpenMCT:role aliases) -- neither check depends on
    // the current (guest) user's own fetched roles. So this exercises the
    // real on-duty/off-duty round trip through YAMCS with no authentication
    // or user-info faking at all, unlike the describe block below.
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
        // The "set" test below mutates the real FlightOperatorStatus
        // parameter, shared/persistent state. Reset it back to OFF DUTY and
        // clear the active role so a later spec doesn't observe leftover state.
        await page.evaluate(async () => {
            const possibleStatuses = await window.openmct.user.status.getPossibleStatuses();
            const offDuty = possibleStatuses.find((status) => status.label === 'OFF DUTY');
            if (offDuty) {
                await window.openmct.user.status.setStatusForRole(offDuty);
            }

            window.openmct.user.setActiveRole(null);
        });
    });

    test('Operator status can be set and read back for an active role', async ({ page }) => {
        await page.evaluate(() => window.openmct.user.setActiveRole('Flight'));

        const activeRole = await page.evaluate(() => window.openmct.user.getActiveRole());
        expect(activeRole).toBe('Flight');

        // canProvideStatusForCurrentUser checks the active role against the
        // MDB-registered status roles -- confirms `Flight` (from the overlay
        // MDB) is recognized, independent of any user-privilege data.
        const canProvideStatus = await page.evaluate(
            () => window.openmct.user.status.canProvideStatusForCurrentUser()
        );
        expect(canProvideStatus).toBe(true);

        const possibleStatuses = await page.evaluate(
            () => window.openmct.user.status.getPossibleStatuses()
        );
        const onDuty = possibleStatuses.find((status) => status.label === 'ON DUTY');
        expect(onDuty).toBeDefined();

        // Real PUT against YAMCS via OperatorStatusTelemetry#setStatusForRole.
        const setResult = await page.evaluate(
            (status) => window.openmct.user.status.setStatusForRole(status),
            onDuty
        );
        expect(setResult).toBe(true);

        // Real read-back via OperatorStatusTelemetry#getTelemetryObjectForRole
        // + LatestTelemetryProvider#requestLatest. The realtime websocket
        // subscription populating the LAD cache can lag the REST PUT by a
        // beat, so poll rather than asserting immediately.
        await expect.poll(async () => {
            const status = await page.evaluate(
                (role) => window.openmct.user.status.getStatusForRole(role),
                'Flight'
            );

            return status?.label;
        }).toBe('ON DUTY');

        // UserProvider#getRolesInStatus (src/providers/user/user-provider.js)
        // has no equivalent in Open MCT's public StatusAPI/UserAPI, so it's
        // reached via the provider instance directly rather than
        // `window.openmct.user.status.*` -- still real src/ code exercised
        // end-to-end (real telemetry objects, real LAD reads), just a
        // different entry point since openmct core never calls this method.
        const rolesInStatus = await page.evaluate(
            (statusKey) => window.openmct.user.getProvider().getRolesInStatus(statusKey),
            onDuty.key
        );
        expect(rolesInStatus).toContain('Flight');
    });
});

test.describe("Role-gated authorization checks via a faked user @yamcs", () => {
    // canSetMissionStatus/canSetPollQuestion (WriteParameter-privilege based)
    // and hasRole/getPossibleRoles (roles based) are pure functions of the
    // JSON `src/providers/user/user-provider.js`'s `#getUserInfo` fetches
    // from `yamcsUserEndpoint` (GET .../api/user/), via
    // `src/providers/user/createYamcsUser.js`. That fetch is a plain HTTP
    // call our own code parses -- nothing YAMCS-security-specific about it --
    // so it's fakeable with Playwright's `page.route`, exercising these gates
    // for real without needing YAMCS auth enabled (which PR #533 found breaks
    // ReadParameter access for every other spec if done naively).
    //
    // #getUserInfo caches its result for the lifetime of the page's JS
    // context, so the route must be registered BEFORE the navigation that
    // triggers the first fetch -- each test below sets up its route, then
    // navigates, rather than relying on a shared beforeEach.
    const POLL_QUESTION_PARAMETER = '/OpenMCTTest/PollQuestion';
    const MISSION_STATUS_PARAMETER = '/OpenMCTTest/DrivingStatus';

    function fakeUserInfo({ roles = [], writeParameters = [] } = {}) {
        return {
            name: 'guest',
            active: true,
            superuser: true,
            roles: roles.map((name) => ({ name })),
            objectPrivileges: writeParameters.length > 0
                ? [{ type: 'WriteParameter', objects: writeParameters }]
                : []
        };
    }

    test('Default (unfaked) guest user has no privileges or roles', async ({ page }) => {
        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        const [canSetMissionStatus, canSetPollQuestion, hasFlightRole, possibleRoles] = await page.evaluate(
            () => Promise.all([
                window.openmct.user.status.canSetMissionStatus(),
                window.openmct.user.status.canSetPollQuestion(),
                window.openmct.user.hasRole('Flight'),
                window.openmct.user.getPossibleRoles()
            ])
        );

        expect(canSetMissionStatus).toBe(false);
        expect(canSetPollQuestion).toBe(false);
        expect(hasFlightRole).toBe(false);
        expect(possibleRoles).toEqual([]);
    });

    test('A user with a WriteParameter privilege on the poll question can set it via the real gated API', async ({ page }) => {
        await page.route('**/yamcs-proxy/api/user/**', (route) => route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(fakeUserInfo({
                roles: ['Flight'],
                writeParameters: [POLL_QUESTION_PARAMETER]
            }))
        }));

        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        const [canSetPollQuestion, hasFlightRole, possibleRoles] = await page.evaluate(
            () => Promise.all([
                window.openmct.user.status.canSetPollQuestion(),
                window.openmct.user.hasRole('Flight'),
                window.openmct.user.getPossibleRoles()
            ])
        );
        expect(canSetPollQuestion).toBe(true);
        expect(hasFlightRole).toBe(true);
        expect(possibleRoles).toContain('Flight');

        // Unlike the "Poll question can be set" test above (which has to
        // fall back to a raw REST PUT because the guest user is gated off),
        // this user's fake WriteParameter privilege makes the real,
        // fully-gated `openmct.user.status.setPollQuestion` succeed --
        // exercising StatusAPI's `canSetPollQuestion` check,
        // `UserProvider#setPollQuestion`, and
        // `PollQuestionTelemetry#setPollQuestion` end-to-end.
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
        }).toBe(uniquePollQuestion);

        // Clean up: this test mutates the real, shared PollQuestion parameter.
        await page.evaluate(() => fetch('/yamcs-proxy/api/processors/myproject/realtime/parameters/OpenMCTTest/PollQuestion', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'STRING', stringValue: '' })
        }).catch(() => {}));
    });

    test('A user with a WriteParameter privilege on a mission-status action can set mission status', async ({ page }) => {
        await page.route('**/yamcs-proxy/api/user/**', (route) => route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(fakeUserInfo({
                writeParameters: [MISSION_STATUS_PARAMETER]
            }))
        }));

        await page.goto('./');
        await expect(page.locator('.c-tree__item').filter({ hasText: 'myproject' })).toBeVisible();

        // Confirms the two gates discriminate by parameter, not just "any
        // WriteParameter privilege unlocks everything": this user's
        // objectPrivileges grant write on a mission-status parameter only,
        // so canSetPollQuestion (checked against pollQuestionParameter's
        // qualifiedName, not the mission-status one) must stay false.
        const [canSetMissionStatus, canSetPollQuestion] = await page.evaluate(
            () => Promise.all([
                window.openmct.user.status.canSetMissionStatus(),
                window.openmct.user.status.canSetPollQuestion()
            ])
        );
        expect(canSetPollQuestion).toBe(false);
        expect(canSetMissionStatus).toBe(true);
    });
});
