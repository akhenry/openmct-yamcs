//TODO: Figure out how to get this to work properly without having to inline all the class dependencies.
/* eslint-disable max-classes-per-file */
export default function installRealtimeWorker() {
    console.log("Installing worker...");
    /**
     * Plan here is to:
     * - DO NOT PARSE JSON
     * - Use string parsing to get the call number (see experiments on this)
     * - Use a table to store the latest message for each call number without parsing it
     * - Periodically send the entire table over the wire to the listener.
     */
    const SUBSCRIPTION_RESPONSE_TIMEOUT_MS = 60000;
    const FALLBACK_AND_WAIT_MS = [1000, 5000, 5000, 10000, 10000, 30000];

    class ResilientWebSocket extends EventTarget {
        #webSocket;
        #isConnected = false;
        #isConnecting = false;
        #messageQueue = [];
        #reconnectTimeoutHandle;
        #currentWaitIndex = 0;
        #messageCallbacks = [];
        #wsUrl;

        constructor() {
            super();
        }

        connect(url) {
            this.#wsUrl = url;
            if (this.#isConnected) {
                throw new Error('WebSocket already connected');
            }

            if (this.#isConnecting) {
                throw new Error('WebSocket connection in progress');
            }

            this.#isConnecting = true;

            this.#webSocket = new WebSocket(url);

            const boundConnected = this.#connected.bind(this);
            this.#webSocket.addEventListener('open', boundConnected);

            const boundCleanUpAndReconnect = this.#cleanUpAndReconnect.bind(this);
            this.#webSocket.addEventListener('error', boundCleanUpAndReconnect);

            const boundDisconnect = this.disconnect.bind(this);
            this.#webSocket.addEventListener('close', boundCleanUpAndReconnect);

            const boundMessage = this.#message.bind(this);
            this.#webSocket.addEventListener('message', boundMessage);

            this.addEventListener('disconnected', () => {
                this.#webSocket.removeEventListener('open', boundConnected);
                this.#webSocket.removeEventListener('error', boundCleanUpAndReconnect);
                this.#webSocket.removeEventListener('close', boundDisconnect);
            }, {once: true});

        }

        //Do not use Event dispatching for this. Unnecessary overhead.
        registerMessageCallback(callback) {
            this.#messageCallbacks.push(callback);

            return () => {
                this.#messageCallbacks = this.#messageCallbacks.filter((cb) => cb !== callback);
            };
        }

        #connected() {
            console.debug('Websocket connected.');
            this.#isConnected = true;
            this.#isConnecting = false;
            this.#currentWaitIndex = 0;

            this.dispatchEvent(new Event('connected'));

            this.#flushQueue();
        }

        #cleanUpAndReconnect() {
            console.warn('Websocket closed. Attempting to reconnect...');
            this.disconnect();
            this.#reconnect();
        }

        #message(event) {
            this.#messageCallbacks.forEach((callback) => callback(event.data));
        }
        disconnect() {
            this.#isConnected = false;
            this.#isConnecting = false;

            if (this.#webSocket.readyState === WebSocket.OPEN) {
                this.#webSocket.close();
            }

            this.dispatchEvent(new Event('disconnected'));
            this.#webSocket = undefined;
        }

        #reconnect() {
            if (this.#reconnectTimeoutHandle) {
                return;
            }

            this.#reconnectTimeoutHandle = setTimeout(() => {
                this.connect(this.#wsUrl);

                this.#reconnectTimeoutHandle = undefined;

            }, FALLBACK_AND_WAIT_MS[this.#currentWaitIndex]);

            if (this.#currentWaitIndex < FALLBACK_AND_WAIT_MS.length - 1) {
                this.#currentWaitIndex++;
            }
        }

        enqueueMessage(message) {
            this.#messageQueue.push(message);
            this.#flushQueueIfReady();
        }

        #flushQueueIfReady() {
            if (this.#isConnected) {
                this.#flushQueue();
            }
        }

        #flushQueue() {
            while (this.#messageQueue.length > 0) {
                if (!this.#isConnected) {
                    break;
                }

                const message = this.#messageQueue.shift();
                this.#webSocket.send(message);
            }
        }
    }

    class BatchingTelemetrySubscriptionManager extends EventTarget {
        #isConnected = false;
        #nextSubscriptionId = 1;
        #telemetryCacheTable = undefined;
        #subscriptions = [];
        #socket;
        #longestQueueLength = 0;

        constructor() {
            super();

            this.parameterCount = 0;
        }

        connect({url}) {
            if (this.isConnected()) {
                throw new Error('Already connected');
            }

            this.#socket = new ResilientWebSocket();

            this.#socket.addEventListener('disconnected', () => {
                const subscriptions = this.#subscriptions;
                this.#subscriptions = [];
                console.log('Disconnect detected. Re-subscribing...');
                subscriptions.forEach((subscription) => {
                    this.subscribe(subscription);
                });
            });

            const boundMessageHandler = this.routeToMessageHandler.bind(this);
            this.#socket.registerMessageCallback(boundMessageHandler);

            this.#socket.connect(url);

            //State is independent of websocket state because of websokect resiliency.
            this.#isConnected = true;
        }

        async subscribe({identifier, instance, processor}) {
            this.#subscriptions.push({
                identifier,
                instance,
                processor
            });

            const subscriptionId = this.#nextSubscriptionId++;
            const callNumber = await this.subscribeAndReceiveCallNumber({
                subscriptionId,
                identifier,
                instance,
                processor
            });

            const subscribedEvent = new Event('subscribed');
            subscribedEvent.callNumber = callNumber;
            subscribedEvent.keystring = identifier.key;
            this.dispatchEvent(subscribedEvent);
        }

        subscribeAndReceiveCallNumber({subscriptionId, identifier, instance, processor}) {
            return new Promise((resolve) => {
                const subscribeMessage = this.#buildSubscribeMessage({
                    subscriptionId,
                    identifier,
                    instance,
                    processor
                });
                const timeoutHandle = setTimeout(() => {
                    console.error(`No reply received for subscription ${subscriptionId} within 1 minute.`);
                    this.removeEventListener(`replyTo${subscriptionId}`, replyCallback);
                }, SUBSCRIPTION_RESPONSE_TIMEOUT_MS);
                this.#sendMessage(subscribeMessage);
                this.addEventListener(`replyTo${subscriptionId}`, replyCallback, { once: true });

                function replyCallback(event) {
                    clearTimeout(timeoutHandle);
                    resolve(event.callNumber);
                }
            });
        }

        #buildSubscribeMessage({subscriptionId, identifier, instance, processor}) {
            const parameterName = this.#idToQualifiedName(identifier.key);

            return `{
                "type": "parameters",
                "id": "${subscriptionId}",
                "options": {
                    "instance": "${instance}",
                    "processor": "${processor}",
                    "id": [{
                        "name": "${parameterName}"
                    }],
                    "sendFromCache": true,
                    "updateOnExpiration": true
                }
            }`;
        }

        #sendMessage(message) {
            this.#socket.enqueueMessage(message);
        }

        #idToQualifiedName(id) {
            return id.replace(/~/g, '/');
        }

        unsubscribe(identifier) {
            if (!this.isConnected()) {
                throw new Error('Not connected');
            }
        }

        routeToMessageHandler(message) {
            const type = message.substring(13, message.indexOf("\"", 13));

            switch (type) {
            case "parameters": {
                this.parameterCount++;
                const callNumber = message.substring(36, message.indexOf(",", 37));
                this.cacheTelemetry(callNumber, message);

                break;
            }

            case "reply": {
                const replyMessage = JSON.parse(message);
                const subscriptionId = replyMessage.data.replyTo;
                const replyCallNumber = replyMessage.call;
                const event = new Event(`replyTo${subscriptionId}`);

                event.callNumber = replyCallNumber;
                this.dispatchEvent(event);

                break;
            }

            default:
                console.error(`Unknown message type ${type}`);
            }
        }

        cacheTelemetry(callNumber, telemetryMessage) {
            if (this.#telemetryCacheTable === undefined) {
                this.#telemetryCacheTable = {};
            }

            if (this.#telemetryCacheTable[callNumber] === undefined) {
                this.#telemetryCacheTable[callNumber] = [telemetryMessage];
            } else {
                this.#telemetryCacheTable[callNumber].push(telemetryMessage);
            }
            this.#longestQueueLength = Math.max(this.#longestQueueLength, this.#telemetryCacheTable[callNumber].length);
        }

        nextBatch() {
            const batch = this.#telemetryCacheTable;
            this.#telemetryCacheTable = undefined;
            this.parameterCount = 0;
            this.#longestQueueLength = 0;

            return batch;
        }

        isConnected() {
            return this.#isConnected;
        }

        get longestQueueLength() {
            return this.#longestQueueLength;
        }
    }

    const subscriptionManager = new BatchingTelemetrySubscriptionManager();
    let throttleRateHz = 1;
    let interval = 1000 / throttleRateHz;

    self.addEventListener('message', (event) => {
        const { data } = event;
        const { action } = data;

        switch (action) {

        case "subscribe":
            subscriptionManager.subscribe({
                identifier: data.identifier,
                instance: data.instance,
                processor: data.processor
            });
            break;

        case "unsubscribe":
            subscriptionManager.unsubscribe({
                identifier: data.identifier,
                instance: data.instance,
                processor: data.processor
            });
            break;

        case "throttle":
            throttleRateHz = data.throttleRateHz;
            interval = 1000 / throttleRateHz;
            break;

        case "connect": {
            console.log("Connecting...");
            subscriptionManager.connect({
                url: data.url
            });
            break;
        }

        case "disconnect":
            subscriptionManager.disconnect();
            break;

        case "getLatestValues": {
            const batch = subscriptionManager.nextBatch();

            self.postMessage({
                type: "latestValues",
                data: batch
            });

            break;
        }

        default:
            console.error(`Unknown message type ${action}`);
        }
    });

    subscriptionManager.addEventListener('subscribed', (event) => {
        const { callNumber, keystring } = event;
        self.postMessage({
            type: "callNumberKeystringMapping",
            callNumber,
            keystring
        });
    });

    let startTime = performance.now();
    setTimeout(sendBatch, interval);

    function sendBatch() {
        const parameterCount = subscriptionManager.parameterCount;
        const longestQueueLength = subscriptionManager.longestQueueLength;
        const batch = subscriptionManager.nextBatch();
        const endTime = performance.now();
        const parametersPerSecond = parameterCount / ((endTime - startTime) / 1000);
        if (batch !== undefined) {
            self.postMessage({
                type: "latestValues",
                data: batch,
                parametersReceivedPerSecond: Math.floor(parametersPerSecond),
                longestQueueLength: longestQueueLength
            });
        }

        startTime = performance.now();
        setTimeout(sendBatch, interval);
    }

    console.log("Worker installed successfully!");

}
