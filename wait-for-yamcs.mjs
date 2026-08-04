import http from 'node:http';
import https from 'node:https';

const URL = process.argv[2] ?? 'http://localhost:8090/';
const RETRY_INTERVAL_MS = 1000;

async function checkUrl() {
    const client = URL.startsWith('https://') ? https : http;
    return new Promise((resolve, reject) => {
        client.get(URL, (res) => {
            res.resume();
            if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve(res.statusCode);
            } else {
                reject(new Error(`HTTP ${res.statusCode}`));
            }
        }).on('error', reject);
    });
}

async function waitForYamcs() {
    console.log(`Waiting for YAMCS at ${URL}...`);
    for (;;) {
        try {
            const status = await checkUrl();
            console.log(`YAMCS is up (HTTP ${status})`);
            return;
        } catch {
            await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL_MS));
        }
    }
}

waitForYamcs();
