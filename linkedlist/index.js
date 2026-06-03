class Node {

    constructor(val) {

        this.val = val;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null
    }

    insert(val) {
       
        let newNode = Node(val);
        
        if(this.head === null){
            this.head =newNode;
        }

        let current = this.head;


    }
}

