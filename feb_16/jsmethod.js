//JS Methods
//map() - transforms data    -------------        (creates a new array with the results of calling a provided function on every element in the calling array.)
let num = [1, 2, 3, 4, 5];
let doubled = num.map(function(nums){
    return nums*2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

//filter() - filters data / select data    -------------        (creates a new array with all elements that pass the test implemented by the provided function.)
let even = num.filter(function(nums){
    return nums % 2 === 0;
});
console.log(even); // [2, 4]

//reduce() - combine value / reduces an array to a single value    -------------        (executes a reducer function on each element of the array, resulting in a single output value.)
let total = num.reduce(function(sum, nums){
    return sum + nums;
}, 0);
console.log(total); // 15

//find() - finds one item  /  finds the first element that satisfies a condition    -------------        (returns the value of the first element in the provided array that satisfies the provided testing function.)
let result = num.find(function(nums){
    return nums > 3;
});
console.log(result); // 4


//includes() - checks if an element is present in the array    -------------        (determines whether an array includes a certain value among its entries, returning true or false as appropriate.)
console.log(num.includes(3)); // true
console.log(num.includes(6)); // false
