import {
    idToQualifiedName,
    getValue} from '../utils.js';

export default class YamcsHistoricalTelemetryProvider {
    constructor(url, instance) {
        this.url = url;
        this.instance = instance;
    }

    supportsRequest(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    request(domainObject, options) {
        return this.getHistory(domainObject.identifier.key,
            options.start,
            options.end,
            options.size);
    }

    getHistory(id, start, end, size=300) {
        let url = this.url + 'api/archive/' + this.instance + '/parameters' + idToQualifiedName(id);
        url += '?start=' + (new Date(start).toISOString());
        url += '&stop=' + (new Date(end).toISOString());
        url += '&limit=' + size;
        url += "&order=asc";

        return fetch(encodeURI(url))
            .then(res => {return res.json();})
            .then(res => {
                if (!('continuationToken' in res)) {
                    return this.convertPointHistory(id, res);
                } else {
                    return this.getSampleHistory(id, start, end, size);
                }
            });
    }

    getSampleHistory(id, start, end, size=300) {
        let url = this.url + 'api/archive/' + this.instance + '/parameters' + idToQualifiedName(id);
        url += '/samples';
        url += '?start=' + (new Date(start).toISOString());
        url += '&stop=' + (new Date(end).toISOString());
        url += '&count=' + size;
        url += "&order=asc";

        return fetch(encodeURI(url))
            .then(res => {return res.json();})
            .then(res => {return this.convertSampleHistory(id, res);});
    }

    convertPointHistory(id, results) {
        if (!('parameter' in results)) {
            return [];
        }

        let values = [];
        results.parameter.forEach(parameter => {
            let point = {
                id: parameter.id.name,
                timestamp: parameter.generationTimeUTC,
                value: getValue(parameter.engValue)
            };
            values.push(point);
        });

        return values;
    }

    convertSampleHistory(id, results) {
        if (!('sample' in results)) {
            return [];
        }

        let values = [];
        if ('sample' in results) {
            results.sample.forEach(sample => {
                if (sample.n > 0) {
                    let min_value = {
                        timestamp: sample.time,
                        value: sample.min,
                        id: id
                    };
                    values.push(min_value);
                }

                if (sample.n > 1) {
                    let max_value = {
                        timestamp: sample.time,
                        value: sample.max,
                        id: id
                    };
                    values.push(max_value);
                }
            });
        }

        return values;
    }

}
