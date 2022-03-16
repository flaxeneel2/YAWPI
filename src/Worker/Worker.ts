import EventEmitter from "events";
import Task from "../Task/Task";
import {ChildProcess,fork} from "child_process";
export default class Worker extends EventEmitter {
    private queuedTasks: number = 0
    private childProcess: ChildProcess
    constructor() {
        super();
        this.childProcess = fork("./Thread.js")
    }

    getQueueLength() {
        return this.queuedTasks
    }

    execTask(task: Task) {
        this.childProcess.send({task: task})
    }
}

