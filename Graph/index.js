const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
]

// console.log(matrix[0][0]);



adjacencyList = {
    "A": ['B'],
    "B": ["A", "C"],
    "C": ["B"]
}

// console.log(adjacencyList['C']);

// implementation of graph data structure using adjacency list in undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addvertex(vertex) {  // vertices are the nodes of the graph
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {  // edges are the connections between the nodes
        if (!this.adjacencyList[vertex1]) {
            this.addvertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addvertex(vertex2);
        }

        //  to establish a connection between the two vertices we need to add each vertex to the other vertex's adjacency list
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {  // to remove an edge between two vertices we need to remove each vertex from the other vertex's adjacency list
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }


    removeVertex(vertex) {  // to remove a vertex we need to remove all the edges connected to that vertex and then remove the vertex itself from the adjacency list
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }


    hasEdge(vertex1, vertex2) {   // to check if there is an edge between two vertices we can check if one vertex is present in the other vertex's adjacency list
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);

        }
    }
}



const graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")


graph.display()

console.log(graph.hasEdge("A", "C"));

graph.removeVertex("B")
graph.display()