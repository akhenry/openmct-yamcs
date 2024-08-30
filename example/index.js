import installYamcsPlugins from '../src/openmct-yamcs.js';

const config = {
    yamcsDictionaryEndpoint: "http://localhost:9000/yamcs-proxy/",
    yamcsHistoricalEndpoint: "http://localhost:9000/yamcs-proxy/",
    yamcsWebsocketEndpoint: "ws://localhost:9000/yamcs-proxy-ws/",
    yamcsUserEndpoint: "http://localhost:9000/yamcs-proxy/api/user/",
    yamcsInstance: "myproject",
    yamcsProcessor: "realtime",
    yamcsFolder: "myproject",
    throttleRate: 1000,
    // Batch size is specified in characers as there is no performant way of calculating true
    // memory usage of a string buffer in real-time.
    // String characters can be 8 or 16 bits in JavaScript, depending on the code page used.
    // Thus 500,000 characters requires up to 16MB of memory (1,000,000 * 16).
    maxBufferSize: 1000000
};
const STATUS_STYLES = {
    NO_STATUS: {
        iconClass: "icon-question-mark",
        iconClassPoll: "icon-status-poll-question-mark"
    },
    GO: {
        iconClass: "icon-check",
        iconClassPoll: "icon-status-poll-question-mark",
        statusClass: "s-status-ok",
        statusBgColor: "#33cc33",
        statusFgColor: "#000"
    },
    MAYBE: {
        iconClass: "icon-alert-triangle",
        iconClassPoll: "icon-status-poll-question-mark",
        statusClass: "s-status-warning",
        statusBgColor: "#ffb66c",
        statusFgColor: "#000"
    },
    NO_GO: {
        iconClass: "icon-circle-slash",
        iconClassPoll: "icon-status-poll-question-mark",
        statusClass: "s-status-error",
        statusBgColor: "#9900cc",
        statusFgColor: "#fff"
    }
};
const openmct = window.openmct;

(() => {
    const ONE_SECOND = 1000;
    const ONE_MINUTE = ONE_SECOND * 60;
    const THIRTY_MINUTES = ONE_MINUTE * 30;

    openmct.setAssetPath("/node_modules/openmct/dist");
    installDefaultPlugins();
    openmct.install(installYamcsPlugins(config));
    openmct.install(
        openmct.plugins.OperatorStatus({ statusStyles: STATUS_STYLES })
    );

    document.addEventListener("DOMContentLoaded", function () {
        openmct.start();
    });
    openmct.install(
        openmct.plugins.Conductor({
            menuOptions: [
                {
                    name: "Realtime",
                    timeSystem: "utc",
                    clock: "local",
                    clockOffsets: {
                        start: -THIRTY_MINUTES,
                        end: 0
                    }
                },
                {
                    name: "Fixed",
                    timeSystem: "utc",
                    bounds: {
                        start: Date.now() - THIRTY_MINUTES,
                        end: 0
                    }
                }
            ]
        })
    );

    function installDefaultPlugins() {
        openmct.install(openmct.plugins.LocalStorage());
        openmct.install(openmct.plugins.Espresso());
        openmct.install(openmct.plugins.MyItems());
        openmct.install(openmct.plugins.example.Generator());
        openmct.install(openmct.plugins.example.ExampleImagery());
        openmct.install(openmct.plugins.UTCTimeSystem());
        openmct.install(openmct.plugins.TelemetryMean());

        openmct.install(
            openmct.plugins.DisplayLayout({
                showAsView: ["summary-widget", "example.imagery", "yamcs.image"]
            })
        );
        openmct.install(openmct.plugins.SummaryWidget());
        openmct.install(openmct.plugins.Notebook());
        openmct.install(openmct.plugins.LADTable());
        openmct.install(
            openmct.plugins.ClearData([
                "table",
                "telemetry.plot.overlay",
                "telemetry.plot.stacked"
            ])
        );

        openmct.install(openmct.plugins.FaultManagement());
        openmct.install(openmct.plugins.BarChart());

        // setup example display layout
        openmct.on('start', async () => {
            if (localStorage.getItem('exampleDisplayLayout') !== null) {
                return;
            }

            // try to import the example display layout, fail gracefully
            try {
                // Function to fetch JSON content as text
                async function fetchJsonText(url) {
                    const response = await fetch(url);
                    const text = await response.text();

                    return text;
                }

                async function getExampleDisplayLayoutPath() {
                    const objects = Object.values(JSON.parse(localStorage.getItem('mct')));
                    const exampleDisplayLayout = objects.find(object => object.name === 'Example Display Layout');
                    let path = await openmct.objects.getOriginalPath(exampleDisplayLayout.identifier);

                    path.pop();
                    path = path.reverse();
                    path = path.reduce((prev, curr) => {
                        return prev + '/' + openmct.objects.makeKeyString(curr.identifier);
                    }, '#/browse');

                    return path;
                }

                // poll for the localStorage item
                function mctItemExists() {
                    return new Promise((resolve) => {
                        function checkItem() {
                            if (localStorage.getItem('mct') !== null) {
                                resolve(true);
                            } else {
                                setTimeout(checkItem, 100);
                            }
                        }

                        checkItem();
                    });
                }

                // wait for the 'mct' item to exist
                await mctItemExists();

                // setup to use import as JSON action
                const importAction = openmct.actions.getAction('import.JSON');
                const myItems = await openmct.objects.get('mine');
                const exampleDisplayText = await fetchJsonText('./example-display.json');
                const selectFile = {
                    body: exampleDisplayText
                };

                // import the example display layout
                importAction.onSave(myItems, { selectFile });

                // the importAction has asynchronous code, so we will need to check
                // the composition of My Items to confirm the import was successful
                const compositionCollection = openmct.composition.get(myItems);
                let compositionLength = 0;
                let composition;

                while (compositionLength === 0) {
                    composition = await compositionCollection.load();
                    compositionLength = composition.length;
                }

                const exampleDisplayLayoutPath = await getExampleDisplayLayoutPath();

                // give everything time to initialize
                await new Promise(resolve => setTimeout(resolve, 250));

                openmct.notifications.info('Navigated to Example Display Layout');

                // navigate to the "Example Display Layout"
                openmct.router.navigate(exampleDisplayLayoutPath);

                // set the localStorage item to prevent this from running again
                localStorage.setItem('exampleDisplayLayout', 'true');
            } catch (error) {
                console.warn('Issue setting up example display layout:', error);
            }
        });
    }
})();
