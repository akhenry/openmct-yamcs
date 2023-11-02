/* global __VU */

import { WebSocket } from 'k6/experimental/websockets';

export const options = {
    vus: 1,
    iterations: 1,
    workers: 4
};

export default () => {
    for (let i = 0; i < options.workers; i++) {
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
            console.info(`📨 Client ${id} received YAMCS message for ${parameterName}`);
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
