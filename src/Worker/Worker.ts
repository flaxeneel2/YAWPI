import EventEmitter from "events";
export default class Worker extends EventEmitter {
    private queuedTasks: number = 0
    constructor() {
        super();

    }

    getQueueLength() {
        return this.queuedTasks
    }
}