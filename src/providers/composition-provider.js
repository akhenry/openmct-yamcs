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

export default class YamcsCompositionProvider {
    #openmct;
    #yamcsObjectProvider;
    #yamcsNamespace;

    constructor(openmct, yamcsObjectProvider, yamcsNamespace) {
        this.#openmct = openmct;
        this.#yamcsObjectProvider = yamcsObjectProvider;
        this.#yamcsNamespace = yamcsNamespace;
    }

    appliesTo(domainObject) {
        return (domainObject?.identifier?.namespace === this.#yamcsNamespace) && (domainObject.type === 'folder');
    }

    async load(domainObject) {
        if (domainObject.type === 'folder') {
            // we're a space system
            await this.#yamcsObjectProvider.loadParametersForSpaceSystem(domainObject);
            const loadedObject = await this.#yamcsObjectProvider.get(domainObject.identifier);
            console.debug(`🍎 Loading space system composition for ${domainObject.identifier.key}`, loadedObject);

            return loadedObject.composition ?? [];
        } else {
            // we're a parameter
            const loadedObject = await this.#yamcsObjectProvider.get(domainObject.identifier);
            console.debug(`🍊 Loading parameter composition for ${domainObject.identifier.key}`, loadedObject);

            return loadedObject.composition ?? [];
        }

    }
}
