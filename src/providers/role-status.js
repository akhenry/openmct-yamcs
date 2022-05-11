import {
    idToQualifiedName
} from '../utils.js';

export default class RoleStatus {
    constructor(openmct, {url, instance, processor = 'realtime'}) {
        this._stateMap = {};
        this._roleToTelemetryObjectMap = {};
        this._setReady = undefined;
        this._readyPromise = new Promise((resolve) => this._setReady = resolve);
        this._url = url;
        this._instance = instance;
        this._processor = processor;
        this._openmct = openmct;
    }
    setPossibleStatusesForRole(role, possibleStates) {
        this._stateMap[role] = possibleStates;
    }
    setTelemetryObjectForRole(role, telemetryObject) {
        this._roleToTelemetryObjectMap[role] = telemetryObject;
    }
    async getTelemetryObjectForRole(role) {
        return this._readyPromise.then(() => this._roleToTelemetryObjectMap[role]);
    }
    async getPossibleStatusesForRole(role) {
        return this._readyPromise.then(() => this._stateMap[role].map(this.toStatusFromMdbEntry));
    }
    async getStatusRoles() {
        return this._readyPromise.then(() => Object.keys(this._stateMap));
    }
    async setStatusForRole(role, status) {
        //TODO Error handling.
        const telemetryObject = await this.getTelemetryObjectForRole(role);
        const setParameterUrl = this._buildUrl(telemetryObject.identifier);

        const result = await fetch(setParameterUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'SINT64',
                sint64Value: status.key
            })
        });
        const resultObject = await result.json();

        return resultObject;
    }
    async getDefaultStatusForRole(role) {
        const possibleStatuses = await this.getPossibleStatusesForRole(role);

        return possibleStatuses[0];
    }
    toStatusFromMdbEntry(yamcsStatus) {
        return {
            key: parseInt(yamcsStatus.value),
            label: yamcsStatus.label
        };
    }
    toStatusFromTelemetry(telemetryObject, datum) {
        const metadata = this._openmct.telemetry.getMetadata(telemetryObject);
        const rangeMetadata = metadata.valuesForHints(['range'])[0];
        const formatter = this._openmct.telemetry.getValueFormatter(rangeMetadata);

        return {
            key: formatter.parse(datum),
            label: formatter.format(datum)
        };

    }
    _buildUrl(id) {
        let url = `${this._url}api/processors/${this._instance}/${this._processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
    ready() {
        this._setReady();
    }
}
