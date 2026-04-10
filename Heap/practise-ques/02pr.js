class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);

        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {

            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] < this.heap[parentIndex]) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]

            index = parentIndex

        }
    }
    delete(){
        if(this.heap.length === 0) return null;

        if(this.heap.length === 1) return this.heap.pop();

        const rootNode = this.heap[0]

        this.heap[0]= this.heap.pop()

        this.sinkDown(0)

        return `root removed ; ${rootNode}`

    }

    sinkDown(index){
        const length = this.heap.length;

        while(true){
            let leftChild = 2 * index +1;
            let rightChild = 2 * index +2;
            let swap = null


            if(leftChild < length && this.heap[leftChild] > this.heap[index]){
                swap = leftChild
            }

            if(rightChild < length && this.heap[rightChild] > this.heap[index] ){
                swap = rightChild
            }

            if(swap === null) break;

            [this.heap[index] , this.heap[swap]] = [this.heap[swap] , this.heap[index]]

            index =swap;
        }
    }

    peek(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }
}

const maxHeap = new MaxHeap()

maxHeap.insert(5)
maxHeap.insert(3)
maxHeap.insert(8)
maxHeap.insert(1)
maxHeap.insert(9)
maxHeap.insert(2)



console.log(maxHeap.heap);
console.log(maxHeap.delete())
console.log(maxHeap.heap);


maxHeap.peek()
maxHeap.size()
