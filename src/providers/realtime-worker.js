export default function installRealtimeWorker() {
    const VALUE_EXTRACT_MAP = {
        'UINT64': (value) => value.uint64Value,
        'INT64': (value) => value.int64Value,
        'SINT64': (value) => value.sint64Value,
        'UINT32': (value) => value.uint32Value,
        'INT32': (value) => value.int32Value,
        'SINT32': (value) => value.sint32Value,
        'UINT16': (value) => value.uint16Value,
        'INT16': (value) => value.int16Value,
        'SINT16': (value) => value.sint16Value,
        'FLOAT': (value) => value.floatValue,
        'DOUBLE': (value) => value.doubleValue,
        'STRING': (value) => value.stringValue,
        'ENUMERATED': (value) => value.stringValue,
        'TIMESTAMP': (value) => value.stringValue,
        'BOOLEAN': (value) => value.booleanValue,
        'BINARY': (value) => value.binaryValue
    };

    class RealtimeWorker {
        #socket;
        #workerHandle;
        #instance;
        #lastSusbcriptionId = 1;

        // The Yamcs WebSocket architecture forces us to key by all of these.
        #subscriptionDetailsById = {};
        #subscriptionDetailsByCall = {};
        #subscriptionDetailsByParameterName = {};
        #latestDataTable = {};
        #debouncePeriod = 1000;

        #messageQueue = [];

        constructor(workerHandle) {
            this.#workerHandle = workerHandle;
            this.flushLatestDataTable = this.flushLatestDataTable.bind(this);
        }

        connect(url, instance) {
            this.#socket = new WebSocket(url);
            this.#instance = instance;
            this.#socket.addEventListener('message', (event) => {
                const message = JSON.parse(event.data);
                this.routeSocketMessageToHandler(message);
            });
            this.#socket.addEventListener('open', () => {
                this.flushLatestDataTable();
                this.#messageQueue.forEach((message) => {
                    this.#socket.send(JSON.stringify(message));
                });
            });
        }

        subscribe(parameterName) {
            const subscriptionId = this.#newSubcriptionId();
            const subscriptionDetails = {
                parameterName: parameterName,
                subscriptionId: subscriptionId
            };

            this.#subscriptionDetailsByParameterName[parameterName] = subscriptionDetails;
            this.#subscriptionDetailsById[subscriptionId] = subscriptionDetails;

            this.#sendMessage({
                "type": "parameters",
                "id": subscriptionId,
                "options": {
                    "instance": this.#instance,
                    "processor": "realtime",
                    "id": [{
                        "name": parameterName
                    }],
                    "sendFromCache": true,
                    "updateOnExpiration": true
                }
            });
        }
        unsubscribe(parameterName) {
            const subscriptionDetails = this.#subscriptionDetailsByParameterName[parameterName];
            const call = subscriptionDetails.call;

            this.#sendMessage({
                "type": "cancel",
                "options": {
                    "call": call
                }
            });
            delete this.#subscriptionDetailsByCall[subscriptionDetails.call];
            delete this.#subscriptionDetailsById[subscriptionDetails.subscriptionId];
            delete this.#subscriptionDetailsByParameterName[subscriptionDetails.parameterName];
        }
        debounce(message) {
            const debouncePeriod = message.data.debounce;
            this.#debouncePeriod = debouncePeriod;
        }

        routeSocketMessageToHandler(socketMessage) {
            switch (socketMessage.type) {
            case 'reply':
                this.#setCallForSubscription(socketMessage);
                break;
            case 'parameters':
                this.processReceivedParameter(socketMessage);
                break;
            }
        }

        routeWorkerMessageToHandler(workerMessage) {
            switch (workerMessage.data.type) {
            case 'connect':
                this.connect(workerMessage.data.url, workerMessage.data.instance);
                break;
            case 'subscribe':
                this.subscribe(workerMessage.data.parameterName, workerMessage.data.debounceStrategy);
                break;
            case 'unsubscribe':
                this.unsubscribe(workerMessage.data.parameterName);
                break;
            case 'debounce':
                this.debounce(workerMessage);
            }
        }

        processReceivedParameter(parameterMessage) {
            parameterMessage.data.values.forEach((parameterValue) => {
                this.#latestDataTable[parameterMessage.call] = parameterValue;
            });
        }

        flushLatestDataTable() {
            const latestDataTable = this.#latestDataTable;
            Object.entries(latestDataTable).forEach(([call, parameterValue]) => {
                const {parameterName, datum} = this.#parseDatum(parameterValue, call);
                this.#workerHandle.postMessage({
                    type: 'parameter',
                    parameterName,
                    datum
                });
                delete latestDataTable[call];
            });
            setTimeout(this.flushLatestDataTable, this.#debouncePeriod);
        }

        #sendMessage(message) {
            if (this.#socket.readyState === WebSocket.OPEN) {
                this.#socket.send(JSON.stringify(message));
            } else {
                this.#messageQueue.push(message);
            }
        }

        #parseDatum(parameterValue, call) {
            const subscriptionDetails = this.#subscriptionDetailsByCall[call];
            const datum = {
                timestamp: parameterValue.generationTime,
                timestampParsed: Date.parse(parameterValue.generationTime),
                value: VALUE_EXTRACT_MAP[parameterValue.engValue.type](parameterValue.engValue)
            };

            return {
                parameterName: subscriptionDetails.parameterName,
                datum
            };
        }

        #setCallForSubscription(subscriptionMessage) {
            const subscriptionDetails = this.#subscriptionDetailsById[subscriptionMessage.data.replyTo];
            const call = subscriptionMessage.call;

            subscriptionDetails.call = call;
            this.#subscriptionDetailsByCall[call] = subscriptionDetails;

        }

        #newSubcriptionId() {
            return this.#lastSusbcriptionId++;
        }
    }

    const worker = new RealtimeWorker(self);

    self.addEventListener('message', (message) => {
        worker.routeWorkerMessageToHandler(message);
    });
}
