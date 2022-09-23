/* CSS classes for Yamcs parameter monitoring result values. */
import { idToQualifiedName } from "../utils";
import limitConfig from "../limits-config.json";

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
    constructor(openmct, url, instance) {
        this.url = url;
        this.instance = instance;
        this.openmct = openmct;
    }

    getLimitEvaluator(domainObject) {
        const self = this;

        return {
            /**
             * Evaluates a telemetry point for limit violations.
             *
             * @param {Datum} datum the telemetry point data from the historical or realtime plugin ({@link Datum})
             * @param {object} valueMetadata metadata about the telemetry point
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
     * @param {Datum} datum the telemetry point data from the historical or realtime plugin ({@link Datum})
     * @param {string} result the monitoring result information from Yamcs
     * @param {object} [valueMetadata] metadata about the telemetry point
     *
     * @returns {EvaluationResult} ({@link EvaluationResult})
     */
    getLimitRange(datum, result, valueMetadata) {
        if (!valueMetadata) {
            return;
        }

        if (valueMetadata.key === 'value') {
            return {
                cssClass: MONITORING_RESULT_CSS[datum.monitoringResult] + ' ' + RANGE_CONDITION_CSS[datum.rangeCondition],
                name: datum.monitoringResult,
                low: Number.NEGATIVE_INFINITY,
                high: Number.POSITIVE_INFINITY
            };
        }

        return;
    }

    supportsLimits(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }

    async getLimitsForParameter(id, fullId) {
        let url = `${this.url}api/archive/${this.instance}`;
        url += '/parameters' + idToQualifiedName(id);
        url += '?limit=1&order=desc';

        let convertToLimits = (results) => this.convertToLimits(fullId, results);

        const res = await fetch(encodeURI(url));
        const results = await res.json();

        return convertToLimits(results);
    }

    convertToLimits(id, results) {
        if (!(results.parameter)
            || (results.parameter.length <= 0)
            || !(results.parameter[0].alarmRange)) {
            return {};
        }

        return this.getLimitFromAlarmRange(id, results.parameter[0].alarmRange);
    }

    getLimitFromAlarmRange(id, alarmRange) {
        let limits = {};
        alarmRange.forEach(alarm => {
            limits[alarm.level] = {
                low: {
                    color: limitConfig[alarm.level],
                    value: alarm.minInclusive || alarm.minExclusive
                },
                high: {
                    color: limitConfig[alarm.level],
                    value: alarm.maxInclusive || alarm.maxExclusive
                }
            };
        });

        return limits;
    }

    getLimits(domainObject) {
        const limits = this.getLimitsForParameter(domainObject.identifier.key, this.openmct.objects.makeKeyString(domainObject.identifier));

        return {
            limits: function () {
                return limits;
            }
        };
    }
}
