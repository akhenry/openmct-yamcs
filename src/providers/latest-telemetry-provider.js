import {
    getValue,
    idToQualifiedName
} from '../utils.js';

export default class LatestTelemetryProvider {
    constructor({url, instance, processor = 'realtime'}) {
        this.url = url;
        this.instance = instance;
        this.processor = processor;
    }
    async requestLatest(domainObject) {
        const url = this._buildUrl(domainObject.identifier);
        const response = await fetch(url);

        let result = await response.json();
        let openMctStyleDatum = undefined;

        if (result !== undefined) {
            if (result.acquisitionStatus !== undefined) {
                openMctStyleDatum = {
                    id: result.id.name,
                    timestamp: result.generationTimeUTC,
                    value: getValue(result)
                };
            }
        }

        return openMctStyleDatum;
    }
    _buildUrl(id) {
        let url = `${this.url}api/processors/${this.instance}/${this.processor}/parameters/${idToQualifiedName(id.key)}`;

        return url;
    }
}
