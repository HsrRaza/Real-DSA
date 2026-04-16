//  map example

const userMap = new Map();

// set method is used to add key-value pairs to the map
userMap.set('name', "Jhon");
userMap.set('age',25);
userMap.set("city", 'new York');

// get method is used to retrieve the value associated with a specific key


console.log(userMap.get('name'));
console.log(userMap.get('age'));
console.log(userMap.get('city'));




// check if a key exists in the map using has method

console.log(userMap.has("name"));

// delete a key-value pair from the map using delete method

userMap.delete('city')

// size not lenght

console.log(userMap.size); // 2

// clear method is used to remove all key-value pairs from the map
userMap.clear();

// iterations

const scores = new Map([
    ['Alice', 85],
    ['Bob', 92],
    ['Charlie', 78]
])


// iterate over the map using for..of method

for( let [key, value] of scores){
    console.log(`${key} : ${value}`);
    
}

// forEach method to iterate over the map
scores.forEach((value, key)=>{
    console.log(key ,  value);
    
})

// get keys, values, entries

console.log([...scores.keys()]);
console.log([...scores.values()]);
console.log([...scores.entries()]);
