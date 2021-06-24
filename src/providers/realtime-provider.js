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

import * as MESSAGES from './messages';
import {
    idToQualifiedName,
    qualifiedNameToId,
    getValue,
    addLimitInformation
} from '../utils.js';

const FALLBACK_AND_WAIT_MS = [1000, 5000, 5000, 10000, 10000, 30000];

export default class RealtimeProvider {
    constructor(url, instance, types) {
        this.url = url;
        this.instance = instance;
        this.supportedTypes = {};
        this.connected = false;
        this.requests = [];
        this.currentWaitIndex = 0;
        this.lastSubscriptionId = 1;
        this.subscriptions = new Map();

        this.addSupportedTypes(types);
    }

    addSupportedTypes(types) {
        types.forEach(type => this.supportedTypes[type] = type);
    }

    supportsSubscribe(domainObject) {
        return this.supportedTypes[domainObject.type];
    }

    subscribe(domainObject, callback) {
        let subscriptionDetails;
        let objectKey;

        subscriptionDetails = this.buildSubscriptionDetails(domainObject, callback);
        objectKey = domainObject.identifier.key;

        this.subscriptions.set(objectKey, subscriptionDetails);

        if (this.connected) {
            this.sendSubscribeMessage(subscriptionDetails);
        }

        return () => {
            this.sendUnsubscribeMessage(subscriptionDetails);
            this.subscriptions.delete(objectKey);
        };
    }

    buildSubscriptionDetails(domainObject, callback) {
        let subscriptionId = this.lastSubscriptionId++;

        return {
            instance: this.instance,
            subscriptionId: subscriptionId,
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
        let domainObject = subscriptionDetails.domainObject;
        let message = MESSAGES.UNSUBSCRIBE[domainObject.type](subscriptionDetails);

        this.sendOrQueueMessage(message);
    }

    resubscribeToAll() {

    }


}
