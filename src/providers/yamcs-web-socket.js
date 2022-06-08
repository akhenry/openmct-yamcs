const FALLBACK_AND_WAIT_MS = [1000, 5000, 5000, 10000, 10000, 30000];

export default class YamcsWebSocket {
    constructor(wsUrl) {
        this._connected = false;
        this._currentWaitIndex = 0;
        this._requests = [];
        this._wsUrl = wsUrl;
        this._socket;

        this._oncloseSubscribers = new Set();
        this._onerrorSubscribers = new Set();
        this._onmessageSubscribers = new Set();
        this._onopenSubscribers = new Set();
    }

    createWebsocket() {
        this._socket = new WebSocket(this._wsUrl);

        this._socket.onopen = () => {
            clearTimeout(this._reconnectTimeout);

            this._connected = true;
            console.log(`Established websocket connection to ${this._wsUrl}`);

            this._currentWaitIndex = 0;

            this._flushQueue();

            this._onopenSubscribers.forEach(onopenSubscriber => onopenSubscriber.callback());
        };

        this._socket.onmessage = (event) => {
            this._onmessageSubscribers.forEach(onmessageSubscriber => onmessageSubscriber.callback(event));
        };

        this._socket.onerror = (error) => {
            console.error(error);
            console.warn("Websocket error, attempting reconnect...");
            this._connected = false;
            this._reconnect();

            this._onerrorSubscribers.forEach(onerrorSubscriber => onerrorSubscriber.callback(error));
        };

        this._socket.onclose = () => {
            this._connected = false;
            console.warn("Websocket closed. Attempting to reconnect...");
            this._reconnect();

            this._oncloseSubscribers.forEach(oncloseSubscriber => oncloseSubscriber.callback());
        };
    }

    onclose(callback) {
        const oncloseCallback = { callback };

        this._oncloseSubscribers.add_(oncloseCallback);

        return () => {
            this._oncloseSubscribers.delete(oncloseCallback);
        };
    }

    onerror(callback) {
        const onerrorCallback = { callback };

        this._onerrorSubscribers.add(onerrorCallback);

        return () => {
            this._onerrorSubscribers.delete(onerrorCallback);
        };
    }

    onmessage(callback) {
        const onmessageCallback = { callback };

        this._onmessageSubscribers.add(onmessageCallback);

        return () => {
            this._onmessageSubscribers.delete(onmessageCallback);
        };
    }

    onopen(callback) {
        const onopenCallback = { callback };

        this._onopenSubscribers.add(onopenCallback);

        return () => {
            this._onopenSubscribers.delete(onopenCallback);
        };
    }

    sendOrQueueMessage(request) {
        if (this.connected) {
            try {
                this._sendMessage(request);
                return true;
            } catch (error) {
                this.connected = false;
                console.error(error);
                console.warn("Error while attempting to send to websocket. Reconnecting...");

                this._requests.push(request);
                this._reconnect();
            }
        } else {
            this._requests.push(request);
        }
    }

    _flushQueue() {
        this._requests = this._requests.filter(request => {
            try {
                this._sendMessage(request);
            } catch (error) {
                console.error(error);

                return true;
            }

            return false;
        });
    }

    _reconnect() {
        if (this._reconnectTimeout) {
            return;
        }

        this._reconnectTimeout = setTimeout(() => {
            this.createWebsocket();
            delete this._reconnectTimeout;
        }, FALLBACK_AND_WAIT_MS[this._currentWaitIndex]);

        if (this._currentWaitIndex < FALLBACK_AND_WAIT_MS.length - 1) {
            this._currentWaitIndex++;
        }
    }

    _sendMessage(message) {
        this._socket.send(message);
    }
}
