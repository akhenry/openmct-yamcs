import { randomString, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import ws from 'k6/ws';
import { check } from 'k6';

export const options = {
    vus: 10,
    iterations: 10
};

export default function () {
    // URL should be YAMCS server's websocket endpoint
    const url = `ws://localhost:8090/ws`;
    const params = { tags: { my_tag: 'YAMCS load testing connection' } };

    const res = ws.connect(url, params, function (socket) {
        socket.on('open', function open() {
            console.info(`Connected to YAMCS`);
        });

        socket.on('close', function () {
            console.info(`Diconnected from YAMCS`);
        });
    });

    check(res, { 'Connected successfully': (r) => r && r.status === 101 });
}
