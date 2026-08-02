// playwright.config.js for the ISOLATED, security-ENABLED YAMCS instance.
// @ts-check
import path from 'path';

// Isolated, non-default webpack port so this never collides with the default
// suite's dev server on 9000. Keep in sync with .webpack/webpack.secure.mjs and
// tests/setup-quickstart-secure.sh.
const webpackPort = Number(process.env.WEBPACK_PORT) || 9070;
const baseOrigin = `http://localhost:${webpackPort}`;

// Same per-test coverage sink as the default quickstart config.
const istanbulCLIOutput = path.join(__dirname, '../../.nyc_output');

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
        baseURL: `${baseOrigin}/#`,
        ignoreHTTPSErrors: true,
        myItemsFolderName: "My Items",
        failOnConsoleError: false,
        coveragePath: istanbulCLIOutput,
        storageState: {
            cookies: [],
            origins: [
                {
                    "origin": baseOrigin,
                    "localStorage": [
                        {
                            "name": "exampleLayout",
                            "value": "false"
                        }
                    ]
                }
            ]
        }
    },
    webServer: {
        cwd: '../',
        // Starts webpack against the auth-injecting proxy (webpack.secure.mjs).
        // The isolated ports/credentials are inherited from the environment set
        // by the `test:e2e:security` npm script (falling back to the same
        // defaults baked into webpack.secure.mjs).
        command: 'npm run start:secure',
        url: `${baseOrigin}/#`,
        timeout: 120 * 1000,
        reuseExistingServer: false
    },
    workers: 1,
    projects: [
        {
            name: "chromium",
            use: {
                browserName: 'chromium',
                headless: true,
                trace: 'on-first-retry',
                video: 'off',
                screenshot: 'only-on-failure'
            }
        },
        // -- Local Browsers --
        {
            name: "local-chrome",
            use: {
                browserName: 'chromium',
                channel: 'chrome'
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
