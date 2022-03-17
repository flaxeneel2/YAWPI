import EventEmitter from "events";
import Task from "../Task/Task.js";
import {ChildProcess,fork} from "child_process";
import path from "path"
export default class Worker extends EventEmitter {
    private queuedTasks: number = 0
    private childProcess: ChildProcess
    constructor() {
        super();
        this.childProcess = fork(path.join(process.cwd(), "node_modules", "yawpi", "dist", "Worker", "Thread.js"))
    }

    getQueueLength() {
        return this.queuedTasks
    }

    execTask(task: Task) {
        this.childProcess.send(task)
    }
}

