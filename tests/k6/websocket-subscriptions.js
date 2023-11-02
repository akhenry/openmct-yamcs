/* global __VU */

import ws from 'k6/ws';
import { check } from 'k6';

export const options = {
    vus: 10,
    iterations: 10
};

export default () => {
    console.info(`Starting YAMCS websocket load test for ${__VU}`);
    const wsURL = `ws://localhost:8090/ws`;
    const params = { tags: { my_tag: 'YAMCS load testing connection' } };
    let counter = 0;

    const res = ws.connect(wsURL, params, function (socket) {
        socket.on('open', () => {
            console.log(`VU ${__VU}: connected`);
            console.info(`🔌 Established websocket connection to ${wsURL}`);
        });

        socket.on('message', (rawMessage) => {
            const incomingMessage = JSON.parse(rawMessage);
            console.info(`📨 Received message:`, incomingMessage);
            counter += 1;
            if (counter === 10000) {
                console.info(`💸 Received ${counter} messages. Closing WebSocket.`);
                socket.close();
            }
        });

        socket.on('error', (error) => {
            console.error(`🚨 Websocket error, closing websocket`, error);
            socket.close();
        });

        socket.on('close', () => {
            console.warn('🚪 Websocket closed.');
        });

        // send subscription request message
        socket.send(JSON.stringify({
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

    check(res, { 'Connected successfully': (r) => r && r.status === 200 });
};
