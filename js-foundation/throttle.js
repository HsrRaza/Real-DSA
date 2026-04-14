// JavaScript Throttle Function
// Throttle limits the number of times a function can be called over time.
// It ensures that a function is not called more than once in a specified time period.



// Throttling is a JavaScript technique that controls how often a function executes within a fixed time interval.
// It improves performance by ensuring functions run at a consistent rate during frequent events.

// Limits function execution to once per specified time frame.
// Prevents performance issues during heavy events like scrolling or resizing..
// Ensures smoother and more efficient event handling.




function throttle(func , delay){
    let lastCall = 0;

    return function(...args){
        let now =Date.now();

        if(now -lastCall >=delay){
            func.apply(this,args);
            lastCall =now;
        }
    }
}

// Function to be throttled

function printMessage(){
    console.log("Throttled function executed at: " + new Date().toLocaleTimeString());
}
// Create throttled version of the function

const throttledPrintMessage = throttle(printMessage, 2000);

// Simulate rapid calls to the throttled function
setInterval(throttledPrintMessage, 500);

