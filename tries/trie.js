//  Trie (pronounced like "try"), also known as a prefix tree, is a specialized tree-based data structure used to efficiently store and retrieve keys in a dataset of strings. 
// The name comes from the word "retrieval"
// .Core ConceptsStructure: 
// Unlike a standard tree, nodes in a trie don't usually store the entire key. Instead, each node represents a single character.
// Shared Prefixes: Words that share common starting letters share the same path from the root. For example, "apple" and "apply" would share the nodes for "a-p-p-l".
// Root Node: 
// The root is always empty and acts as the starting point for all operations.End-of-Word Flag: Each node typically has a boolean flag to indicate if it marks the end of a valid word


class TrieNode {
    constructor() {
        this.children = {};

        this.isEndOfWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {

        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true;

    }


    search(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]) {
                return false
            }

            node = node.children[char]
        }


        return node.isEndOfWord
    }

//Prefix Search  Check:
// startsWith("ca")
// We only check path exists.
// No need for isEnd.


startWith(word){
    let node  = this.root;

    for(let char of word){
        if(!node.children[char]){
            return false
        }

        node = node.children[char];
    }

    return true
}




}


const trie = new Trie()

trie.insert("cat is my pet");
// trie.insert("car")


console.log(trie.search("cat"));
// console.log(trie.startWith("ce"));



