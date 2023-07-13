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
    constructor(openmct, {userEndpoint, roleStatus, latestTelemetryProvider, realtimeTelemetryProvider, pollQuestionParameter, pollQuestionTelemetry}) {
        super();

        this.openmct = openmct;
        this.userEndpoint = userEndpoint;
        this.user = undefined;
        this.loggedIn = false;
        this.roleStatus = roleStatus;
        this.pollQuestionParameter = pollQuestionParameter;
        this.pollQuestionTelemetry = pollQuestionTelemetry;
        this.unsubscribeStatus = {};

        this.latestTelemetryProvider = latestTelemetryProvider;
        this.realtimeTelemetryProvider = realtimeTelemetryProvider;

        this.YamcsUser = createYamcsUser(openmct.user.User);
        this.openmct.once('destroy', () => {
            const subscriptions = Object.values(this.unsubscribeStatus);
            if (subscriptions.length > 0) {
                subscriptions.forEach(unsubscribe => unsubscribe());
            }

            if (this.unsubscribePollQuestion !== undefined) {
                this.unsubscribePollQuestion();
            }
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getCurrentUser() {
        if (!this.loginPromise) {
            this.loginPromise = this.#getUserInfo();
        }

        return this.loginPromise;
    }

    async getStatusRoleForCurrentUser() {
        const user = await this.getCurrentUser();
        const userRoles = user.roles || [];
        const statusRoles = await this.roleStatus.getAllStatusRoles();

        return statusRoles.find(statusRole => userRoles.includes(statusRole));
    }

    async canProvideStatusForRole(role) {
        const statusRoles = await this.roleStatus.getAllStatusRoles();

        return statusRoles.includes(role);
    }

    async getPossibleRoles() {
        const user = await this.getCurrentUser();

        return user.roles;
    }

    async hasRole(roleName) {
        const user = await this.getCurrentUser();

        return user.roles.some(role => {
            return role.name === roleName;
        });
    }

    async canSetPollQuestion() {
        const user = await this.getCurrentUser();
        const writeParameters = user.getWriteParameters();

        const areParametersPollQuestion = await Promise.all(
            writeParameters.map(parameterName => this.pollQuestionParameter.isPollQuestionParameterName(parameterName))
        );

        return areParametersPollQuestion.some(isParameterPollQuestion => isParameterPollQuestion);
    }

    async setPollQuestion(question) {
        const success = await this.pollQuestionTelemetry.setPollQuestion(question);

        return success;
    }

    async getStatusForRole(role) {
        const statusTelemetryObject = await this.roleStatus.getTelemetryObjectForRole(role);
        if (this.unsubscribeStatus[role] === undefined) {
            this.unsubscribeStatus[role] = this.realtimeTelemetryProvider.subscribe(statusTelemetryObject, (datum) => {
                this.emit('statusChange', {
                    role,
                    status: this.roleStatus.toStatusFromTelemetry(statusTelemetryObject, datum)
                });
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

    async getDefaultStatusForRole(role) {
        const status = await this.roleStatus.getDefaultStatusForRole(role);

        return status;
    }

    async setStatusForRole(role, status) {
        const success = await this.roleStatus.setStatusForRole(role, status);

        return success;
    }

    async getPossibleStatuses() {
        const possibleStatuses = await this.roleStatus.getPossibleStatuses();

        return possibleStatuses;
    }

    async getPollQuestion() {
        const pollQuestionTelemetryObject = await this.pollQuestionTelemetry.getTelemetryObject();

        if (this.unsubscribePollQuestion === undefined) {
            this.unsubscribePollQuestion = this.realtimeTelemetryProvider.subscribe(pollQuestionTelemetryObject, (datum) => {
                const formattedPollQuestion = this.pollQuestionTelemetry.toPollQuestionObjectFromTelemetry(pollQuestionTelemetryObject, datum);
                this.emit("pollQuestionChange", formattedPollQuestion);
            });
        }

        const pollQuestionTelemetryValue = await this.latestTelemetryProvider.requestLatest(pollQuestionTelemetryObject);
        if (pollQuestionTelemetryValue !== undefined) {
            return this.pollQuestionTelemetry.toPollQuestionObjectFromTelemetry(pollQuestionTelemetryObject, pollQuestionTelemetryValue);
        }
    }

    async getAllStatusRoles() {
        const statusRoles = await this.roleStatus.getAllStatusRoles();

        return statusRoles;
    }

    async getRolesInStatus(status) {
        const statusRoles = await this.roleStatus.getAllStatusRoles();
        const telemetryObjects = await Promise.all(statusRoles.map(role => this.roleStatus.getTelemetryObjectForRole(role)));
        const latestTelemetryValues = await Promise.all(telemetryObjects.map(telemetryObject => this.latestTelemetryProvider.requestLatest(telemetryObject)));
        const latestStatuses = latestTelemetryValues.map((statusTelemetry, i) => this.roleStatus.toStatusFromTelemetry(telemetryObjects[i], statusTelemetry));

        return latestStatuses.reduce((rolesInStatus, thisStatus, i) => {
            if (thisStatus.key === status) {
                rolesInStatus.push(statusRoles[i]);
            }

            return rolesInStatus;
        }, []);
    }

    async #getUserInfo() {
        try {
            const res = await fetch(this.userEndpoint);
            const info = await res.json();

            this.user = new this.YamcsUser(info);
            this.loggedIn = true;
        } catch (error) {
            throw new Error(error);
        }

        return this.user;
    }

}

