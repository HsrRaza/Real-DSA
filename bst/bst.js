
// . A tree is a non linear data structure

// A Binary Search Tree (BST) is a specialized hierarchical data structure that organizes data to allow for efficient searching, insertion, and deletion. It is a type of binary tree where every node follows a strict ordering rule.


// In a BST, each node contains a value, and it has at most two children: a left child and a right child. The key property of a BST is that for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value. This ordering allows for efficient searching, as you can quickly eliminate half of the remaining nodes at each step.

// The main operations on a BST include:

// 1. Insertion: Adding a new value to the tree while maintaining the BST property.
// 2. Search: Finding a specific value in the tree.
// 3. Deletion: Removing a value from the tree while maintaining the BST property.
// 4. Traversal: Visiting all nodes in a specific order (e.g., in-order, pre-order, post-order).

// The efficiency of these operations is generally O(log n) for balanced BSTs, but it can degrade to O(n) in the worst case (e.g., when the tree becomes skewed). To maintain balance, various self-balancing BSTs like AVL trees and Red-Black trees have been developed.


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

    isEmpty(){
        return this.root === null
    }

    // function to be implemented
    // insert(data)

    insert(data) {
        // creating a node and  initalizing with data

        const newNode = new Node(data);

        // root is null then node will
        // be added to the tree and made root

        if(this.isEmpty()){
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

    insertNode(node, newNode){
        // if the data is less than the node
        // value move left of the tree

        if(newNode.value < node.value){
            // if left is null insert node here
            if(node.left === null){
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
            if(node.right === null){
                node.right = newNode;
            }
            else {

                this.insertNode(node.right , newNode)
            }
        }
    }

    getRootNode(){
        return this.root;
    }





    // remove(data)


    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)               
    // postorder(node)
    // search(node, data)
}

const bst = new  BinarySearchTree()

console.log("Tree is empty" , bst.isEmpty())

bst.insert(10);
bst.insert(5)
bst.insert(15)
// bst.getRootNode()