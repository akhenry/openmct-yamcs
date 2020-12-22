/* CSS classes for Yamcs parameter monitoring result values. */
const MONITORING_RESULT_CSS = {
    'WATCH': 'is-limit--yellow',
    'WARNING': 'is-limit--yellow',
    'DISTRESS': 'is-limit--red',
    'CRITICAL': 'is-limit--red',
    'SEVERE': 'is-limit--red'
}

/* CSS classes for Yamcs range condition values. */
const RANGE_CONDITION_CSS = {
    'LOW': 'is-limit--lwr',
    'HIGH': 'is-limit--upr'
}

export default class LimitProvider {
    getLimitEvaluator(domainObject) {
        const self = this;

        return {
            /*
             * Evaluates a telemetry point for limit violations.
             *
             * Parameters:
             *     datum: the telemetry point data from the historical or realtime
             *            plugin
             *     valueMetadata: metadata about the telemetry point
             *
             * Returns:
             *     an object with CSS class information, a violation name, and
             *     range information, if there is a limit violates, or nothing,
             *     if the value is within limits.
             *
             * The datum parameter may include the following information:
             *     monitoringResult: the Yamcs limit monitoring result, if any
             *     rangeCondition: the Yamcs range condition (LOW/HIGH), if any
             *     alarmRange: an array of alarm ranges for different monitoring
             *         results, or omitted, if no alarm ranges are defined
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

    /*
     * Adds limit range information to an object based on the monitoring
     * result.
     *
     * Parameters:
     *     datum: the telemetry point data from the historical or realtime
     *            plugin
     *     result: the monitoring result information from Yamcs
     *     valueMetadata: metadata about the telemetry point
     *
     * Returns: the object that is to be the result of the
     *          limit evaluation
     */
    getLimitRange(datum, result, valueMetadata) {
        const key = valueMetadata && valueMetadata.key;
        if (key === undefined) {
            return;
        }

        const range = this.findAlarmRange(datum, result);
        if (range === undefined) {
            return;
        }

        const evaluationResult = {
            cssClass: MONITORING_RESULT_CSS[datum.monitoringResult] + ' ' + RANGE_CONDITION_CSS[datum.rangeCondition],
            name: datum.monitoringResult,
            low: Number.NEGATIVE_INFINITY,
            high: Number.POSITIVE_INFINITY
        };

        if (datum[key] >= range.minInclusive || datum[key] > range.minExclusive) {
            evaluationResult.low = range.minInclusive;

            return evaluationResult;
        }

        if (datum[key] <= range.maxInclusive || datum[key] < range.maxExclusive) {
            evaluationResult.high = range.maxInclusive;

            return evaluationResult;
        }

        return;
    }

    /*
     * Finds the appropriate limit range for a monitoring results.
     */
    findAlarmRange(datum, result) {
        if (datum.alarmRange !== undefined) {
            return datum.alarmRange.find(range => range.level == result);
        }
    }

    supportsLimits(domainObject) {
        return domainObject.type.startsWith('yamcs.');
    }
}
