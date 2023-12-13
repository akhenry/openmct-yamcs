// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig<{ failOnConsoleError: boolean, myItemsFolderName: string }>} */
const config = {
    retries: 1,
    testDir: '.',
    testMatch: '**/*.e2e.spec.js',
    timeout: 30 * 1000,
    use: {
        headless: false,
        video: 'off',
        screenshot: 'on',
        trace: 'on',
        baseURL: 'http://localhost:9000/#',
        ignoreHTTPSErrors: true,
        myItemsFolderName: "My Items",
        failOnConsoleError: false
    },
    webServer: {
        command: 'npm run start:coverage',
        url: 'http://localhost:9000/#',
        timeout: 120 * 1000,
        reuseExistingServer: false
    },
    workers: 1,
    projects: [
        {
            name: "chromium",
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
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['@deploysentinel/playwright']
    ]
};

// eslint-disable-next-line no-undef
module.exports = config;

