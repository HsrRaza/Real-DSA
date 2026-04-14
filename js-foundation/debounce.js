// Debouncing is a JavaScript technique used to control how often a function executes during rapidly triggered events. It ensures better performance by delaying execution until user activity has stopped for a defined time.

// Limits function calls during frequent events like typing, scrolling, or resizing.
// Delays execution so the function runs only after a specific pause.
// Prevents performance overload by avoiding unnecessary repeated executions.




// 1. debounce function
function debounce(fnc, delay) {
    let timeourID;

    return function (...args) {
        clearTimeout(timeourID);
        timeourID = setTimeout(() => {
            fnc.apply(this, args);
        }, delay);
    }
}

// Create a debounced version of the search function

function handleSearch(query) {
    console.log("searching for: ", query);
}

const dSearch = debounce(handleSearch, 500);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 500ms


// search input field
let timer;
document.getElementById('search-input').addEventListener("input", function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("searching for: ");
    }, 500);
})

// Search Input Field: In the search bar, the user types characters one after another due to which for each key press an API request is triggered. Debouncing makes sure that the API request is only sent when the user has finished typing.


