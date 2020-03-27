/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

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
