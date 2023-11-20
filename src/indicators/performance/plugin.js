export default function installYamcsPlugin(realtimeProvider) {
    return function install(openmct) {
        const indicator = openmct.indicators.simpleIndicator();
        indicator.text('~');
        indicator.statusClass('s-status-info');

        openmct.indicators.add(indicator);

        setTimeout(updateStatistics, 1000);

        function updateStatistics() {
            const parametersProcessedPerSecond = (realtimeProvider.statistics.parametersProcessedPerSecond).toString().padStart(4, '0');
            const parametersReceivedPerSecond = (realtimeProvider.statistics.parametersReceivedPerSecond).toString().padStart(4, '0');
            const subscriptionCount = (realtimeProvider.statistics.subscriptionCount).toString().padStart(3, '0');

            indicator.text(`Processed: ${parametersProcessedPerSecond} Received: ${parametersReceivedPerSecond} Subscriptions: ${subscriptionCount}`);

            setTimeout(updateStatistics, 1000);
        }
    };
}
