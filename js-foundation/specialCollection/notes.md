 A Map is a collection of key-value pairs where keys can be any data type, including objects and functions. 

 Key Operations:

 Add/Update: myMap.set('key', 'value').
 Retrieve: myMap.get('key').
 Check Existence: myMap.has('key') returns a boolean.
 Delete: myMap.delete('key') removes a specific entry.
 Size: myMap.size returns the number of entries.

 Advantages over Objects:

 Order: It remembers the original insertion order of keys.
 Performance: It is optimized for frequent additions and removals.
Flexibility: Unlike objects, keys are not restricted to strings or symbols. 


Set
A Set is a built-in data structure that stores unique values of any type, whether primitive values or object references

Uniqueness: A value in a Set can only occur once; duplicates are automatically ignored.
Performance: Unlike arrays, sets are optimized for fast membership testing using hash tables, providing sublinear (average O(1)) access times.

Methods & Properties:
add(value): Inserts a new element into the set.
has(value): Returns a boolean indicating if the value exists in the set.
delete(value): Removes the specified element.
clear(): Removes all elements from the set.
size: A property (not a method) that returns the number of elements.


weakMap()

In JavaScript, a WeakMap is a specialized collection of key-value pairs where the keys must be objects (or non-registered symbols) and are held weakly. This unique behavior makes it a powerful tool for memory management and privacy