/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
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

import * as MESSAGES from './messages';
import { OBJECT_TYPES, DATA_TYPES } from '../const';
import {
    idToQualifiedName,
    qualifiedNameToId,
    getValue,
    addLimitInformation
} from '../utils.js';

const FALLBACK_AND_WAIT_MS = [1000, 5000, 5000, 10000, 10000, 30000];
export default class RealtimeProvider {
    constructor(url, instance) {
        this.url = url;
        this.instance = instance;
        this.supportedObjectTypes = {};
        this.supportedDataTypes = {};
        this.connected = false;
        this.requests = [];
        this.currentWaitIndex = 0;
        this.lastSubscriptionId = 1;
        this.subscriptionsByCall = new Map();
        this.subscriptionsById = {};

        this.addSupportedObjectTypes(Object.values(OBJECT_TYPES));
        this.addSupportedDataTypes(Object.values(DATA_TYPES));
    }

    addSupportedObjectTypes(types) {
        types.forEach(type => this.supportedObjectTypes[type] = type);
    }

    addSupportedDataTypes(dataTypes) {
        dataTypes.forEach(dataType => this.supportedDataTypes[dataType] = dataType);
    }

    supportsSubscribe(domainObject) {
        return this.isSupportedObjectType(domainObject.type);
    }

    isSupportedObjectType(type) {
        return this.supportedObjectTypes[type];
    }

    isSupportedDataType(type) {
        return this.supportedDataTypes[type];
    }

    subscribe(domainObject, callback) {
        let subscriptionDetails = this.buildSubscriptionDetails(domainObject, callback);
        let id = subscriptionDetails.subscriptionId;

        this.subscriptionsById[id] = subscriptionDetails;

        if (this.connected) {
            this.sendSubscribeMessage(subscriptionDetails);
        }

        return () => {
            this.sendUnsubscribeMessage(subscriptionDetails);
            this.subscriptionsByCall.delete(this.subscriptionsById[id].call);
            delete this.subscriptionsById[id];
        };
    }

    buildSubscriptionDetails(domainObject, callback) {
        let subscriptionId = this.lastSubscriptionId++;

        return {
            instance: this.instance,
            subscriptionId: subscriptionId,
            name: idToQualifiedName(domainObject.identifier.key),
            domainObject,
            callback: callback
        };
    }

    sendSubscribeMessage(subscriptionDetails) {
        let domainObject = subscriptionDetails.domainObject;
        let message = MESSAGES.SUBSCRIBE[domainObject.type](subscriptionDetails);

        this.sendOrQueueMessage(message);
    }

    sendUnsubscribeMessage(subscriptionDetails) {
        let message = MESSAGES.UNSUBSCRIBE(subscriptionDetails);

        this.sendOrQueueMessage(message);
    }

    reconnect() {
        if (this.reconnectTimeout) {
            return;
        }

        this.reconnectTimeout = setTimeout(() => {
            this.connect();
            delete this.reconnectTimeout;
        }, FALLBACK_AND_WAIT_MS[this.currentWaitIndex]);

        if (this.currentWaitIndex < FALLBACK_AND_WAIT_MS.length - 1) {
            this.currentWaitIndex++;
        }
    }

    sendOrQueueMessage(request) {
        if (this.connected) {
            try {
                this.sendMessage(request);
                return true;
            } catch (error) {
                this.connected = false;
                console.error(error);
                console.warn("Error while attempting to send to websocket. Reconnecting...");

                this.requests.push(request);
                this.reconnect();
            }
        } else {
            this.requests.push(request);
        }
    }

    connect() {
        if (this.connected) {
            return;
        }
        let wsUrl = `${this.url}`;
        this.lastSubscriptionId = 1;
        this.connected = false;
        this.socket = new WebSocket(wsUrl);

        this.socket.onopen = () => {
            clearTimeout(this.reconnectTimeout);

            this.connected = true;
            console.log(`Established websocket connection to ${wsUrl}`);

            this.currentWaitIndex = 0;
            this.resubscribeToAll();
            this.flushQueue();
        };

        this.socket.onmessage = (event) => {
            let data = JSON.parse(event.data);

            if (!this.isSupportedDataType(data.type)) {
                return;
            }

            let isReply = data.type === DATA_TYPES.DATA_TYPE_REPLY;
            let subscriptionDetails;

            if (isReply) {
                let id = data.data.replyTo;
                let call = data.call;
                subscriptionDetails = this.subscriptionsById[id];
                subscriptionDetails.call = call;
                this.subscriptionsByCall.set(call, subscriptionDetails);
            } else {
                subscriptionDetails = this.subscriptionsByCall.get(data.call);

                // possibly cancelled
                if (!subscriptionDetails) {
                    return;
                }

                // only event is handled differently
                if (data.type === DATA_TYPES.DATA_TYPE_EVENTS) {
                    subscriptionDetails.callback(data.data);
                } else if (data.data.values) {
                    data.data.values.forEach(parameter => {
                        let point = {
                            id: qualifiedNameToId(subscriptionDetails.name),
                            timestamp: parameter.generationTimeUTC,
                            value: getValue(parameter.engValue)
                        };

                        addLimitInformation(parameter, point);
                        subscriptionDetails.callback(point);
                    });
                }
            }
        };

        this.socket.onerror = (error) => {
            console.error(error);
            console.warn("Websocket error, attempting reconnect...");
            this.connected = false;
            this.reconnect();
        };

        this.socket.onclose = () => {
            this.connected = false;
            console.warn("Websocket closed. Attempting to reconnect...");
            this.reconnect();
        };
    }

    resubscribeToAll() {
        this.subscriptionsByCall.forEach((subscriptionDetails) => {
            this.sendSubscribeMessage(subscriptionDetails);
        });
    }

    flushQueue() {
        let shouldReconnect = false;
        this.requests = this.requests.filter((request) => {
            try {
                this.sendMessage(request);
            } catch (error) {
                this.connected = false;
                console.error(error);
                console.warn("Error while attempting to send to websocket. Reconnecting...");

                shouldReconnect = true;
                return true;
            }
            return false;
        });

        if (shouldReconnect) {
            this.reconnect();
        }
    }

    sendMessage(message) {
        this.socket.send(message);
    }

}
