import {
    idToQualifiedName
} from '../../utils.js';

export default class PollQuestionTelemetry {
    constructor(openmct, {url, instance, processor = 'realtime'}) {
        this._setReady = undefined;
        this._readyPromise = new Promise((resolve) => this._setReady = resolve);
        this._url = url;
        this._instance = instance;
        this._processor = processor;
        this._openmct = openmct;
        this._telemetryObject = undefined;
    }
    setTelemetryObject(telemetryObject) {
        this._telemetryObject = telemetryObject;
        this._setReady();
    }
    async getTelemetryObject() {
        return this._readyPromise.then(() => this._telemetryObject);
    }
    async setPollQuestion(question) {
        const telemetryObject = await this.getTelemetryObject();
        const setParameterUrl = this._buildUrl(telemetryObject.identifier);
        let success  = false;

        try {
            const result = await fetch(setParameterUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'STRING',
                    stringValue: question
                })
            });
            success = result.ok === true;
        } catch (error) {
            console.error(error);
        }

        return success;
    }
    toPollQuestionObjectFromTelemetry(telemetryObject, datum) {
        const metadata = this._openmct.telemetry.getMetadata(telemetryObject);
        const questionMetadata = metadata.getDefaultDisplayValue();
        const timestampMetadata = metadata.valuesForHints(['domain'])[0];
        const questionFormatter = this._openmct.telemetry.getValueFormatter(questionMetadata);
        const dateFormatter = this._openmct.telemetry.getValueFormatter(timestampMetadata);

        return {
            timestamp: dateFormatter.parse(datum),
            question: questionFormatter.parse(datum)
        };

    }
    _buildUrl(id) {
        let url = `${this._url}api/processors/${this._instance}/${this._processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
