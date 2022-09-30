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

export default function createYamcsUser(UserClass) {
    /**
     * @typedef {Object} YamcsUserInfo
     * @property {String} name
     * @property {Boolean} active
     * @property {Boolean} superuser
     * @property {String} creationTime an ISO 8601 string
     * @property {String} confirmationTime an ISO 8601 string
     * @property {String} lastLoginTime an ISO 8601 string
     * @property {String[]} roles
     * @property {ObjectPrivilege[]} objectPrivilege
     * See the Yamcs documentation for more details on the Yamcs User type
     * @see https://docs.yamcs.org/javadoc/yamcs/latest/org/yamcs/security/User.html
     */
    /**
     * @typedef ObjectPrivilege
     * @property {String} type
     * @property {String[]} object An array of parameter identifiers
     */
    return class YamcsUser extends UserClass {
        /**
         * @param {YamcsUserInfo} userInfo
         */
        constructor({
            name,
            active,
            superuser,
            creationTime,
            confirmationTime,
            lastLoginTime,
            roles = [],
            objectPrivilege
        }) {
            super(name, name); // id, name (yamcs doesn't provide an id)

            this.active = active;
            this.superuser = superuser;
            this.creationTime = creationTime;
            this.confirmationTime = confirmationTime;
            this.lastLoginTime = lastLoginTime;
            this.roles = roles.map(role => role.name);
            this.objectPrivileges = objectPrivilege;
        }

        getWriteParameters() {
            if (!this.objectPrivileges) {
                return [];
            }

            const writeParameters = this.objectPrivileges.find(entry => entry.type === 'WriteParameter')?.object || [];

            return writeParameters;
        }
    };
}
