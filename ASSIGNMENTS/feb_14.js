// take a num from user
let num = prompt("Enter a number:");

// check if the number is even or odd
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// print num from 1 to that number
console.log("Numbers from 1 to " + num + ":");
for (let i = 1; i <= num; i++) {
    console.log(i);
}

// print square of that number
console.log("The square of " + num + " is: " + (num * num));


