import EventEmitter from "events";
import { fork } from "child_process";
import path from "path";
export default class Worker extends EventEmitter {
    constructor() {
        super();
        this.queuedTasks = 0;
        this.childProcess = fork(path.join(process.cwd(), "node_modules", "yawpi", "dist", "Worker", "Thread.js"));
    }
    getQueueLength() {
        return this.queuedTasks;
    }
    execTask(task) {
        this.childProcess.send(task);
    }
}
