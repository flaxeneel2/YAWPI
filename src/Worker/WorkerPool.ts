import EventEmitter from "events";
import os from "os"
import Worker from "./Worker";
export default class WorkerPool extends EventEmitter {
    private workerCount: number
    private workers: Worker[] = []
    constructor(workerCount: number|undefined) {
        super()
        if(!workerCount) workerCount = os.cpus().length
        this.workerCount = workerCount
        this.emit("preInit")

        this.spawnWorkers(workerCount)

        this.emit("workersReady")
    }

    spawnWorkers(workerCount: number) {
        while(workerCount>0) {
            this.workers.push((new Worker()))
            workerCount--
        }
    }

    getWorkers() {
        return this.workers
    }

    exec() {
        let suitableWorker = this.getFreestWorker()

    }

    getFreestWorker() {
        let freestWorker: Worker|undefined = undefined
        let leastTasks: number|undefined
        for(let worker of this.workers) {
            if(!leastTasks || worker.getQueueLength() < leastTasks) {
                freestWorker = worker
                leastTasks = worker.getQueueLength()
            }
        }
        return freestWorker
    }
}