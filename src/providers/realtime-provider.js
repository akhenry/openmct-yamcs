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
import {
    OBJECT_TYPES,
    DATA_TYPES,
    AGGREGATE_TYPE,
    METADATA_TIME_KEY,
    STALENESS_STATUS_MAP,
    MDB_OBJECT
} from '../const';
import {
    buildStalenessResponseObject,
    idToQualifiedName,
    qualifiedNameToId,
    getValue,
    addLimitInformation,
    getLimitFromAlarmRange
} from '../utils.js';
import { commandToTelemetryDatum } from './commands';
import { eventToTelemetryDatum, eventShouldBeFiltered } from './events';

const FALLBACK_AND_WAIT_MS = [1000, 5000, 5000, 10000, 10000, 30000];
export default class RealtimeProvider {
    constructor(url, instance, processor = 'realtime') {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
        this.observingStaleness = {};
        this.MDB_OBJECT = MDB_OBJECT;
        this.observingLimitChanges = {};
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

    subscribeToStaleness(domainObject, callback) {
        const qualifiedName = idToQualifiedName(domainObject.identifier.key);
        this.observingStaleness[qualifiedName] = {
            response: buildStalenessResponseObject(undefined, 0),
            callback
        };

        return () => {
            delete this.observingStaleness[qualifiedName];
        };
    }

    subscribeToLimits(domainObject, callback) {
        // The object-provider creates an mdb changes subscription on dictionary load and unsubscribes it when open MCT is closed
        // so we only need to maintain a list of subscriber callbacks and don't need to create another mdb changes subscription here
        const qualifiedName = idToQualifiedName(domainObject.identifier.key);
        this.observingLimitChanges[qualifiedName] = {
            callback
        };

        return () => {
            delete this.observingLimitChanges[qualifiedName];
        };
    }

    subscribeToMDBChanges(callback) {
        const subscriptionDetails = this.buildSubscriptionDetails(this.MDB_OBJECT, callback);
        this.subscriptionsById[subscriptionDetails.subscriptionId] = subscriptionDetails;

        this.sendSubscribeMessage(subscriptionDetails);

        return () => {
            const id = subscriptionDetails.subscriptionId;

            if (subscriptionDetails) {
                this.sendUnsubscribeMessage(subscriptionDetails);

                this.subscriptionsByCall.delete(subscriptionDetails.call);
                delete this.subscriptionsById[id];
            }
        };
    }

    isSupportedObjectType(type) {
        return this.supportedObjectTypes[type];
    }

    isSupportedDataType(type) {
        return this.supportedDataTypes[type];
    }

    subscribe(domainObject, callback, options) {
        let subscriptionDetails = this.buildSubscriptionDetails(domainObject, callback, options);
        let id = subscriptionDetails.subscriptionId;
        this.subscriptionsById[id] = subscriptionDetails;

        this.sendSubscribeMessage(subscriptionDetails);

        return () => {
            this.sendUnsubscribeMessage(subscriptionDetails);

            if (this.subscriptionsById[id]) {
                this.subscriptionsByCall.delete(this.subscriptionsById[id].call);
                delete this.subscriptionsById[id];
            }
        };
    }

    buildSubscriptionDetails(domainObject, callback, options) {
        let subscriptionId = this.lastSubscriptionId++;
        let subscriptionDetails = {
            instance: this.instance,
            processor: this.processor,
            subscriptionId: subscriptionId,
            name: idToQualifiedName(domainObject.identifier.key),
            domainObject,
            updateOnExpiration: true,
            options,
            callback: callback
        };

        return subscriptionDetails;
    }

    sendSubscribeMessage(subscriptionDetails) {
        const domainObject = subscriptionDetails.domainObject;
        const message = MESSAGES.SUBSCRIBE[domainObject.type](subscriptionDetails);

        this.sendOrQueueMessage(message);
    }

    sendUnsubscribeMessage(subscriptionDetails) {
        let message = MESSAGES.UNSUBSCRIBE(subscriptionDetails);

        this.sendOrQueueMessage(message);
    }

    reconnect() {
        this.subscriptionsByCall.clear();

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
            } catch (error) {
                this.connected = false;
                this.requests.push(request);
                console.error("🚨 Error while attempting to send to websocket, closing websocket", error);
                this.socket.close();
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
            console.debug(`🔌 Established websocket connection to ${wsUrl}`);

            this.currentWaitIndex = 0;
            this.resubscribeToAll();
            this.flushQueue();
        };

        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (!this.isSupportedDataType(message.type)) {
                return;
            }

            const isReply = message.type === DATA_TYPES.DATA_TYPE_REPLY;
            let subscriptionDetails;

            if (isReply) {
                const id = message.data.replyTo;
                const call = message.call;
                subscriptionDetails = this.subscriptionsById[id];
                subscriptionDetails.call = call;
                this.subscriptionsByCall.set(call, subscriptionDetails);
            } else {
                subscriptionDetails = this.subscriptionsByCall.get(message.call);

                // possibly cancelled
                if (!subscriptionDetails) {
                    return;
                }

                if (this.isTelemetryMessage(message)) {
                    let values = message.data.values || [];
                    let parentName = subscriptionDetails.domainObject.name;

                    values.forEach(parameter => {
                        let datum = {
                            id: qualifiedNameToId(subscriptionDetails.name),
                            timestamp: parameter[METADATA_TIME_KEY]
                        };
                        let value = getValue(parameter, parentName);

                        if (this.observingStaleness[subscriptionDetails.name] !== undefined) {
                            const status = STALENESS_STATUS_MAP[parameter.acquisitionStatus];

                            if (this.observingStaleness[subscriptionDetails.name].response.isStale !== status) {
                                const stalenesResponseObject = buildStalenessResponseObject(
                                    status,
                                    parameter[METADATA_TIME_KEY]
                                );
                                this.observingStaleness[subscriptionDetails.name].response = stalenesResponseObject;
                                this.observingStaleness[subscriptionDetails.name].callback(stalenesResponseObject);
                            }
                        }

                        if (parameter.engValue.type !== AGGREGATE_TYPE) {
                            datum.value = value;
                        } else {
                            datum = {
                                ...datum,
                                ...value
                            };
                        }

                        addLimitInformation(parameter, datum);
                        subscriptionDetails.callback(datum);
                    });
                } else if (this.isCommandMessage(message)) {
                    const datum = commandToTelemetryDatum(message.data);
                    subscriptionDetails.callback(datum);
                } else if (this.isEventMessage(message)) {
                    if (eventShouldBeFiltered(message.data, subscriptionDetails.options)) {
                        // ignore event
                    } else {
                        const datum = eventToTelemetryDatum(message.data);
                        subscriptionDetails.callback(datum);
                    }
                } else if (this.isMdbChangesMessage(message)) {
                    const parameterName = message.data.parameterOverride.parameter;
                    if (this.observingLimitChanges[parameterName] !== undefined) {
                        const alarmRange = message.data.parameterOverride.defaultAlarm?.staticAlarmRange ?? [];
                        this.observingLimitChanges[parameterName].callback(getLimitFromAlarmRange(alarmRange));
                    }

                    if (subscriptionDetails.callback) {
                        subscriptionDetails.callback(message.data);
                    }
                } else {
                    subscriptionDetails.callback(message.data);
                }
            }
        };

