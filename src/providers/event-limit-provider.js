/* CSS classes for Yamcs parameter monitoring result values. */

const SEVERITY_CSS = {
    'WATCH': 'is-event--yellow',
    'WARNING': 'is-event--yellow',
    'DISTRESS': 'is-event--red',
    'CRITICAL': 'is-event--red',
    'SEVERE': 'is-event--red'
};

const NOMINAL_SEVERITY = {
    cssClass: 'is-event--no-style',
    name: 'NOMINAL'
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
                // prevent applying the class to the tr, only to td
                if (!valueMetadata) {
                    return;
                }

                if (datum.severity in SEVERITY_CSS) {
                    return self.getSeverity(datum, valueMetadata);
                }

                return NOMINAL_SEVERITY;
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
