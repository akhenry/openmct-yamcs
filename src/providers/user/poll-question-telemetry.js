import {
    idToQualifiedName
} from '../../utils.js';

export default class PollQuestionTelemetry {
    #setReady;
    #readyPromise;
    #url;
    #instance;
    #processor;
    #openmct;
    #telemetryObject;

    constructor(openmct, {url, instance, processor = 'realtime'}) {
        this.#readyPromise = new Promise((resolve) => this.#setReady = resolve);
        this.#url = url;
        this.#instance = instance;
        this.#processor = processor;
        this.#openmct = openmct;
    }
    setTelemetryObject(telemetryObject) {
        this.#telemetryObject = telemetryObject;
        this.#setReady();
    }
    async getTelemetryObject() {
        return this.#readyPromise.then(() => this.#telemetryObject);
    }
    async setPollQuestion(question) {
        const telemetryObject = await this.getTelemetryObject();
        const setParameterUrl = this.#buildUrl(telemetryObject.identifier);
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
        const metadata = this.#openmct.telemetry.getMetadata(telemetryObject);
        const questionMetadata = metadata.getDefaultDisplayValue();
        const timestampMetadata = metadata.valuesForHints(['domain'])[0];
        const questionFormatter = this.#openmct.telemetry.getValueFormatter(questionMetadata);
        const dateFormatter = this.#openmct.telemetry.getValueFormatter(timestampMetadata);

        return {
            timestamp: dateFormatter.parse(datum),
            question: questionFormatter.parse(datum)
        };

    }
    #buildUrl(id) {
        let url = `${this.#url}api/processors/${this.#instance}/${this.#processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
