class Heap {
    constructor() {
        this.heap = []; // magic box to store the elements of the heap
    }

    insert(value) {
        // step 1 : put the value in the end of the heap
        this.heap.push(value);

        // step 2:let it bubble up to the right spot 

        this.bubbleUp(this.heap.length - 1); // start bubbling up from the last index

    }

    bubbleUp(index) {
        // keep climbing while we 're not at the top

        while (index > 0) {
            // find the parent index using magic formula
            let parentIndex = Math.floor((index - 1) / 2);

            // if I'm smallet then parent ,Im happy and stop bubbling up (climbing up is done)
            if (this.heap[index] < this.heap[parentIndex]) {
                break;
            }

            // if I'm bigger than parent, then swap with parent and keep bubbling up
            [this.heap[index], this.heap[parentIndex]] =[this.heap[parentIndex], this.heap[index]]; // swap

            // move up to parent index or position and check again
        }
    }


}


const heap = new Heap();

heap.insert(50);
heap.insert(30);
heap.insert(40);
heap.insert(10);
heap.insert(15);
heap.insert(20);
heap.insert(35);
// heap.insert(45);  // Watch this bubble up!

console.log(heap.heap);
