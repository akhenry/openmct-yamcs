import {
    idToQualifiedName
} from '../../utils.js';

export default class RoleStatusTelemetry {
    #stateMap;
    #roleToTelemetryObjectMap;
    #setReady;
    #readyPromise;
    #url;
    #instance;
    #processor;
    #openmct;
    #statusStyles;

    constructor(openmct, {url, instance, processor = 'realtime', styleConfig}) {
        this.#stateMap = {};
        this.#roleToTelemetryObjectMap = {};
        this.#readyPromise = new Promise((resolve) => this.#setReady = resolve);
        this.#url = url;
        this.#instance = instance;
        this.#processor = processor;
        this.#openmct = openmct;
        this.#statusStyles = styleConfig;
    }
    #applyStyling(status) {
        return {...status, ...this.#statusStyles[status.label]};
    }
    #buildUrl(id) {
        let url = `${this.#url}api/processors/${this.#instance}/${this.#processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
    setPossibleStatusesForRole(role, possibleStates) {
        this.#stateMap[role] = possibleStates;
    }
    setTelemetryObjectForRole(role, telemetryObject) {
        this.#roleToTelemetryObjectMap[role] = telemetryObject;
    }
    async getTelemetryObjectForRole(role) {
        return this.#readyPromise.then(() => this.#roleToTelemetryObjectMap[role]);
    }
    async getPossibleStatuses() {
        return this.#readyPromise.then(() => {
            return Object.values(this.#stateMap)[0].map(status => this.toStatusFromMdbEntry(status));
        });
    }
    async getAllStatusRoles() {
        return this.#readyPromise.then(() => Object.keys(this.#stateMap));
    }
    async setStatusForRole(role, status) {
        //TODO Error handling.
        const telemetryObject = await this.getTelemetryObjectForRole(role);
        const setParameterUrl = this.#buildUrl(telemetryObject.identifier);
        let success = false;

        try {
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

            success = result.ok === true;
        } catch (error) {
            console.error(error);
        }

        return success;
    }
    async getDefaultStatusForRole() {
        const possibleStatuses = await this.getPossibleStatuses();

        return possibleStatuses[0];
    }
    toStatusFromMdbEntry(yamcsStatus) {
        return this.#applyStyling({
            key: parseInt(yamcsStatus.value),
            label: yamcsStatus.label
        });
    }
    toStatusFromTelemetry(telemetryObject, datum) {
        const metadata = this.#openmct.telemetry.getMetadata(telemetryObject);
        const rangeMetadata = metadata.valuesForHints(['range'])[0];
        const formatter = this.#openmct.telemetry.getValueFormatter(rangeMetadata);

        return this.#applyStyling({
            key: formatter.parse(datum),
            label: formatter.format(datum)
        });

    }
    dictionaryLoadComplete() {
        this.#setReady();
    }
}
