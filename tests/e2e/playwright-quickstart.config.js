// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig<{ failOnConsoleError: boolean, myItemsFolderName: string }>} */
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
        baseURL: 'http://localhost:9000/#',
        ignoreHTTPSErrors: true,
        myItemsFolderName: "My Items",
        failOnConsoleError: false,
        storageState: {
            cookies: [],
            origins: [
                {
                    "origin": "http://localhost:9000",
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
        url: 'http://localhost:9000/#',
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

