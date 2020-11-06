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
import { NAMESPACE_TAXONOMY } from "../const";

function MoveActionPolicy() {
}

MoveActionPolicy.prototype.allow = function (action, context) {
    let isAllowed = true;

    console.log(action, context);

    if (action.getMetadata().key === 'move') {
        let identifier;

        if (context) {
            let object = context.selectedObject || context.domainObject;
            identifier = object.identifier;
        }

        if (identifier &&
            identifier.namespace &&
            (identifier.namespace === NAMESPACE_TAXONOMY)) {
            isAllowed = false;
        }
    }

    return isAllowed;
};

export default MoveActionPolicy;
