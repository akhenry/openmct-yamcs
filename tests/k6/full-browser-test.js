/* global __VU __ENV */

import { sleep, check } from 'k6';
import { browser } from 'k6/experimental/browser';
import { Counter } from 'k6/metrics';
import { b64encode } from 'k6/encoding';

const maxClients = 30;
const dwellTimeInMs = 500000;
const baseURL = 'http://localhost:8040';
const domainObject = 'ae93d303-e2c1-4514-9dbf-e4822787b058';
const browserURL = `${baseURL}/#/browse/mine/${domainObject}`;

// Get the username and password from environment variables
const openmctUsername = __ENV.OPENMCT_USERNAME;
const openmctPassword = __ENV.OPENMCT_PASSWORD;

export const options = {
    scenarios: {
        'ui': {
            executor: 'ramping-vus',
            options: {
                browser: {
                    type: 'chromium'
                }
            },
            startVUs: 0,
            stages: [
                {
                    duration: '1s',
                    target: maxClients - 25
                },
                {
                    duration: '30s',
                    target: maxClients - 15
                },
                {
                    duration: '1m',
                    target: maxClients - 10
                },
                {
                    duration: '2m',
                    target: maxClients - 5
                },
                {
                    duration: '3m',
                    target: maxClients
                }
            ],
            gracefulRampDown: '30s'
        }
    },
    browser: {
        type: 'chromium'
    }
};

function createBasicAuthHeader(username, password) {
    const base64Credentials = b64encode(`${username}:${password}`);

    return `Basic ${base64Credentials}`;
}

export const browserCounter = new Counter('Browser Instances');
const basicAuthHeader = createBasicAuthHeader(openmctUsername, openmctPassword);

export async function browserScenario() {
    const page = browser.newPage();
    page.setExtraHTTPHeaders({
        'Authorization': basicAuthHeader
    });
    try {
        console.info(`🟢 Starting browser ${__VU} to connect to Open MCT ${browserURL}`);
        await page.goto(browserURL);
        browserCounter.add(1);
        check(page, {
            'header': pageToCheck => pageToCheck.locator('.c-button__label').textContent() === 'Create'
        });
        sleep(dwellTimeInMs);
    } finally {
        page.close();
        browserCounter.add(-1);
        console.info(`✋ Stopping browser ${__VU}`);
    }
}

export function teardown() {
    console.info(`✅ Browser instances opened during the test: ${browserCounter.value}`);
}

export default async () => {
    await browserScenario();
};
