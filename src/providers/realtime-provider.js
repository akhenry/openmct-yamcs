import realtimeWorker from './realtime-worker.js';

export default class RealtimeProvider {
    #worker;
    #telemetrySubscribersByParameterName = {};
    #url;
    #instance;

    constructor(url, instance) {
        this.#url = url;
        this.#instance = instance;
        this.fps = 0;
        this.currentDebounce = 1000;

        this.#measureFPS();
    }

    supportsSubscribe(domainObject) {
        return domainObject.type === 'yamcs.telemetry';
    }

    subscribeToStaleness() {
        return () => { };
    }

    subscribe(domainObject, callback) {
        const parameterName = idToParameterName(domainObject.identifier.key);
        const worker = this.#getWorker();

        worker.postMessage({
            type: 'subscribe',
            parameterName: parameterName,
            debounceStrategy: 'drop' //or 'min-max'?
        });

        this.#addSubscriberCallback(parameterName, callback);

        return () => {
            this.#removeSubscriberCallback(parameterName, callback);

            worker.postMessage({
                type: 'unsubscribe',
                parameterName
            });
        };
    }

    connect() {
        this.#getWorker().postMessage({
            type: 'connect',
            url: this.#url,
            instance: this.#instance
        });
    }
    #measureFPS() {
        let lastCalculated = performance.now();
        let frames = 0;
        let self = this;
        requestAnimationFrame(incremementFrames);

        function incremementFrames() {
            let now = performance.now();
            if ((now - lastCalculated) < 1000) {
                frames++;
            } else {
                self.fps = frames;
                lastCalculated = now;
                frames = 1;
            }

            requestAnimationFrame(incremementFrames);
        }

    }

    #getWorker() {
        if (this.#worker === undefined) {
            const workerFunction = `(${realtimeWorker.toString()})()`;
            const workerBlob = new Blob([workerFunction]);
            const workerUrl = URL.createObjectURL(workerBlob, { type: 'application/javascript' });
            this.#worker = new Worker(workerUrl);
            this.#worker.addEventListener("message", (message) => {
                this.#routeToHandler(message.data);
            });
            // eslint-disable-next-line func-style
            const adjustDebounce = () => {
                const fps = this.fps;
                const targetFps = 40;
                const difference = targetFps - fps;
                if (difference < 0) {
                    this.currentDebounce = Math.max(this.currentDebounce - 100, 0);
                } else if (difference > 0) {
                    this.currentDebounce = Math.min(this.currentDebounce + 100, 1000);
                }

                this.#worker.postMessage({
                    type: 'debounce',
                    debounce: Math.min(this.currentDebounce, 1000)
                });

                setTimeout(adjustDebounce, 1000);
            };

            adjustDebounce();
            // Implement throttling here

            // this.#worker.postMessage({
            //     type: 'debounce',
            //     debounce: 500
            // });
        }

        return this.#worker;
    }

    #routeToHandler(message) {
        this.#informTelemtrySubscribers(message);
    }

    #informTelemtrySubscribers(message) {
        const telemetrySubscriber = this.#telemetrySubscribersByParameterName[message.parameterName];
        if (telemetrySubscriber) {
            telemetrySubscriber(message.datum);
        }
    }

    #addSubscriberCallback(parameterName, callback) {
        this.#telemetrySubscribersByParameterName[parameterName] = callback;
    }

    #removeSubscriberCallback(parameterName) {
        delete this.#telemetrySubscribersByParameterName[parameterName];
    }

}

function idToParameterName(id) {
    return id.replace(/~/g, '/');
}
