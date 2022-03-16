import EventEmitter from "events";
import os from "os"
export default class WorkerPool extends EventEmitter {
    private workerCount: Number
    constructor(workerCount: Number|undefined) {
        super()
        if(!workerCount)workerCount = os.cpus().length
        this.workerCount = workerCount
        this.emit("preInit")
    }
}