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

import {
    OBJECT_TYPES,
    DATA_TYPES,
    METADATA_TIME_KEY,
    MDB_OBJECT,
    AGGREGATE_TYPE
} from '../const';

import {
    idToQualifiedName,
    getValue
} from '../utils.js';

import installRealtimeWorker from './realtime-provider-worker';

export default class RealtimeProvider {
    #subscriptions = {};
    #callNumberToKeystringMapping = {};

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
        this.statistics = {
            parametersProcessedPerSecond: 0,
            parametersReceivedPerSecond: 0,
            subscriptionCount: 0
        };

        this.addSupportedObjectTypes(Object.values(OBJECT_TYPES));
        this.addSupportedDataTypes(Object.values(DATA_TYPES));
        this.startWorker();
    }

    startWorker() {
        const workerFunction = `(${installRealtimeWorker.toString()})()`;
        const workerBlob = new Blob([workerFunction]);
        const workerUrl = URL.createObjectURL(workerBlob, { type: 'application/javascript' });
        this.realtimeWorker = new Worker(workerUrl);
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
    }

    subscribeToLimits(domainObject, callback) {
    }

    subscribeToMDBChanges(callback) {
    }

    isSupportedObjectType(type) {
        return this.supportedObjectTypes[type];
    }

    isSupportedDataType(type) {
        return this.supportedDataTypes[type];
    }

    subscribe(domainObject, callback, options) {
        this.statistics.subscriptionCount++;
        //TODO: FIX THIS PROPERLY. OUR API SHOULD NOT BE EXPOSING VUE INTERNALS
        const identifier = Object.assign({}, domainObject.identifier);
        this.realtimeWorker.postMessage({
            action: "subscribe",
            identifier,
            instance: this.instance,
            processor: this.processor
        });

        this.#subscriptions[domainObject.identifier.key] = this.#buildSubscriptionDetails(domainObject, callback, options);

        return () => {
            this.statistics.subscriptionCount--;
            this.realtimeWorker.postMessage({
                action: "unsubscribe",
                identifier: domainObject.identifier,
                instance: this.instance,
                processor: this.processor
            });
        };
    }

    connect() {
        this.realtimeWorker.postMessage({
            action: "connect",
            url: this.url
        });

        let startTime = performance.now();

        this.realtimeWorker.addEventListener('message', (event) => {
            const message = event.data;
            let parameterCount = 0;
            if (message.type === "latestValues") {
                const data = message.data;
                this.statistics.parametersReceivedPerSecond = message.parametersReceivedPerSecond;
                for (const [key, value] of Object.entries(data)) {
                    const keystring = this.#callNumberToKeystringMapping[key];
                    const subscriptionDetails = this.#subscriptions[keystring];
                    let allData = [];
                    for (let i = 0; i < value.length; i++) {
                        const newData = this.parseMessage(JSON.parse(value[i]), subscriptionDetails);
                        allData = allData.concat(newData);
                    }

                    subscriptionDetails.callback(allData);
                    parameterCount += value.length;
                }

                const endTime = performance.now();
                const parametersPerSecond = parameterCount / ((endTime - startTime) / 1000);
                this.statistics.parametersProcessedPerSecond = Math.floor(parametersPerSecond);
                startTime = endTime;

            } else if (message.type === "callNumberKeystringMapping") {
                this.#callNumberToKeystringMapping[message.callNumber] = message.keystring;
            }
        });

        // this.realtimeWorker.postMessage({
        //     action: "getLatestValues"
        // });

        this.connected = true;
    }

    parseMessage(message, subscriptionDetails) {
        const parsedData = [];
        //const objectKeystring = subscriptionDetails.keystring;

        // possibly cancelled
        if (!subscriptionDetails) {
            return;
        }

        //TODO: Add staleness back in. Add limits back in.
        if (this.isTelemetryMessage(message)) {
            let values = message.data.values || [];
            let parentName = subscriptionDetails.domainObject.name;

            values.forEach(parameter => {
                let datum = {
                    timestamp: parameter[METADATA_TIME_KEY]
                };
                let value = getValue(parameter, parentName);

                if (parameter.engValue.type !== AGGREGATE_TYPE) {
                    datum.value = value;
                } else {
                    datum = {
                        ...datum,
                        ...value
                    };
                }
                parsedData.push(datum);
            });
        }

        return parsedData;
    }

    #buildSubscriptionDetails(domainObject, callback, options) {
        let subscriptionDetails = {
            instance: this.instance,
            processor: this.processor,
            keystring: domainObject.identifier.key,
            domainObject,
            updateOnExpiration: true,
            options,
            callback: callback
        };

        return subscriptionDetails;
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
