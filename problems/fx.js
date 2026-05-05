// Given a value of x, find f(x). Formula: f(x) = (2x)^3 + f(x-1) + f(x-3) . (When x < 10, f(x) = 1)

// Approach 1: Simple Recursion (Educational - NOT for large x)
function fx(x) {
    // base case : x < 10 returns 1

    if (x < 10) {
        return 1;

    }

    return Math.pow(2 * x, 3) + f(x - 1) + f(x - 3);
}


// console.log(fx(12));
// Approach 2: Memoization (Top-Down with Cache)

function createMemoizedF() {
    // Cache stores previously computed values
    const cache = {};

    function f(x) {
        // Base case
        if (x < 10) {
            return 1;
        }

        // Return cached result if available
        if (cache[x] !== undefined) {
            return cache[x];
        }

        // Compute and cache the result
        const result = Math.pow(2 * x, 3) + f(x - 1) + f(x - 3);
        cache[x] = result;

        return result;
    }

    return f;
}

// Usage
const f = createMemoizedF();
// console.log(f(12));  // 32476
// console.log(f(20));  // Much faster than simple recursion


// Approach 3: Dynamic Programming (Bottom-Up)

function fDP(x) {
    // Base case
    if (x < 10) {
        return 1;
    }
    
    // Create array to store values
    const dp = new Array(x + 1);
    
    // Fill base cases
    for (let i = 0; i < 10; i++) {
        dp[i] = 1;
    }
    
    // Build up from 10 to x
    for (let i = 10; i <= x; i++) {
        dp[i] = Math.pow(2 * i, 3) + dp[i - 1] + dp[i - 3];
    }
    
    return dp[x];
}

console.log(fDP(12)); // 32476
