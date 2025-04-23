import os from "node:os";
import {Worker, workerData} from "node:worker_threads";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    // Write your code here
    let cpuCoreCount = os.cpus().length;
    let workers = []
    for (let i = 0; i < cpuCoreCount; i++) {
        workers.push( new Promise((resolve) => {
            const worker = new Worker(fileName, {workerData: (10 + i)})
            worker.on('message', message => {
                resolve({status: 'resolved', data: message});
            })
            worker.on('error', err => resolve({status: 'error', data: null}));
        }));
    }
    let values = await Promise.all(workers);
    console.log(values);
};

await performCalculations();