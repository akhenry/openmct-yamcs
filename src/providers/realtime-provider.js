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
import { OBJECT_TYPES, DATA_TYPES, AGGREGATE_TYPE, METADATA_TIME_KEY } from '../const';
import {
    idToQualifiedName,
    qualifiedNameToId,
    getValue,
    addLimitInformation
} from '../utils.js';

export default class RealtimeProvider {
    constructor(socket, instance) {
        this.socket = socket;
        this.instance = instance;
        this.supportedObjectTypes = {};
        this.supportedDataTypes = {};
        this.lastSubscriptionId = 1;
        this.subscriptionsByCall = new Map();
        this.subscriptionsById = {};

        this._addSupportedDataTypes(Object.values(DATA_TYPES));
        this._addSupportedObjectTypes(Object.values(OBJECT_TYPES));
    }

    subscribe(domainObject, callback) {
        this._connect();

        let subscriptionDetails = this._buildSubscriptionDetails(domainObject, callback);
        let id = subscriptionDetails.subscriptionId;

        this.subscriptionsById[id] = subscriptionDetails;
        this._sendSubscribeMessage(subscriptionDetails);

        return () => {
            this._sendUnsubscribeMessage(subscriptionDetails);

            if (this.subscriptionsById[id]) {
                this.subscriptionsByCall.delete(this.subscriptionsById[id].call);
                delete this.subscriptionsById[id];
            }
        };
    }

    supportsSubscribe(domainObject) {
        return this._isSupportedObjectType(domainObject.type);
    }

    _addSupportedDataTypes(dataTypes) {
        dataTypes.forEach(dataType => this.supportedDataTypes[dataType] = dataType);
    }

    _addSupportedObjectTypes(types) {
        types.forEach(type => this.supportedObjectTypes[type] = type);
    }

    _buildSubscriptionDetails(domainObject, callback) {
        let subscriptionId = this.lastSubscriptionId++;

        return {
            instance: this.instance,
            subscriptionId: subscriptionId,
            name: idToQualifiedName(domainObject.identifier.key),
            domainObject,
            callback: callback
        };
    }

    _connect() {
        this.socket.onopen(this._onopen.bind(this));
        this.socket.onmessage(this._onmessage.bind(this));
    }

    _isSupportedDataType(type) {
        return this.supportedDataTypes[type];
    }

    _isSupportedObjectType(type) {
        return this.supportedObjectTypes[type];
    }

    _onmessage(event) {
        let data = JSON.parse(event.data);

        if (!this._isSupportedDataType(data.type)) {
            return;
        }

        let isReply = data.type === DATA_TYPES.DATA_TYPE_REPLY;
        let subscriptionDetails;

        if (isReply) {
            let id = data.data.replyTo;
            let call = data.call;
            subscriptionDetails = this.subscriptionsById[id];
            if (!subscriptionDetails) {
                return;
            }

            subscriptionDetails.call = call;
            this.subscriptionsByCall.set(call, subscriptionDetails);
        } else {
            subscriptionDetails = this.subscriptionsByCall.get(data.call);

            // possibly cancelled
            if (!subscriptionDetails) {
                return;
            }

            // only events are handled differently
            if (data.type === DATA_TYPES.DATA_TYPE_EVENTS) {
                subscriptionDetails.callback(data.data);
            } else if (data.data.values) {
                let values = data.data.values;
                let parentName = subscriptionDetails.domainObject.name;

                values.forEach(parameter => {
                    let point = {
                        id: qualifiedNameToId(subscriptionDetails.name),
                        timestamp: parameter[METADATA_TIME_KEY]
                    };
                    let value = getValue(parameter, parentName);

                    if (parameter.engValue.type !== AGGREGATE_TYPE) {
                        point.value = value;
                    } else {
                        point = { ...point, ...value };
                    }

                    addLimitInformation(parameter, point);
                    subscriptionDetails.callback(point);
                });
            }
        }
    }

    _onopen() {
        this._resubscribeToAll();
    }

    resubscribeToAll() {
        Object.values(this.subscriptionsById).forEach((subscriptionDetails) => {
            this._sendSubscribeMessage(subscriptionDetails);
        });
    }
    _sendMessage(message) {
        this.socket.sendOrQueueMessage(message);
    }

    _sendSubscribeMessage(subscriptionDetails) {
        let domainObject = subscriptionDetails.domainObject;
        let message = MESSAGES.SUBSCRIBE[domainObject.type](subscriptionDetails);

        this._sendMessage(message);
    }

    _sendUnsubscribeMessage(subscriptionDetails) {
        let message = MESSAGES.UNSUBSCRIBE(subscriptionDetails);

        this._sendMessage(message);
    }
}
