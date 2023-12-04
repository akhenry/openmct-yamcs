export default function installYamcsPlugin(realtimeProvider) {
    return function install(openmct) {
        const performanceStatisticsWindow = createPerformanceStatisticsNode();
        const tableElements = {
            processed: performanceStatisticsWindow.querySelector("td[data-performanceId='processed']"),
            subscriptions: performanceStatisticsWindow.querySelector("td[data-performanceId='subscriptions']"),
            longestQueue: performanceStatisticsWindow.querySelector("td[data-performanceId='longest-queue']"),
            serializedServiced: performanceStatisticsWindow.querySelector("td[data-performanceId='serialized-serviced']")
        };
        // const indicator = openmct.indicators.simpleIndicator();
        // indicator.text('~');
        // indicator.statusClass('s-status-info');

        // openmct.indicators.add(indicator);

        openmct.on('start', installPerformanceWindow);

        setTimeout(updateStatistics, 1000);

        function updateStatistics() {
            const parametersProcessedPerSecond = (realtimeProvider.statistics.parametersProcessedPerSecond).toString();
            // const parametersReceivedPerSecond = (realtimeProvider.statistics.parametersReceivedPerSecond).toString().padStart(4, '0');
            const subscriptionCount = (realtimeProvider.statistics.subscriptionCount).toString();
            const longestQueueLength = (realtimeProvider.statistics.longestQueueLength).toString();

            tableElements.processed.innerText = parametersProcessedPerSecond;
            tableElements.subscriptions.innerText = subscriptionCount;
            tableElements.longestQueue.innerText = longestQueueLength;

            //performanceStatisticsWindow.innerText = `Processed: ${parametersProcessedPerSecond} \r\n Subscriptions: ${subscriptionCount}\r\n Longest Queue: ${longestQueueLength}`;
            //indicator.text(`Processed: ${parametersProcessedPerSecond} Subscriptions: ${subscriptionCount} Longest Queue: ${longestQueueLength}`);

            setTimeout(updateStatistics, 1000);
        }

        function createPerformanceStatisticsNode() {
            const persistedTop = localStorage.getItem('performance-statistics-top');
            const persistedRight = localStorage.getItem('performance-statistics-right');

            const performanceStatisticsNode = document.createElement('div');
            performanceStatisticsNode.id = 'performance-statistics';
            performanceStatisticsNode.style.position = 'absolute';
            performanceStatisticsNode.style.bottom = persistedTop ? 'auto' : '0';
            performanceStatisticsNode.style.top = persistedTop || 'auto';
            performanceStatisticsNode.style.right = persistedRight || '0';
            performanceStatisticsNode.style.left = 'auto';
            performanceStatisticsNode.style.zIndex = '1000';
            performanceStatisticsNode.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            performanceStatisticsNode.style.color = '#fff';
            performanceStatisticsNode.style.padding = '0.5em';
            performanceStatisticsNode.style.fontFamily = 'monospace';
            performanceStatisticsNode.style.fontSize = '12px';
            performanceStatisticsNode.style.fontWeight = 'bold';
            performanceStatisticsNode.style.borderRadius = '0 0 0 5px';
            performanceStatisticsNode.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
            performanceStatisticsNode.style.cursor = 'move';

            performanceStatisticsNode.addEventListener("mousedown", (mouseDownEvent) => {
                mouseDownEvent.preventDefault();
                document.addEventListener("mousemove", function moveStatisticsWindow(mouseMoveEvent) {
                    document.addEventListener("mouseup", removeListeners);
                    document.addEventListener("mouseleave", removeListeners);

                    let right = window.innerWidth - mouseMoveEvent.clientX - mouseDownEvent.offsetX;
                    if (right > 0) {
                        performanceStatisticsNode.style.right = `${right}px`;
                    }

                    let top = mouseMoveEvent.clientY;
                    if ((top + performanceStatisticsNode.clientHeight) < window.innerHeight && top >= 0) {
                        performanceStatisticsNode.style.top = `${mouseMoveEvent.clientY}px`;
                    }

                    performanceStatisticsNode.style.bottom = 'auto';

                    function removeListeners() {
                        localStorage.setItem('performance-statistics-top', performanceStatisticsNode.style.top);
                        localStorage.setItem('performance-statistics-right', performanceStatisticsNode.style.right);
                        document.removeEventListener("mousemove", moveStatisticsWindow);
                        document.removeEventListener("mouseup", removeListeners);
                        document.removeEventListener("mouseleave", removeListeners);
                    }
                });
            });

            const table =
                `<table style="border: 0px; border-collapse: collapse; border-image-width:0">
                    <tr>
                        <td>Messages/s</td>
                        <td data-performanceId="processed"></td>
                    </tr>
                    <tr>
                        <td>Subscriptions</td>
                        <td data-performanceId="subscriptions"></td>
                    </tr>
                    <tr>
                        <td>Longest Queue</td>
                        <td data-performanceId="longest-queue"></td>
                    </tr>
                    <tr>
                        <td>∆ Serialized-Serviced (ms)</td>
                        <td data-performanceId="serialized-serviced"></td>
                    </tr>
                </table>`;
            performanceStatisticsNode.innerHTML = table;

            return performanceStatisticsNode;
        }

        function installPerformanceWindow() {
            console.log('Performance window installed');
            document.body.appendChild(performanceStatisticsWindow);
        }
    };
}
