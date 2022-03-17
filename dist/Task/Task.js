import EventEmitter from "events";
export default class Task extends EventEmitter {
    constructor(task, args, taskOptions) {
        super();
        this.task = task;
        this.args = args;
        this.taskOptions = taskOptions;
    }
}
