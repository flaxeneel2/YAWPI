import EventEmitter from "events";
import {TaskOptions} from "../util/Interfaces.js";

export default class Task extends EventEmitter {
    public readonly task: Function
    public readonly args: any[]
    public readonly taskOptions: TaskOptions
    constructor(task: Function, args: any[], taskOptions: TaskOptions) {
        super();
        this.task = task
        this.args = args
        this.taskOptions = taskOptions
    }

}