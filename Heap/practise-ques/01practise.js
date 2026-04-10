function arrElem(arr) {
    const lastparent = Math.floor((arr.length - 2) / 2);

    for (let i = lastparent; i >= 0; i--) {
        sinkDown(arr, i, arr.length);
    }
    return arr;
}

function sinkDown(arr, index, size) {
    while(true){
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let biggest = index;

        if (left < size && arr[left] > arr[biggest]) {
            biggest = left
        }
        if (right < size && arr[right] > arr[biggest]) {
            biggest = right
        }

        if (biggest === index) {
            break
        }

        [arr[index], arr[biggest]] = [arr[biggest], arr[index]]

        index = biggest

    }
}

// console.log(arrElem([3, 1, 2]));
// console.log(arrElem([1,3,2]));
// console.log(arrElem([5,8,3,10,2,7]));


console.log(arrElem([30,10,50,5,20,40,15]));
