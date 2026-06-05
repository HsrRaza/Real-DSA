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

    append(val) {

        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {

            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode
        }

    }

    insert(val, index) {

        if (index == 0) {
            this.head = new Node(val);
        } else {
            let current = this.head;

            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            let newNode = new Node(val);
            newNode.next = current.next;
            current.next = newNode
        }
    }


    // print(){
    //     if(this.head ===null){
    //         console.log("list s empty");

    //     }else {

    //         let curr = this.head;
    //         let list = '';
    //         while(curr){
    //             list += `${curr.val} `;
    //             curr = curr.next;
    //         }

    //         console.log(list);

    //     }
    // }

    print() {
        if (this.head === null) {
            console.log("List is Empty ");

        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {

                listValues += `${curr.val} `;
                curr = curr.next;
            }
            console.log(listValues);

        }
    }

    reverse() {
        let prev = null
        let curr = this.head;

        while (curr) {
            let next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next

        }
       this.head = prev
    }

    middleNode() {
        let curr = this.head;
        let count;
        while (curr) {
            count++
            curr = curr.next
        }

        let mid = Math.floor(count / 2) + 1
        curr = this.head

        while (curr) {

            mid = mid - 1

            if (mid === 0) {
                break
            }

            curr = curr.next
        }
        return curr

    }
}

const List = new LinkedList()
List.append(1);
List.append(3);
List.append(5);
List.append(7);
List.append(9);
// List.insert(2,1)

List.print()

console.log("Reverse");
List.reverse()
List.print()

List.middleNode()
List.print()




