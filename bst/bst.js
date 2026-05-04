
// . A tree is a non linear data structure

// A Binary Search Tree (BST) is a specialized hierarchical data structure that organizes data to allow for efficient searching, insertion, and deletion. It is a type of binary tree where every node follows a strict ordering rule.


// In a BST, each node contains a value, and it has at most two children: a left child and a right child. The key property of a BST is that for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value. This ordering allows for efficient searching, as you can quickly eliminate half of the remaining nodes at each step.

// The main operations on a BST include:

// 1. Insertion: Adding a new value to the tree while maintaining the BST property.
// 2. Search: Finding a specific value in the tree.
// 3. Deletion: Removing a value from the tree while maintaining the BST property.
// 4. Traversal: Visiting all nodes in a specific order (e.g., in-order, pre-order, post-order).

// The efficiency of these operations is generally O(log n) for balanced BSTs, but it can degrade to O(n) in the worst case (e.g., when the tree becomes skewed). To maintain balance, various self-balancing BSTs like AVL trees and Red-Black trees have been developed.


// tree traversal visiting every node in tree 
// a hierarchical ds like a tree can be traveresed in different ways 
// 1:DFS() 
// 2:BFS() 


// dfs algo starts at root node and exp as far possible along each branch before backtracking ..
// visit the root node , visit all the nodes in the left subtree and visit all the nodes in the right substree 
// depending on the order in which we do this , there can be three types of DFS traversals
// pre-order
// in-order
// post-order



// preorder algo steps
// read the data of the node 
// visit the left subtree and read then go 
// visit the right subtree


class Node {
    constructor(value) {
        this.value = value; // the value stored in the node
        this.left = null;  // left child pointer
        this.right = null; // right child pointer
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null; // the root of the BST
    }

    isEmpty() {
        return this.root === null
    }

    // function to be implemented
    // insert(data)

    insert(data) {
        // creating a node and  initalizing with data

        const newNode = new Node(data);

        // root is null then node will
        // be added to the tree and made root

        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            // find the correct position in the tree
            // and add the node

            this.insertNode(this.root, newNode);
        }
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data

    insertNode(node, newNode) {
        // if the data is less than the node
        // value move left of the tree

        if (newNode.value < node.value) {
            // if left is null insert node here
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                // if left is not null recurr until
                // null is found
                this.insertNode(node.left, newNode);
            }
        }

        // if the data is more than the node value move right of the tree
        else {
            // if right is null insert node here
            if (node.right === null) {
                node.right = newNode;
            }
            else {

                this.insertNode(node.right, newNode)
            }
        }
    }



    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            }

            else if (value < root.value) {
                return this.search(root.left, value)
            }
            else {
                return this.search(root.right, value)
            }
        }

    }

    
// recursion method for preOrder
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


    // inOrder traversal
    // steps 1 :- visit the left subtree till end and  
    //  step2 :- read the data of the node
    // step 3:- visit the right subtree


   inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
    }
   }


   postOrder(root){
    if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
   }






//    BFS Traversal Approach

// 1. create a queue
// 2. Enqueue the root node 
// 3.As long as a node exits in the queue
//  a . Dequeue the node from the front
//  b . Read the node's value 
//  c . Enqueue the node's left child if it exists
//  d . Enqueue the node's right child if it exists


levelOrder(){
    // use the optimised queue implementation
    const queue = []
    queue.push(this.root);
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
        
    }
}

}

const bst = new BinarySearchTree()

console.log("Tree is empty", bst.isEmpty())

bst.insert(10);
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));

// bst.preOrder(bst.root)
// bst.postOrder(bst.root)
bst.levelOrder()
