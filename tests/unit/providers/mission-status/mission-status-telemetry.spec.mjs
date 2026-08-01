/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2024, United States Government
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

/*
 * getDefaultStatusForAction is only reached (via UserProvider#getStatusForMissionAction)
 * when a mission-status parameter has no telemetry value yet -- i.e. before it's ever been
 * set. missionStatus.e2e.spec.mjs always sets a value before reading one back, so this
 * fallback path isn't exercised there; tested directly here instead.
 */

import { describe, it, expect } from 'vitest';

import MissionStatusTelemetry from '../../../../src/providers/mission-status/mission-status-telemetry.js';

describe('MissionStatusTelemetry#getDefaultStatusForAction', () => {
    it('returns the first possible status when no telemetry value has been set yet', async () => {
        const telemetry = new MissionStatusTelemetry({}, { url: 'http://localhost:8090/', instance: 'myproject' });

        telemetry.addStatus({ value: '0', label: 'NO GO' });
        telemetry.addStatus({ value: '1', label: 'GO' });
        telemetry.dictionaryLoadComplete();

        await expect(telemetry.getDefaultStatusForAction('drivingStatus')).resolves.toEqual({ key: 0, label: 'NO GO' });
    });
});
