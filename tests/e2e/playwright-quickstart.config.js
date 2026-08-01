// playwright.config.js
// @ts-check
import path from 'path';

// Overridable so multiple worktree checkouts can run the suite against
// non-conflicting ports in parallel (see tests/patch-quickstart-ports.sh).
const webpackPort = Number(process.env.WEBPACK_PORT) || 9000;
const baseOrigin = `http://localhost:${webpackPort}`;

// Raw per-test coverage JSON is written here by e2e/baseFixtures.js's `context`
// fixture; `npm run cov:e2e:report` (nyc) reads it from this same location.
// (Avoid `import.meta.url` here: this config is loaded through Playwright's
// CJS transform pipeline, and `import.meta` breaks that — use `__dirname`,
// which is available in that context, instead.)
const istanbulCLIOutput = path.join(__dirname, '../../.nyc_output');

/** @type {import('@playwright/test').PlaywrightTestConfig<{ failOnConsoleError: boolean, myItemsFolderName: string, coveragePath: string }>} */
const config = {
    retries: 1,
    testDir: '.',
    testMatch: /.*\.e2e\.spec\.(mjs|js)$/,
    timeout: 30 * 1000,
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
        command: 'npm run start:coverage',
        url: `${baseOrigin}/#`,
        timeout: 120 * 1000,
        reuseExistingServer: false
    },
    workers: 1,
    projects: [
        {
            name: "chromium",
            // Note: @mutatesGlobalState (see tests/e2e/yamcs/*.e2e.spec.mjs) is a distinct,
            // purely informational tag -- it marks specs that write shared backend/MDB state
            // (real command history, alarm overrides, telemetry link toggles, etc.) that a
            // differently-ordered or truly concurrent run could collide with. Unlike the tags
            // below, it is NOT excluded here; these specs are expected to run normally.
            grepInvert: /@unstable|@snapshot|@localStorage|@addInit/,
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
            // Same @mutatesGlobalState note as above.
            grepInvert: /@unstable|@snapshot|@localStorage|@addInit/,
            use: {
                browserName: 'chromium',
                channel: 'chrome'
            }
        },
        {
            name: "local-webkit",
            use: {
                browserName: 'webkit'
            }
        },
        {
            name: "local-firefox",
            use: {
                browserName: 'firefox'
            }
        }
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'never',
            outputFolder: '../html-test-results' //Must be in different location due to https://github.com/microsoft/playwright/issues/12840
        }],
        ['junit', { outputFile: 'test-results/results.xml' }]]
};

export default config;

