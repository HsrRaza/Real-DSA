

Adjacency matrix of undirected graph 

a ,b ,c is a graph

const matrix = [
 a   [0,1,0],   a -> b  (0,1)
 b   [1,0,1],   b -> a , c 
 c   [0,1,0],   c-> b
]


 adjacencyList = {
    "A":['B'],
    "B":["A","C"],
    "C":["B"]
}

Adjacency Matrix  vs Adjacency List

with an adjacenecy list, we only need to store the values for the edges that exits.

with adjacency matrix, you store values irrespective of whether an edge exits or not.

storage wise an adjacency list is way more efficient

with adjacency list, inserting nd finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.

An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix, such infor would have to be stores externallly



# Graph Implementation Notes (Adjacency List with Set)

## 1. First Principle Behind Your Code

Your graph is trying to answer one question:

> For every vertex, which other vertices is it connected to?

So you store:

* key = vertex
* value = list of connected vertices

Your structure:

```text
{
  A: [B],
  B: [A, C],
  C: [B]
}
```

In your code, the list is stored as a `Set`.

Why Set?

Because a graph should not accidentally store the same connection twice.

Without Set:

```text
A -> B, B, B
```

With Set:

```text
A -> B
```

---

# 2. Pattern Hidden Inside `addVertex`

```js
if (!this.adjacencyList[vertex]) {
    this.adjacencyList[vertex] = new Set()
}
```

This is a very common DSA pattern:

> “Before using something, ensure it exists.”

Pattern name:

* Initialize if missing
* Lazy creation
* Create-on-demand

You will use this same pattern in:

* Hash maps
* Frequency counters
* Trees
* Dynamic programming

Mental model:

```text
If the box does not exist, create the box first.
Then put things inside it.
```

---

# 3. Pattern Hidden Inside `addEdge`

```js
if (!this.adjacencyList[vertex1]) this.addvertex(vertex1)
if (!this.adjacencyList[vertex2]) this.addvertex(vertex2)
```

Pattern:

> Defensive programming

Meaning:

Even if the user forgets to create the vertices first, your graph still works.

So this becomes valid:

```js
graph.addEdge("X", "Y")
```

And internally the graph creates X and Y automatically.

Interviewers like this because it makes the class safer.

---

# 4. Why Add Both Sides?

```js
this.adjacencyList[vertex1].add(vertex2)
this.adjacencyList[vertex2].add(vertex1)
```

You are creating an undirected graph.

Why?

Because:

```text
A -- B
```

means:

* A can reach B
* B can reach A

If you only add one side:

```text
A -> B
```

then it becomes a directed graph.

---

# 5. After Your Example Runs

```js
graph.addEdge("A", "B")
graph.addEdge("B", "C")
```

The internal graph becomes:

```text
A -> B
B -> A, C
C -> B
```

Visual form:

```text
A --- B --- C
```

---

# 6. Core Logic Questions To Build Graph Thinking

Before solving any graph problem, ask these in order:

1. What are the vertices?
2. What are the edges?
3. Is the graph directed or undirected?
4. Should duplicate edges be allowed?
5. Should edges have weights?
6. How do I store neighbors?
7. How do I avoid revisiting the same node?

---

# 7. Common Interview Follow-Up Questions

## Q1. Why use adjacency list instead of adjacency matrix?

Answer:

Adjacency list uses less memory when the graph has fewer connections.

Example:

1000 vertices and only 10 edges:

* Matrix wastes huge space
* List stores only actual edges

Use adjacency matrix only when:

* Graph is small
* Need extremely fast edge lookup

---

## Q2. Why use Set instead of Array?

Set prevents duplicate edges.

With array:

```text
A -> B, B, B
```

With set:

```text
A -> B
```

Also easier to remove duplicates automatically.

---

## Q3. What is the time complexity of addVertex?

Average case:

```text
O(1)
```

Because object lookup is usually constant time.

---

## Q4. What is the time complexity of addEdge?

Average case:

```text
O(1)
```

Because:

* Accessing vertex list = O(1)
* Adding into Set = O(1)

---

## Q5. What happens if we call:

```js
graph.addEdge("A", "B")
graph.addEdge("A", "B")
```

Because Set is used:

```text
A -> B
B -> A
```

No duplicate edge appears.

---

## Q6. How would you make this a directed graph?

Only add one side:

```text
vertex1 -> vertex2
```

Do not add:

```text
vertex2 -> vertex1
```

---

## Q7. How would you store weighted edges?

Instead of storing only:

```text
B
```

store:

```text
(B, weight)
```

Example:

```text
A -> (B, 5)
```

Meaning distance/cost/time = 5

---

# 8. Patterns You Should Recognize in Graph Problems

## Pattern 1: “Who is connected to whom?”

Use adjacency list.

Examples:

* Friend network
* Road map
* Course prerequisites

---

## Pattern 2: “Can I reach destination?”

Use traversal:

* DFS
* BFS

---

## Pattern 3: “Find shortest path”

Use:

* BFS for unweighted graph
* Dijkstra for weighted graph

---

## Pattern 4: “Have I already seen this node?”

Use a visited set.

Without visited:System Design Interview" by Alex Xu (first chapters free online)

```text
A -> B -> C -> A -> B -> C forever
```

---

# 9. Very Common Graph Interview Questions

1. Implement addVertex
2. Implement addEdge
3. Remove an edge
4. Remove a vertex
5. Print all neighbors of a vertex
6. Check if two vertices are connected
7. BFS traversal
8. DFS traversal
9. Detect cycle in graph
10. Count connected components
11. Shortest path in unweighted graph
12. Convert directed graph to undirected graph
13. Why does BFS give shortest path?
14. Matrix vs List comparison
15. Why do we need a visited set?

---

# 10. Most Important Revision Notes

```text
Graph = Vertices + Edges
Adjacency List = vertex -> neighbors
Set = prevents duplicate edges
Undirected graph = add both sides
Directed graph = add one side only
Traversal always needs visited
Adjacency list is usually better than matrix
```

---

# 11. Mini Dry Run For Revision

Input:

```js
addVertex("A")
addVertex("B")
addVertex("C")

addEdge("A", "B")
addEdge("B", "C")
```

Step-by-step:

```text
Initially:
{}

After addVertex("A"):
A -> {}

After addVertex("B"):
A -> {}
B -> {}

After addVertex("C"):
A -> {}
B -> {}
C -> {}

After addEdge("A", "B"):
A -> {B}
B -> {A}

After addEdge("B", "C"):
A -> {B}
B -> {A, C}
C -> {B}
```

Final graph:

```text
A --- B --- C
```

Keep this picture in your head whenever you solve graph questions.
