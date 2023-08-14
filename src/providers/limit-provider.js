/* CSS classes for Yamcs parameter monitoring result values. */

import {getLimitFromAlarmRange, idToQualifiedName} from "../utils";

const MONITORING_RESULT_CSS = {
    'WATCH': 'is-limit--yellow',
    'WARNING': 'is-limit--yellow',
    'DISTRESS': 'is-limit--red',
    'CRITICAL': 'is-limit--red',
    'SEVERE': 'is-limit--red'
};

/* CSS classes for Yamcs range condition values. */
const RANGE_CONDITION_CSS = {
    'LOW': 'is-limit--lwr',
    'HIGH': 'is-limit--upr'
};

/**
 * @typedef {Object} Datum
 * @property {number} [monitoringResult] the Yamcs limit monitoring result
 * @property {number} [rangeCondition] the Yamcs range condition (LOW/HIGH)
 * @property {Array} alarmRange alarm ranges for different monitoringresults, or omitted, if no alarm ranges are defined
 *                              A floating point value representing some observable quantity (eg.temperature, air pressure, etc.)
 */

/**
 * @typedef {Object} EvaluationResult
 * @property {string} cssClass CSS class information
 * @property {string} name a violation name
 * @property {number} low a lower limit for violation
 * @property {number} high a higher limit violation
 */
export default class LimitProvider {
    constructor(openmct, url, instance, realtimeTelemetryProvider) {
        this.openmct = openmct;
        this.realtimeTelemetryProvider = realtimeTelemetryProvider;
        this.url = url;
        this.instance = instance;
    }

    getLimitEvaluator(domainObject) {
        const self = this;

        return {
            /**
             * Evaluates a telemetry datum for limit violations.
             *
             * @param {Datum} datum the telemetry datum from the historical or realtime plugin ({@link Datum})
             * @param {object} valueMetadata metadata about the telemetry datum
             *
             * @returns {EvaluationResult} ({@link EvaluationResult})
             */
            evaluate: function (datum, valueMetadata) {
                if (valueMetadata && datum.monitoringResult
                        && datum.monitoringResult in MONITORING_RESULT_CSS) {
                    let evaluationResult;

                    if (datum.rangeCondition
                            && datum.rangeCondition in RANGE_CONDITION_CSS) {
                        evaluationResult = self.getLimitRange(datum, datum.monitoringResult, valueMetadata);
                    }

                    return evaluationResult;
                }
            }
        };
    }

    /**
     * Adds limit range information to an object based on the monitoring
     * result.
     *
     * @param {Datum} datum the telemetry datum from the historical or realtime plugin ({@link Datum})
     * @param {string} result the monitoring result information from Yamcs
     * @param {object} [valueMetadata] metadata about the telemetry datum
     *
     * @returns {EvaluationResult} ({@link EvaluationResult})
     */
    getLimitRange(datum, result, valueMetadata) {
        if (!valueMetadata) {
            return undefined;
        }

        if (valueMetadata.key === 'value') {
            return {
                cssClass: MONITORING_RESULT_CSS[datum.monitoringResult] + ' ' + RANGE_CONDITION_CSS[datum.rangeCondition],
                name: datum.monitoringResult,
                low: Number.NEGATIVE_INFINITY,
                high: Number.POSITIVE_INFINITY
            };
        }

        return undefined;
    }

    supportsLimits(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    getLimits(domainObject, options = {}) {
        return {
            limits: async () => {
                let limits = await this.getLimitOverrides(domainObject, options);
                if (Object.keys(limits).length === 0) {
                    limits = domainObject.configuration.limits;
                }

                return limits;
            }
        };
    }

    subscribeToLimits(domainObject, callback) {
        return this.realtimeTelemetryProvider.subscribeToLimits(domainObject, callback);
    }

    async requestLimitOverride(domainObject, options) {
        if (options.signal) {
            console.log('request limits', domainObject.name, options.signal);
            options.signal.addEventListener('abort', () => {
                console.log('aborted');
            });
        }
        const id = domainObject.identifier.key;
        let json;
        let url = `${this.url}api/mdb-overrides/${this.instance}/realtime`;
        url += '/parameters' + idToQualifiedName(id);

        try {
            const response = await fetch(encodeURI(url), options);
            json = await response.json();
        } catch (error) {
            if (error.name !== 'AbortError') {
                throw error;
            }
        }

        return json;
    }

    async getLimitOverrides(domainObject, options) {
        const response = await this.requestLimitOverride(domainObject, options);

        const alarmRange = response?.defaultAlarm?.staticAlarmRange ?? [];

        return getLimitFromAlarmRange(alarmRange);
    }
}
