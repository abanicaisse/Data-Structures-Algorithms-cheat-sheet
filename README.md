# JavaScript Data Structures and Algorithms

 A data structure is a way to store and organize data so that it can be used efficiently.

 ### Popular data structures objects
 * DOM: Tree data structure
 * Browser back and forward btn: Stack data structure
 * OS job Scheduling: Queue data Structure

 ### Overview of data structures covered: 
1. JS Built in data Structures
- Arrays
- Objects
- Sets
- Maps

2. Custom data structures
- Stacks
- Queues
- Circular queues
- Linked lists
- Hash tables
- Trees
- Graphs

## 1. Arrays Data Structures
An array is a data structure that can hold a collection of values. JavaScript arrays can contain a mix of different data types (strings, booleans, numbers, objects), are resizable i.e. we don't need to declare teh size of the array before creating it, are zero-indexed with the insertion order maintained, and are iterable.

### Array - Big-O time complexity
- Insert/remove from end = O(1)
- Insert/remove from begining = O(n) - coz index has to be reset for every element in the array
- Accessing element = O(1)
- Search = O(n) - since this may depend on the index of the element we're looking for 

### Array Methods time Complexity
- .push/.pop = O(1)
- .shift/.unshift/.concat/.slice/.splice = O(n)
- .forEach/.map/.filter/.reduce = O(n)

## 2. Object Data Structure
An object is an unordered collection of key-value pairs where as the **key** must either be a string or symbol data type and the **value** can be of any data type. An object is not iterable

### Object - Big-O time complexity
- Insert element = O(1)
- remove element = O(1)
- Access value of element given the key = O(1)
- Search for a value within an object = O(n)

### Object Methods time complexity
- Object.keys() = O(n)
- Object.values() = O(n)
- Object.entries() = O(n)

