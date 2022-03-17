import EventEmitter from "events";
import os from "os";
import Worker from "./Worker";
export default class WorkerPool extends EventEmitter {
    constructor(workerCount) {
        super();
        this.workers = [];
        if (!workerCount)
            workerCount = os.cpus().length;
        this.workerCount = workerCount;
        this.emit("preInit");
        this.spawnWorkers(workerCount);
        this.emit("workersReady");
    }
    spawnWorkers(workerCount) {
        while (workerCount > 0) {
            this.workers.push((new Worker()));
            workerCount--;
        }
    }
    getWorkers() {
        return this.workers;
    }
    exec() {
        let suitableWorker = this.getFreestWorker();
    }
    getFreestWorker() {
        let freestWorker = undefined;
        let leastTasks;
        for (let worker of this.workers) {
            if (!leastTasks || worker.getQueueLength() < leastTasks) {
                freestWorker = worker;
                leastTasks = worker.getQueueLength();
            }
        }
        return freestWorker;
    }
}
