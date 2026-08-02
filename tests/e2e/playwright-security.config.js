// playwright.config.js for the ISOLATED, security-ENABLED YAMCS instance.
//
// Two proxy-authenticated dev servers run against the SAME secured YAMCS
// instance (http 8160, yamcs-unit-security), each authenticating as a different
// real, named user (via .webpack/webpack.secure.mjs's SECURE_YAMCS_USER env
// var):
//   - flight (role Flight, scoped WriteParameter) on webpack 9070 -> the
//     POSITIVE path, securityRoles.e2e.spec.mjs. Proves the gates ALLOW a
//     privileged user.
//   - observer (role Observer, read-only, NO Flight, NO WriteParameter) on
//     webpack 9071 -> the DENIAL path, securityRolesDenied.e2e.spec.mjs. Proves
//     the same gates DENY an authenticated-but-unauthorized user (so the
//     positive assertions could not pass just because a gate went unconditional).
//
// Each project pins its own baseURL so its spec runs against the correctly
// credentialed proxy. Both webpack servers boot from the single `start:secure`
// script, selected purely by env.
// @ts-check
/* eslint-env node */
import path from 'path';

// Isolated, non-default webpack ports so these never collide with the default
// suite's dev server on 9000. Keep in sync with .webpack/webpack.secure.mjs and
// tests/setup-quickstart-secure.sh.
const flightPort = Number(process.env.WEBPACK_PORT) || 9070;
const observerPort = Number(process.env.OBSERVER_WEBPACK_PORT) || 9071;
const yamcsHttpPort = Number(process.env.YAMCS_HTTP_PORT) || 8160;

const flightOrigin = `http://localhost:${flightPort}`;
const observerOrigin = `http://localhost:${observerPort}`;

// Same per-test coverage sink as the default quickstart config.
const istanbulCLIOutput = path.join(__dirname, '../../.nyc_output');

function storageStateFor(origin) {
    return {
        cookies: [],
        origins: [
            {
                "origin": origin,
                "localStorage": [
                    {
                        "name": "exampleLayout",
                        "value": "false"
                    }
                ]
            }
        ]
    };
}

/** @type {import('@playwright/test').PlaywrightTestConfig<{ failOnConsoleError: boolean, myItemsFolderName: string, coveragePath: string }>} */
const config = {
    retries: 1,
    testDir: '.',
    testMatch: /.*\.e2e\.spec\.(mjs|js)$/,
    // Security-gated flows (websocket auth, tree load through the authed proxy)
    // can take a beat longer to settle than the default suite; give them room.
    timeout: 60 * 1000,
    use: {
        headless: false,
        video: 'off',
        screenshot: 'on',
        trace: 'on',
        ignoreHTTPSErrors: true,
        myItemsFolderName: "My Items",
        failOnConsoleError: false,
        coveragePath: istanbulCLIOutput
    },
    // Both proxies target the SAME secured YAMCS instance; only the injected
    // Basic-auth user differs (flight vs observer), selected by SECURE_YAMCS_USER.
    webServer: [
        {
            cwd: '../',
            command: 'npm run start:secure',
            url: `${flightOrigin}/#`,
            timeout: 120 * 1000,
            reuseExistingServer: false,
            env: {
                WEBPACK_PORT: String(flightPort),
                YAMCS_HTTP_PORT: String(yamcsHttpPort),
                SECURE_YAMCS_USER: process.env.SECURE_YAMCS_USER || 'flight',
                SECURE_YAMCS_PASSWORD: process.env.SECURE_YAMCS_PASSWORD || 'flightpassword'
            }
        },
        {
            cwd: '../',
            command: 'npm run start:secure',
            url: `${observerOrigin}/#`,
            timeout: 120 * 1000,
            reuseExistingServer: false,
            env: {
                WEBPACK_PORT: String(observerPort),
                YAMCS_HTTP_PORT: String(yamcsHttpPort),
                SECURE_YAMCS_USER: process.env.SECURE_YAMCS_OBSERVER_USER || 'observer',
                SECURE_YAMCS_PASSWORD: process.env.SECURE_YAMCS_OBSERVER_PASSWORD || 'observerpassword'
            }
        }
    ],
    workers: 1,
    projects: [
        // Positive (flight) path -- runs securityRoles.e2e.spec.mjs against the
        // flight-credentialed proxy. The `\.e2e` anchor keeps this from also
        // matching securityRolesDenied.e2e.spec.mjs.
        {
            name: "chromium",
            testMatch: /securityRoles\.e2e\.spec\.mjs$/,
            use: {
                browserName: 'chromium',
                headless: true,
                trace: 'on-first-retry',
                video: 'off',
                screenshot: 'only-on-failure',
                baseURL: `${flightOrigin}/#`,
                storageState: storageStateFor(flightOrigin)
            }
        },
        // Denial (observer) path -- runs securityRolesDenied.e2e.spec.mjs against
        // the observer-credentialed proxy.
        {
            name: "chromium-observer",
            testMatch: /securityRolesDenied\.e2e\.spec\.mjs$/,
            use: {
                browserName: 'chromium',
                headless: true,
                trace: 'on-first-retry',
                video: 'off',
                screenshot: 'only-on-failure',
                baseURL: `${observerOrigin}/#`,
                storageState: storageStateFor(observerOrigin)
            }
        },
        // -- Local Browsers (positive path, headed, for local dev) --
        {
            name: "local-chrome",
            testMatch: /securityRoles\.e2e\.spec\.mjs$/,
            use: {
                browserName: 'chromium',
                channel: 'chrome',
                baseURL: `${flightOrigin}/#`,
                storageState: storageStateFor(flightOrigin)
            }
        }
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'never',
            outputFolder: '../html-test-results'
        }],
        ['junit', { outputFile: 'test-results/results.xml' }]]
};

export default config;
