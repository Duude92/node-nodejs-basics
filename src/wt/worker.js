import worker from "node:worker_threads"
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This code is for simulation of Error behaviour
    // let rand = Math.random()
    // if(rand > 0.5) throw new Error('');
    // This function sends result of nthFibonacci computations to main thread
    worker.parentPort.postMessage(nthFibonacci(worker.workerData));
};

sendResult();