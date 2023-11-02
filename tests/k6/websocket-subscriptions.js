/* global __VU */

import { WebSocket } from 'k6/experimental/websockets';

export const options = {
    vus: 1,
    iterations: 1
};

export default function () {
    for (let i = 0; i < 1; i++) {
        startYamcsWsWorker(`${__VU}.${i}`);
    }
}

function startYamcsWsWorker(id) {
    console.info(`📨 Starting YAMCS websocket load test for ${id}`);
    const wsURL = `ws://localhost:8090/ws`;
    const websocket = new WebSocket(wsURL);
    websocket.onerror = (e) => {
        console.error(`🚨 Websocket error`, e);
    };

    websocket.addEventListener('open', () => {
        console.log(`VU ${id}: connected`);
        console.info(`🔌 Established websocket connection to ${wsURL}`);
        websocket.addEventListener('message', (rawMessage) => {
            const incomingMessage = JSON.parse(rawMessage);
            console.info(`📨 Received message:`, incomingMessage);
        });

        websocket.addEventListener('error', (error) => {
            console.error(`🚨 Websocket error`, error);
        });

        websocket.addEventListener('close', () => {
            console.warn('🚪 Websocket closed.');
        });

        // send subscription request message
        websocket.send(JSON.stringify({
            type: 'float',
            path: '/myproject/Gyro.x',
            id: 'YAMCS load testing connection',
            options: {
                instance: 'YAMCS load testing connection',
                processor: 'realtime',
                id: [{
                    name: 'YAMCS load testing connection'
                }],
                sendFromCache: true,
                updateOnExpiration: true
            }
        }));
    });
}
