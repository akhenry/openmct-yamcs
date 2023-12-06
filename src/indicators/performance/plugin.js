export default function installYamcsPlugin(realtimeProvider) {
    return function install(openmct) {
        let updateStatisticsTimeout;
        let rafHandle;
        let keypressBuffer = [];
        let showing = false;
        let removeEventListeners;
        let performanceStatisticsWindow;

        document.addEventListener('keypress', function () {
            keypressBuffer.push(event.key);
            if (keypressBuffer.length > 3) {
                keypressBuffer.shift();
            }

            if (keypressBuffer.join('') === '```') {
                if (!showing) {
                    showing = true;
                    keypressBuffer = [];
                    showPerformanceIndicator();
                } else {
                    showing = false;
                    keypressBuffer = [];
                    destroyPerformanceIndicator();
                }
            }
        });

        function showPerformanceIndicator() {
            performanceStatisticsWindow = createPerformanceStatisticsNode();
            const tableElements = {
                processed: performanceStatisticsWindow.querySelector("td[data-performanceId='processed']"),
                subscriptions: performanceStatisticsWindow.querySelector("td[data-performanceId='subscriptions']"),
                longestQueue: performanceStatisticsWindow.querySelector("td[data-performanceId='longest-queue']"),
                serializedServiced: performanceStatisticsWindow.querySelector("td[data-performanceId='serialized-serviced']"),
                webglCanvases: performanceStatisticsWindow.querySelector("td[data-performanceId='webgl-canvases']"),
                draw2dCanvases: performanceStatisticsWindow.querySelector("td[data-performanceId='draw2d-canvases']"),
                fps: performanceStatisticsWindow.querySelector("td[data-performanceId='fps']")
            };
            // const indicator = openmct.indicators.simpleIndicator();
            // indicator.text('~');
            // indicator.statusClass('s-status-info');
            // openmct.indicators.add(indicator);
    
            updateStatisticsTimeout = setTimeout(updateStatistics, 1000);
    
            startMeasuringFPS();
    
            function updateStatistics() {
                const parametersProcessedPerSecond = (realtimeProvider.statistics.parametersProcessedPerSecond).toString();
                // const parametersReceivedPerSecond = (realtimeProvider.statistics.parametersReceivedPerSecond).toString().padStart(4, '0');
                const subscriptionCount = (realtimeProvider.statistics.subscriptionCount).toString();
                const longestQueueLength = (realtimeProvider.statistics.longestQueueLength).toString();
                const canvases = countCanvases();
    
                tableElements.processed.innerText = parametersProcessedPerSecond;
                tableElements.subscriptions.innerText = subscriptionCount;
                tableElements.longestQueue.innerText = longestQueueLength;
                tableElements.webglCanvases.innerText = canvases.webgl;
                tableElements.draw2dCanvases.innerText = canvases.draw2d;
    
                //performanceStatisticsWindow.innerText = `Processed: ${parametersProcessedPerSecond} \r\n Subscriptions: ${subscriptionCount}\r\n Longest Queue: ${longestQueueLength}`;
                //indicator.text(`Processed: ${parametersProcessedPerSecond} Subscriptions: ${subscriptionCount} Longest Queue: ${longestQueueLength}`);
    
                updateStatisticsTimeout = setTimeout(updateStatistics, 1000);
            }
    
            function countCanvases() {
                const allCanvases = document.querySelectorAll("canvas");
                let webglCount = 0;
                let c2dCount = 0;
    
                allCanvases.forEach((canvas) => {
                    if (canvas.getContext('2d') !== null) {
                        c2dCount++;
                    } else if (canvas.getContext('webgl') !== null) {
                        webglCount++;
                    }
                });
    
                return {
                    webgl: webglCount,
                    draw2d: c2dCount
                };
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

                        removeEventListeners = removeListeners;
    
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
                            <td>Values/s</td>
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
                        <tr>
                            <td>WebGL Canvases</td>
                            <td data-performanceId="webgl-canvases"></td>
                        </tr>
                        <tr>
                            <td>Draw2D Canvases</td>
                            <td data-performanceId="draw2d-canvases"></td>
                        </tr>
                        <tr>
                            <td>FPS</td>
                            <td data-performanceId="fps"></td>
                        </tr>
                    </table>`;
                performanceStatisticsNode.innerHTML = table;

                return performanceStatisticsNode;
            }

            function startMeasuringFPS() {
                let frames = 0;
                let lastCalculated = performance.now();
                rafHandle = requestAnimationFrame(incrementFrames);

                openmct.on('destroy', () => {
                    cancelAnimationFrame(rafHandle);
                });

                function incrementFrames() {
                    let now = performance.now();
                    if (now - lastCalculated < 1000) {
                        frames++;
                    } else {
                        updateFPS(frames);
                        lastCalculated = now;
                        frames = 1;
                    }

                    rafHandle = requestAnimationFrame(incrementFrames);
                }

                function updateFPS(fps) {
                    tableElements.fps.innerText = fps;
                }
            }

            document.body.appendChild(performanceStatisticsWindow);
        }

        function destroyPerformanceIndicator() {
            cancelAnimationFrame(rafHandle);
            clearTimeout(updateStatisticsTimeout);
            document.body.removeChild(performanceStatisticsWindow);

            if (removeEventListeners) {
                removeEventListeners();
            }
        }
    };
}
