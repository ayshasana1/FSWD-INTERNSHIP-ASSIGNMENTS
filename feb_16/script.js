/* array -> stores multiple values
objects -> stores multiple key-value pairs

arays -> stores multiple values in single variable
*/

let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// accessing the array elements
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange   

//modifying the array elements
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange"]

// array methods: 1. length, 2. push(), 3. pop(), 4. shift(), 5. unshift(), 6. indexOf(), 7. slice(), 8. splice()

// length
console.log(fruits.length); // 3

// push() - adds an element to the end of the array
fruits.push("kiwi");
console.log(fruits); // ["apple", "grape", "orange", "kiwi"]

// pop() - removes the last element from the array
fruits.pop();
console.log(fruits); // ["apple", "grape", "orange"]

// shift() - removes the first element from the array
fruits.shift();
console.log(fruits); // ["grape", "orange"]
console.log(fruits.shift()); // mango  (gives the removed element)


// unshift() - adds an element to the beginning of the array
fruits.unshift("mango");
console.log(fruits); // ["mango", "grape", "orange"]

// indexOf() - returns the index of the first occurrence of an element in the array
console.log(fruits.indexOf("grape")); // 1

// slice() - returns a shallow copy of a portion of an array into a new array object
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["grape", "orange"]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
/* 
array.splice(starrtingIndex, deleteCount, item1, item2, ...)
startingIndex - the index at which to start changing the array
deleteCount - the number of elements to remove from the array
item1, item2, ... - the elements to add to the array, starting from the startingIndex
*/
fruits.splice(1, 1, "pear");
console.log(fruits); // ["mango", "pear", "orange"]

fruits.splice(2, 0, "pineapple"); // adds an element at index 2 without removing any element
console.log(fruits); // ["mango", "pear", "pineapple", "orange"]

fruits.splice(0, 2); // removes 2 elements from index 0
console.log(fruits); // ["pineapple", "orange"]

//replace
fruits.splice(0, 1, "watermelon"); // replaces the element at index 0 with "watermelon"
console.log(fruits); // ["watermelon", "orange"]

fruits.splice(0, 2, "strawberry", "kiwi"); // replaces the element at index 0 with "strawberry"
console.log(fruits); // ["strawberry", "kiwi"]


//loops in arrays
// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}


//insert multiple elements at specific index
let numbers = [1, 2, 5, 6];
numbers.splice(2, 0, 3, 4); // adds 3 and 4 at index 2 without removing any element
console.log(numbers); // [1, 2, 3, 4, 5, 6]

/* 
splice() - modifies the original array and returns the removed elements (if any)
slice() - does not modify the original array and returns a new array containing the selected elements
*/

