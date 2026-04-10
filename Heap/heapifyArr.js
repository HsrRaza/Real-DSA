function heapifyArr(arr) {
    // we need an array and  we'll modify it directly
    // we need to start from the last non-leaf node and move upwards to the root node
    // for each node, we need to compare it with its children and swap if necessary
    // we need to repeat this process until we reach the root node

    // STEP 2 
    // IF you have a 7 Elem (index 0 to 6) 
    // last index = 6
    // parent of last elem = Math.floor((6-1) // 2) = 2 (index of last non-leaf node)

    // general formula
    const lastIndex = arr.length - 1;
    const lastParent = Math.floor((lastIndex - 1) / 2);

    // shorter formula
    // const lastParent = Math.floor((arr.length - 2) / 2);

    //     MEMORY TRICK:
    // If length = 7 → last parent = 2
    // If length = 10 → last parent = 4
    // If length = 15 → last parent = 6
    // Rule of thumb: Last parent is roughly half of length!


    // go backwords (from last parent to root) and call sink down for each node
    // (i-- not i++ because we are going backwards)

    for (let i = lastParent; i >= 0; i--) {
        //  fix the subtree rooted at index i
        sinkDown(arr, i, arr.length);
    }

    return arr;


}

function sinkDown(arr, index, size) {
    //  while we haven't reached the bottom
    while (true) {
        //  where are ,my kids;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let biggest = index; //assume current node is biggest


        // is left child bigger than current node?
        if (left < size && arr[left] > arr[biggest]) {
            biggest = left; // left child is bigger than current node, mark it as biggest

        }

        // is right child bigger than current biggest?
        if (right < size && arr[right] > arr[biggest]) {
            biggest = right; // right child is bigger than current biggest, mark it as biggest
        }

        if (biggest === index) {
            break; // current node is biggest, we are done sinking down
        }
        // swap me with the biggest child and continue sinking down
        [arr[index], arr[biggest]] = [arr[biggest], arr[index]]; // swap

        index = biggest; // move down to biggest index and check again
    }
}



