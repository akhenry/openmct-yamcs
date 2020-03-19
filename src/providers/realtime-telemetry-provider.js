import {
    idToQualifiedName,
    qualifiedNameToId,
    getValue
} from '../utils.js';

const WS_IDLE_INTERVAL = 10000;

export default class RealtimeTelemetryProvider {
    constructor(url ,instance) {
        this.url = url;
        this.instance = instance;
        this.seqNo = 0;
        this.connected = false;
        this.listener = {};
        this.requests = [];
    }

    supportsSubscribe(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    subscribe(domainObject, callback) {
        this.listener[domainObject.identifier.key] = callback;
        let name = idToQualifiedName(domainObject.identifier.key);
        this.tlmSubscribe(name);

        return () => {
            this.tlmUnsubscribe(name);
            delete this.listener[domainObject.identifier.key];
        };
    }

    connect() {
        this.seqNo = 0;
        this.connected = false;
        this.socket = new WebSocket(this.url + '_websocket/' + this.instance);

        this.socket.onopen = () => {
            this.keepAliveInterval = setInterval(
                this.idleSubscribe.bind(this), WS_IDLE_INTERVAL);
            this.connected = true;
            this.flushQueue();
        };
        this.socket.onmessage = (event) => {
            let data = JSON.parse(event.data);

            if (data.length>=4 && data[3].dt === 'PARAMETER') {
                data[3].data.parameter.forEach(parameter => {
                    let point = {
                        id: qualifiedNameToId(parameter.id.name),
                        timestamp: parameter.generationTimeUTC,
                        value: getValue(parameter.engValue)
                    };

                    if (this.listener[point.id]) {
                        this.listener[point.id](point);
                    }
                });
            }
        };
    }

    idleSubscribe() {
        this.sendOrQueueRequest('{"parameter": "subscribe", "data": { "id": [] }}');
    }

    tlmSubscribe(id) {
        this.sendOrQueueRequest(`{"parameter": "subscribe",
                     "data": { "id": [{ "name": "${id}" }],
                     "sendFromCache": false }}`);
    }

    tlmUnsubscribe(id) {
        this.sendOrQueueRequest(`{"parameter": "unsubscribe",
                     "data": { "id": [{ "name": "${id}" }] }}`);
    }

    sendOrQueueRequest(request) {
        if (this.connected) {
            this.sendRequest(request);
        } else {
            this.requests.push(request);
        }
    }

    flushQueue() {
        this.requests.forEach(this.sendRequest.bind(this));
        this.requests = [];
    }

    sendRequest(request) {
        let payload = '[1, 1, ' + (++this.seqNo) + ', ' + request + ']';
        this.socket.send(payload);
    }
}