        this.socket.onerror = (error) => {
            console.error(`🚨 Websocket error, closing websocket`, error);
            this.socket.close();
        };

        this.socket.onclose = () => {
            console.warn('🚪 Websocket closed. Attempting to reconnect...');
            this.connected = false;
            this.socket = null;

            this.reconnect();
        };
    }

    resubscribeToAll() {
        Object.values(this.subscriptionsById).forEach((subscriptionDetails) => {
            this.sendSubscribeMessage(subscriptionDetails);
        });
    }

    flushQueue() {
        let shouldCloseWebsocket = false;
        this.requests = this.requests.filter((request) => {
            try {
                this.sendMessage(request);
            } catch (error) {
                this.connected = false;
                console.error('🚨 Error while attempting to send to websocket, closing websocket', error);

                shouldCloseWebsocket = true;

                return true;
            }

            return false;
        });

        if (shouldCloseWebsocket) {
            this.socket.close();
        }
    }

    sendMessage(message) {
        this.socket.send(message);
    }

    isTelemetryMessage(message) {
        return message.type === 'parameters';
    }

    isCommandMessage(message) {
        return message.type === 'commands';
    }

    isEventMessage(message) {
        return message.type === 'events';
    }

    isMdbChangesMessage(message) {
        return message.type === DATA_TYPES.DATA_TYPE_MDB_CHANGES;
    }
}
