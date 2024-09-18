/* eslint-disable func-style */
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
import { getValue } from '../../utils.js';

/**
 * Converts fault data to a FaultModel.
 * 
 * @param {Object} faultData
 * @param {string} [type]
 * @returns {FaultModel}
 */
const convertDataToFaultModel = (faultData, type) => {
    const parameterDetail = faultData?.parameterDetail;
    const currentValueDetail = parameterDetail?.currentValue;
    const triggerValueDetail = parameterDetail?.triggerValue;

    const currentValue = currentValueDetail ? getValue(currentValueDetail) : undefined;
    const triggerValue = triggerValueDetail ? getValue(triggerValueDetail) : undefined;

    return {
        type: type || faultData?.type,
        fault: {
            acknowledged: Boolean(faultData?.acknowledged),
            currentValueInfo: {
                value: currentValue,
                rangeCondition: currentValueDetail?.rangeCondition,
                monitoringResult: currentValueDetail?.monitoringResult
            },
            id: `id-${faultData?.id?.namespace}-${faultData?.id?.name}`,
            name: faultData?.id?.name,
            namespace: faultData?.id?.namespace,
            seqNum: faultData?.seqNum,
            severity: faultData?.severity,
            shelved: Boolean(faultData?.shelveInfo),
            shortDescription: parameterDetail?.parameter?.shortDescription,
            triggerTime: faultData?.triggerTime,
            triggerValueInfo: {
                value: triggerValue,
                rangeCondition: triggerValueDetail?.rangeCondition,
                monitoringResult: triggerValueDetail?.monitoringResult
            }
        }
    };
};

export { convertDataToFaultModel };

/**
 * @typedef {Object} FaultModel
 * @property {string} type
 * @property {Object} fault
 * @property {boolean} fault.acknowledged
 * @property {Object} fault.currentValueInfo
 * @property {*} fault.currentValueInfo.value
 * @property {string} fault.currentValueInfo.rangeCondition
 * @property {string} fault.currentValueInfo.monitoringResult
 * @property {string} fault.id
 * @property {string} fault.name
 * @property {string} fault.namespace
 * @property {number} fault.seqNum
 * @property {string} fault.severity
 * @property {boolean} fault.shelved
 * @property {string} fault.shortDescription
 * @property {number} fault.triggerTime
 * @property {Object} fault.triggerValueInfo
 * @property {*} fault.triggerValueInfo.value
 * @property {string} fault.triggerValueInfo.rangeCondition
 * @property {string} fault.triggerValueInfo.monitoringResult
 */