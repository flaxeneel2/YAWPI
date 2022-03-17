import EventEmitter from "events";
import { fork } from "child_process";
export default class Worker extends EventEmitter {
    constructor() {
        super();
        this.queuedTasks = 0;
        this.childProcess = fork("./Thread.js");
    }
    getQueueLength() {
        return this.queuedTasks;
    }
    execTask(task) {
        this.childProcess.send({ task: task });
    }
}
