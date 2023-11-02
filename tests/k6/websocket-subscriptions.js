/* global __VU */

import { WebSocket } from 'k6/experimental/websockets';
import { setTimeout } from 'k6/experimental/timers';

const maxClients = 100;
const workersPerClient = 4;
const testingDuration = '3000';
export const options = {
    vus: maxClients,
    scenarios: {
        contacts: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                {
                    duration: '10s',
                    target: maxClients - 20
                },
                {
                    duration: '10s',
                    target: maxClients - 20
                },
                {
                    duration: '10s',
                    target: maxClients - 20
                },
                {
                    duration: '10s',
                    target: maxClients - 20
                },
                {
                    duration: '10s',
                    target: maxClients
                }
            ],
            gracefulRampDown: '0s'
        }
    }
};

export default () => {
    for (let i = 0; i < workersPerClient; i++) {
        startYamcsWsWorker(`${__VU}`);
    }
};

function startYamcsWsWorker(id) {
    // make array of x,y,z
    const parameterTypes = ['x', 'y', 'z'];
    // pick one at random
    const randomParameter = parameterTypes[Math.floor(Math.random() * parameterTypes.length)];
    const parameterName = `/myproject/Gyro.${randomParameter}`;
    const wsURL = `ws://0.0.0.0:8090/api/websocket`;
    console.info(`📨 Starting YAMCS websocket load test for ${id} to ${wsURL} subscribing to ${parameterName}`);
    const websocket = new WebSocket(wsURL);
    websocket.onerror = (e) => {
        console.error(`🚨 Websocket error`, e);
    };

    websocket.addEventListener('open', () => {
        console.log(`Client id ${id}: connected`);
        console.info(`🔌 Established websocket connection to ${wsURL}`);
        websocket.addEventListener('message', (rawMessage) => {
            console.info(`📨 Client ${id} received YAMCS message for ${parameterName} at time ${new Date().toISOString()}`);
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

        setTimeout(() => {
            console.log(`✅ Client ${id} finished bothering YAMCS`);
            websocket.close();
        }, testingDuration);
    });
}
