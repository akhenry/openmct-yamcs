/* global __VU __ENV */

import { WebSocket } from 'k6/experimental/websockets';
import { sleep } from 'k6';
import { b64encode } from 'k6/encoding';

const maxClients = 60;
const workersPerClient = 30;
const testingDuration = '1h';
const yamcsURL = `ws://localhost:8040/yamcs/api/websocket`;
const digestionTimeInMs = 500;

// Get the username and password from environment variables
const openmctUsername = __ENV.OPENMCT_USERNAME;
const openmctPassword = __ENV.OPENMCT_PASSWORD;
const basicAuthHeader = createBasicAuthHeader(openmctUsername, openmctPassword);

export const options = {
    vus: maxClients,
    scenarios: {
        contacts: {
            executor: 'ramping-vus',
            startVUs: 1,
            stages: [
                {
                    duration: '30s',
                    target: maxClients - 20
                },
                {
                    duration: '30s',
                    target: maxClients - 15
                },
                {
                    duration: '30s',
                    target: maxClients - 10
                },
                {
                    duration: '30s',
                    target: maxClients - 5
                },
                {
                    duration: testingDuration,
                    target: maxClients
                }
            ],
            gracefulRampDown: '0s'
        }
    }
};

function createBasicAuthHeader(username, password) {
    const base64Credentials = b64encode(`${username}:${password}`);

    return `Basic ${base64Credentials}`;
}

function startYamcsWsWorker(id) {
    // make array of x,y,z
    const parameterTypes = ['x', 'y', 'z'];
    // pick one at random
    const randomParameter = parameterTypes[Math.floor(Math.random() * parameterTypes.length)];
    const parameterName = `/myproject/Gyro.${randomParameter}`;
    console.info(`📨 Starting YAMCS websocket load test for ${id} to ${yamcsURL} subscribing to ${parameterName}`);
    const websocket = new WebSocket(yamcsURL, { headers: { Authorization: basicAuthHeader } });
    websocket.onerror = (e) => {
        console.error(`🚨 Websocket error`, e);
    };

    websocket.addEventListener('open', () => {
        console.log(`Client id ${id}: connected`);
        console.info(`🔌 Established websocket connection to ${yamcsURL}`);
        websocket.addEventListener('message', (rawMessage) => {
            console.info(`📫 Client ${id} received YAMCS message for ${parameterName} at time ${new Date().toISOString()}, swallowing in ${digestionTimeInMs}ms`);
            // block function while we digest the message
            sleep(digestionTimeInMs / 1000);
            console.info(`📭 Client ${id} finished digesting message for ${parameterName} at time ${new Date().toISOString()}`);
        });

        websocket.addEventListener('error', (error) => {
            console.error(`🚨 Client ${id} got websocket error`, error);
        });

        websocket.addEventListener('close', () => {
            console.warn(`🚪 Client ${id} websocket closed.`);
        });

        // send subscription request message
        websocket.send(JSON.stringify({
            type: 'parameters',
            id,
            options: {
                instance: 'myproject',
                processor: 'realtime',
                id: [{name: parameterName}],
                sendFromCache: true,
                updateOnExpiration: true
            }
        }));
    });
}

export default () => {
    for (let i = 0; i < workersPerClient; i++) {
        startYamcsWsWorker(`${__VU}`);
    }
};
