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

import { SUBSCRIBE, UNSUBSCRIBE } from './messages.js';
import {
    OBJECT_TYPES,
    DATA_TYPES,
    METADATA_TIME_KEY,
    STALENESS_STATUS_MAP,
    MDB_OBJECT,
    MDB_CHANGES_PARAMETER_TYPE
} from '../const.js';
import {
    buildStalenessResponseObject,
    idToQualifiedName,
    addLimitInformation,
    getLimitFromAlarmRange,
    convertYamcsToOpenMctDatum
} from '../utils.js';
import { commandToTelemetryDatum } from './commands.js';
import { eventToTelemetryDatum, eventShouldBeFiltered } from './events.js';

const ONE_SECOND = 1000;
const ONE_MILLION_CHARACTERS = 1000000;

export default class RealtimeProvider {
    #socketWorker = null;
    #openmct;

    constructor(openmct, url, instance, processor = 'realtime', throttleRate = ONE_SECOND, maxBufferSize = ONE_MILLION_CHARACTERS) {
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
        this.#socketWorker = new openmct.telemetry.BatchingWebSocket(openmct);
        this.#openmct = openmct;
        this.#socketWorker.setThrottleRate(throttleRate);
        this.#socketWorker.setMaxBufferSize(maxBufferSize);

        this.addSupportedObjectTypes(Object.values(OBJECT_TYPES));
        this.addSupportedDataTypes(Object.values(DATA_TYPES));
        const setCallFromClockIfNecessary = this.#setCallFromClockIfNecessary.bind(this);

        openmct.time.on('clock', setCallFromClockIfNecessary);

        openmct.once('destroy', () => {
            openmct.time.off('clock', setCallFromClockIfNecessary);
        });
    }

    #setCallFromClockIfNecessary(clock) {
        if (clock === undefined) {
            this.unsetCall();
        }

        if (clock.key === 'remote-clock') {
            this.#setCallFromClock(clock);
        }
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

    getSubscriptionByObjectIdentifier(identifier) {
        const objectKeystring = this.#openmct.objects.makeKeyString(identifier);

        return Object.values(this.subscriptionsById).find(subscription => this.#openmct.objects.areIdsEqual(subscription.domainObject.identifier, identifier));
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
        const message = SUBSCRIBE[domainObject.type](subscriptionDetails);

        this.sendMessage(message);
    }

    sendUnsubscribeMessage(subscriptionDetails) {
        let message = UNSUBSCRIBE(subscriptionDetails);

        this.sendMessage(message);
    }

    #setCallFromClock(clock) {
        const correspondingSubscription = Object.values(this.subscriptionsById).find(subscription => {
            return subscription.domainObject.identifier.key === clock.identifier.key;
        });

        if (correspondingSubscription !== undefined) {
            this.remoteClockCallNumber = correspondingSubscription.call;
        } else {
            delete this.remoteClockCallNumber;
        }
    }

    #processParameterUpdates(parameterValuesByCall) {
        //If remote clock active, process its value before any telemetry values to ensure the bounds are always up to date.
        if (this.remoteClockCallNumber !== undefined) {
            const remoteClockValues = parameterValuesByCall.get(this.remoteClockCallNumber);
            const subscriptionDetails = this.subscriptionsByCall.get(this.remoteClockCallNumber);

            if (remoteClockValues !== undefined && remoteClockValues.length > 0) {
                const allClockValues = [];

                // We only care about the most recent clock tick message in the batch.
                remoteClockValues.forEach((parameterValue) => {
                    this.#convertMessageToDatumAndReportStaleness(parameterValue, subscriptionDetails, allClockValues);
                });

                if (allClockValues.length > 0) {
                    subscriptionDetails.callback(allClockValues);
                }

                // Delete so we don't process it twice.
                parameterValuesByCall.delete(this.remoteClockCallNumber);
            }
        }

        // Now process all non-clock parameter updates
        for (const [call, parameterValues] of parameterValuesByCall.entries()) {
            const allTelemetryData = [];
            const subscriptionDetails = this.subscriptionsByCall.get(call);

            // possibly cancelled
            if (!subscriptionDetails) {
                continue;
            }

            parameterValues.forEach((parameterValue) => {
                this.#convertMessageToDatumAndReportStaleness(parameterValue, subscriptionDetails, allTelemetryData);
            });

            if (allTelemetryData.length > 0) {
                subscriptionDetails.callback(allTelemetryData);
            }
        }
    }

    #convertMessageToDatumAndReportStaleness(parameterValue, subscriptionDetails, allTelemetryData) {
        const values = parameterValue.data.values || [];
        const parentName = subscriptionDetails.domainObject.name;
        values.forEach(parameter => {
            const datum = convertYamcsToOpenMctDatum(parameter, parentName);

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

            addLimitInformation(parameter, datum);
            allTelemetryData.push(datum);
        });
    }

    connect() {
        if (this.connected) {
            return;
        }

        let wsUrl = `${this.url}`;
        this.lastSubscriptionId = 1;
        this.connected = false;

        this.#socketWorker.connect(wsUrl);
        this.#socketWorker.addEventListener('reconnected', () => {
            this.resubscribeToAll();
        });

        this.#socketWorker.addEventListener('batch', (batchEvent) => {
            const newBatch = batchEvent.detail;
            const parametersByCall = new Map();
            newBatch.forEach(messageString => {
                const message = JSON.parse(messageString);
                const call = message.call;
                if (message.type === 'parameters') {
                    // First, group parameter updates by call
                    let arrayOfParametersForCall = parametersByCall.get(call);

                    if (arrayOfParametersForCall === undefined) {
                        arrayOfParametersForCall = [];
                        parametersByCall.set(call, arrayOfParametersForCall);
                    }

                    arrayOfParametersForCall.push(message);
                } else {
                    if (!this.isSupportedDataType(message.type)) {
                        return;
                    }

                    const isReply = message.type === DATA_TYPES.DATA_TYPE_REPLY;
                    let subscriptionDetails;

                    if (isReply) {
                        const id = message.data.replyTo;
                        subscriptionDetails = this.subscriptionsById[id];
                        subscriptionDetails.call = call;
                        // Subsequent retrieval uses a string, so for performance reasons we use a string as a key.
                        this.subscriptionsByCall.set(call, subscriptionDetails);

                        const remoteClockIdentifier = this.#openmct.time.getClock()?.identifier;
                        const isRemoteClockActive = remoteClockIdentifier !== undefined;

                        if (isRemoteClockActive && subscriptionDetails.domainObject.identifier.key === remoteClockIdentifier.key) {
                            this.remoteClockCallNumber = call;
                        }
                    } else {
                        subscriptionDetails = this.subscriptionsByCall.get(message.call);

                        // possibly cancelled
                        if (!subscriptionDetails) {
                            return;
                        }

                        if (this.isCommandMessage(message)) {
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
                            if (!this.isParameterType(message)) {
                                return;
                            }

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
                }
            });
            this.#processParameterUpdates(parametersByCall);
        });
    }

    resubscribeToAll() {
        Object.values(this.subscriptionsById).forEach((subscriptionDetails) => {
            this.sendSubscribeMessage(subscriptionDetails);
        });
    }

    sendMessage(message) {
        this.#socketWorker.sendMessage(message);
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

    isParameterType(message) {
        return message.data?.type === MDB_CHANGES_PARAMETER_TYPE;
    }
}
