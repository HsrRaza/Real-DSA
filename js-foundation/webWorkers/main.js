// fibonacci function to be executed in the worker

function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// without workers, this would block the main thread and make the UI unresponsive for large n

// console.log(fibonacci(45)); // This will take a long time to compute and block the UI


// with workers, we can offload this computation to a separate thread

const worker = new Worker('worker.js'); // Assuming this code is in worker.js
worker.postMessage(45);
worker.onmessage =(e)=> console.log("Result ", e.data);
