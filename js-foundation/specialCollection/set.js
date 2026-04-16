//  set 

const uniqueNum = new Set();

uniqueNum.add(1);
uniqueNum.add(2);
uniqueNum.add(2);  // Ignores as duplicate
uniqueNum.add(3);


console.log(uniqueNum);

uniqueNum.delete(2); // Removes 2 from the set

console.log(uniqueNum);


console.log(uniqueNum.has(2));

// clear all

uniqueNum.clear();

console.log(uniqueNum);

// Real world ex;
// removing duplicates from an array
const number = [1,2,2,3,3,4]
const unique = [...new Set(number)];
console.log(unique);

// find common elements between two sets

const set1 = new Set([1,2,3,4]);
const set2 = new Set([3,4,5,6]);

const inersection = new Set([...set1].filter(x => set2.has(x)));
console.log(inersection);

//  3 track visited items

const visitedUrls = new Set();
function visitUrls(url){
    if(visitUrls.has(url)){
        console.log("already visited ", url);
        return
    }
    visitedUrls.add(url);
    console.log("visiting..", url);
    
}


// 4 union of sets

const union = new Set([...set1, ...set2]);
console.log(union);

// 5 difference of sets
const diff = new Set([...set1].filter(x => !set2.has(x)));

console.log(diff);


