/* CSS classes for Yamcs parameter monitoring result values. */

const SEVERITY_CSS = {
    'WATCH': 'is-limit--yellow',
    'WARNING': 'is-limit--yellow',
    'DISTRESS': 'is-limit--red',
    'CRITICAL': 'is-limit--red',
    'SEVERE': 'is-limit--red'
};

/**
 * @typedef {Object} EvaluationResult
 * @property {string} cssClass CSS class information
 * @property {string} name a severity name
 */
export default class EventLimitProvider {
    constructor(openmct) {
        this.openmct = openmct;
    }

    getLimitEvaluator(domainObject) {
        const self = this;

        return {
            /**
             * Evaluates a telemetry datum for severity.
             *
             * @param {Datum} datum the telemetry datum from the historical or realtime plugin ({@link Datum})
             * @param {object} valueMetadata metadata about the telemetry datum
             *
             * @returns {EvaluationResult} ({@link EvaluationResult})
             */
            evaluate: function (datum, valueMetadata) {
                if (valueMetadata && datum.severity in SEVERITY_CSS) {
                    return self.getSeverity(datum, valueMetadata);
                }
            }

        };
    }
    getSeverity(datum, valueMetadata) {
        if (!valueMetadata) {
            return;
        }

        const severityValue = datum.severity;

        return {
            cssClass: SEVERITY_CSS[severityValue],
            name: severityValue
        };

    }

    supportsLimits(domainObject) {
        return domainObject.type.startsWith('yamcs.events');
    }
}
