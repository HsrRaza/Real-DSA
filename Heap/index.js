class MaxHeap {
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
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // swap

            // move up to parent index or position and check again
        }
    }

    // remove the king , put last on throne , then sink down  
    delete() {
        // if box is empty , nothing to delete
        if (this.heap.length === 0) return null;


        
        // if only one element, just pop it (remove it ) and return
        if (this.heap.length === 1) return this.heap.pop();

        // step 1: save the king (the root of the heap) to return later
        const root = this.heap[0];

        // step 2:take the last person or element  and put it on the throne (the root) 
        this.heap[0] = this.heap.pop(); 

        // step 3 : let the new king sink down to the right spot 
        this.sinkDown(0); // start sinking down from the root index

        return `${root} : King is removed`; // return the removed king

    }

    sinkDown(index){
        const length = this.heap.length;

        while(true){

            let leftChildIndex = 2 * index +1;
            let rightChildIndex = 2 * index +2;
            let swapIndex = null ;// to keep track of which child to swap with (if any)

            // check if left child exists and is bigger than current node
            if(leftChildIndex < length && this.heap[leftChildIndex] > this.heap[index]){
                swapIndex = leftChildIndex; // left child is bigger than current node, mark it for swapping
            }

            // check if right child exists and is bigger than current node
            if(rightChildIndex < length && this.heap[rightChildIndex] > this.heap[index]){
                swapIndex = rightChildIndex; // right child is bigger than current node, mark it for swapping
            }


            // no swap needed - Im in right place

            if(swapIndex === null) break;

            // swap with the bigger child and continue sinking down
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]]; // swap

            index = swapIndex; // move down to the swapped child index and check again
        }
    }



    // look at the top of the heap without removing it
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null; // return the root of the heap if it exists, otherwise return null
    }

    // how many elements are in the heap
    size(){
        return this.heap.length; // return the number of elements in the heap
    }

    // is the heap empty?
    isEmpty(){
        return this.heap.length ===0; // return true if the heap is empty, otherwise return false
    }

    // print our heap
    print(){
        console.log(this.heap);
        
    }


}


const heap = new MaxHeap();
heap.insert(50);
heap.insert(30);
heap.insert(45);
heap.insert(10);
heap.insert(15);
heap.insert(20);
heap.insert(40);

console.log(heap.heap);  // [50, 30, 45, 10, 15, 20, 40]
console.log(heap.delete());  // 50 (the king is gone!)
console.log(heap.heap);  // [45, 30, 40, 10, 15, 20]
