// Web Workers are a browser API that allows you to run JavaScript in the background on a separate thread, parallel to the main execution thread. This prevents long-running, CPU-intensive tasks from "freezing" the user interface. 

// Core Types of Workers
// Dedicated Workers: Accessed only by the single script that created them.
// Shared Workers: Can be accessed by multiple scripts from different windows, iframes, or tabs, provided they share the same origin.
// Service Workers: Act as proxy servers between the web app and the network, enabling offline features and background sync. 

// Key Features and Limitations
// No DOM Access: Workers cannot directly manipulate the page's HTML or access objects like window, document, or parent.
// Message Passing: Communication between the main thread and the worker is done via the postMessage() method and onmessage event.
// Independent Scope: Workers have their own global scope, usually referred to as self.
// Supported APIs: They can use many standard JS features, including fetch(), setTimeout(), IndexedDB, and WebSockets. 



// fibonacci function to be executed in the worker

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Listen for messages from the main thread
onmessage = (e) => {
    const result = fibonacci(e.data);
    self.postMessage(result); // Send the result back to the main thread
};
