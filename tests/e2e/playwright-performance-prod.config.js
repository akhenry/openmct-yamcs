// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    retries: 0, //Only for debugging purposes for trace: 'on-first-retry'
    testDir: 'yamcs',
    testMatch: '**/*.perf.spec.js',
    timeout: 15000 * 1000, // 15 minutes
    workers: 1, //Only run in serial with 1 worker
    webServer: {
        command: 'npm run start:prod', //Production mode
        url: 'http://localhost:9000/#',
        timeout: 200 * 1000,
        reuseExistingServer: false //Must be run with this option to prevent dev mode
    },
    use: {
        baseURL: 'http://localhost:9000/',
        headless: true,
        ignoreHTTPSErrors: false, //HTTP performance varies!
        screenshot: 'off',
        trace: 'on-first-retry',
        video: 'off'
    },
    projects: [
        {
            name: 'chrome-memory',
            testMatch: '*.memory.perf.spec.js', //Only run memory tests
            use: {
                browserName: 'chromium',
                launchOptions: {
                    args: [
                        '--no-sandbox',
                        '--disable-notifications',
                        '--use-fake-ui-for-media-stream',
                        '--use-fake-device-for-media-stream',
                        '--js-flags=--no-move-object-start --expose-gc',
                        '--enable-precise-memory-info',
                        '--display=:100'
                    ]
                }
            }
        },
        {
            name: 'chrome',
            testIgnore: '*.memory.perf.spec.js', //Do not run memory tests without proper flags
            use: {
                browserName: 'chromium'
            }
        }
    ],
    reporter: [
        ['list'],
        ['junit', { outputFile: 'test-results/results.xml' }]
    ]
};

export default config;
