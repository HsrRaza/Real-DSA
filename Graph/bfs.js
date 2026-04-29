// In JavaScript, Breadth-First Search (BFS) is a graph traversal algorithm that explores nodes level by level, visiting all direct neighbors before moving to their neighbors' neighbors. It utilizes a Queue (First-In-First-Out) data structure to manage the order of exploration

function bfs(graph , startNode){
    const queue = [startNode] ; // Initialize the queue with the starting node in arr
    const visisted = new Set(); // To keep track of visited nodes
    const result = []; // To store the order of visited nodes

    visisted.add(startNode); // Mark the starting node as visited

    while(queue.length > 0){
        const currentNode = queue.shift(); // Remove the first node from the queue
        result.push(currentNode); // Add the current node to the result array

        // explore the neighbors of the current node

        for(let neighbor of graph[currentNode]){ // Iterate through the neighbors of the current node
            if(!visisted.has(neighbor)){
              visisted.add(neighbor); // Mark the neighbor as visited
                queue.push(neighbor); // Add the neighbor to the queue
            }
        }
    }

    return result; // Return the order of visited nodes
}

const myGraph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B',],
  'F': ['C',],
  'G': ['C',]
};

console.log(bfs(myGraph, 'A')); 

// A -> B,C
// B -> A,D,E
// C -> A,F,G
// D -> B
// E -> B
// F -> C
// G -> C