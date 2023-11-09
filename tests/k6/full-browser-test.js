/* global __VU */

import { sleep, check } from 'k6';
import { browser } from 'k6/experimental/browser';
import { Counter } from 'k6/metrics';

const maxClients = 30;
const dwellTimeInMs = 500000;
const baseURL = 'http://localhost:8040';
const domainObject = 'ae93d303-e2c1-4514-9dbf-e4822787b058';
const browserURL = `${baseURL}/#/browse/mine/${domainObject}`;

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

export const browserCounter = new Counter('Browser Instances');

export async function browserScenario() {
    const page = browser.newPage();
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
