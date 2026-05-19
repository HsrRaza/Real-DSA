//  Trie (pronounced like "try"), also known as a prefix tree, is a specialized tree-based data structure used to efficiently store and retrieve keys in a dataset of strings. 
// The name comes from the word "retrieval"
// .Core ConceptsStructure: 
// Unlike a standard tree, nodes in a trie don't usually store the entire key. Instead, each node represents a single character.
// Shared Prefixes: Words that share common starting letters share the same path from the root. For example, "apple" and "apply" would share the nodes for "a-p-p-l".
// Root Node: 
// The root is always empty and acts as the starting point for all operations.End-of-Word Flag: Each node typically has a boolean flag to indicate if it marks the end of a valid word


class TrieNode{
    constructor(){
        this.childres = Array(26).fill(null);

        this.isEndOfWord = false;
    }
}

