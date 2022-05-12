/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
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

import createYamcsUser from './createYamcsUser';
import { EventEmitter } from 'eventemitter3';

export default class UserProvider extends EventEmitter {
    constructor(openmct, {userEndpoint, roleStatus, latestTelemetryProvider, realtimeProvider}) {
        super();

        this.openmct = openmct;
        this.userEndpoint = userEndpoint;
        this.user = undefined;
        this.loggedIn = false;
        this.roleStatus = roleStatus;
        this.latestTelemetryProvider = latestTelemetryProvider;
        this.realtimeTelemetryProvider = realtimeProvider;

        this.YamcsUser = createYamcsUser(openmct.user.User);
        this.openmct.once('destroy', () => {
            if (this.unsubscribe !== undefined) {
                this.unsubscribe();
            }
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getCurrentUser() {
        if (!this.loginPromise) {
            this.loginPromise = this._getUserInfo();
        }

        return this.loginPromise;
    }

    async getActiveStatusRole() {
        const user = await this.getCurrentUser();
        const userRoles = user.roles || [];
        const statusRoles = await this.roleStatus.getStatusRoles();

        return statusRoles.find(statusRole => userRoles.includes(statusRole));
    }

    async canProvideStatus() {
        const activeStatusRole = await this.getActiveStatusRole();

        return activeStatusRole !== undefined;
    }

    async hasRole(roleName) {
        const user = await this.getCurrentUser();

        return user.roles.some(role => {
            return role.name === roleName;
        });
    }

    async getPollQuestion() {
        return Promise.resolve({
            question: 'Do the thing?',
            timestamp: Date.now()
        });
    }

    async setPollQuestion() {
        return Promise.resolve(true);
    }

    async getStatus() {
        const role = await this.getActiveStatusRole();
        const statusTelemetryObject = await this.roleStatus.getTelemetryObjectForRole(role);
        if (this.unsubscribe === undefined) {
            this.unsubscribe = this.realtimeTelemetryProvider.subscribe(statusTelemetryObject, (datum) => {
                this.emit('statusChange', this.roleStatus.toStatusFromTelemetry(statusTelemetryObject, datum));
            });
        }
        const status = await this.latestTelemetryProvider.requestLatest(statusTelemetryObject);
        if (status !== undefined) {
            return this.roleStatus.toStatusFromTelemetry(statusTelemetryObject, status);
        } else {
            const defaultStatus = await this.roleStatus.getDefaultStatusForRole(role);

            return defaultStatus;
        }

    }

    async setStatus(status) {
        const role = await this.getActiveStatusRole();

        return this.roleStatus.setStatusForRole(role, status);
    }

    async getPossibleStatuses() {
        const activeStatusRole = await this.getActiveStatusRole();

        return this.roleStatus.getPossibleStatusesForRole(activeStatusRole);
    }

    async _getUserInfo() {
        try {
            const res = await fetch(this.userEndpoint);
            const info = await res.json();

            this.user = new this.YamcsUser(info);
            this.loggedIn = true;
        } catch(error) {
            throw new Error(error);
        }

        return this.user;
    }

}

