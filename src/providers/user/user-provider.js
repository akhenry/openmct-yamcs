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

export default class UserProvider {
    constructor(openmct, userEndpoint, roleStatus) {
        this.openmct = openmct;
        this.userEndpoint = userEndpoint;
        this.user = undefined;
        this.loggedIn = false;
        this.roleStatus = roleStatus;

        this.YamcsUser = createYamcsUser(openmct.user.User);
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
        return Promise.resolve({
            key: "NO_STATUS",
            label: "No Status",
            iconClass: "icon-info"
        });
    }

    async setStatus() {
        return Promise(true);
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

/**
        //await this.openmct.user.getActiveStatusRole();
        //async canProvideStatus()
        //async fetchPossibleStatusesForUser()
        //async getPollQuestion()
        setPollQuestion(pollQuestion)
        async fetchMyStatus()
 */
