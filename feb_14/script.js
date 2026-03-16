// What is control flow??
/* control flow -> the order in which the code runs
top -> bottom -> line by line

condition - decision making
loops -> repetation
function -. reusable logic
how a particular pgm behavves
*/



/* console.log("start");
console.log("middle");
console.log("end"); 
 */

//////////////////////////////////////////////////////////////////////////////


/* if statement:
if (condition) {
    // code to run if condition is true
} 
*/

/* let age = 20;
if (age>=18) {
    console.log("you can vote");
} */

///////////////////////////////////////////////////////////////////

/* if else statement:
if (condition) {
    // code to run if condition is true
} else {
    // code to run if condition is false
}
*/

/* let marks = 85;
if (marks >= 90) {
    console.log("grade A");
} else {
    console.log("grade B");
}
 */

//////////////////////////////////////////////////////////////////////////


/* if else if statement:
if (condition1) {
    // code to run if condition1 is true
} else if (condition2) {
    // code to run if condition2 is true
} else {
    // code to run if none of the conditions are true
}
*/

/* let score = 75;
if (score >= 90) {
    console.log("grade A");
} else if (score >= 80) {
    console.log("grade B");
} else if (score >= 70) {
    console.log("grade C");
} else {
    console.log("grade D");
}   

 */

////////////////////////////////////////////////////////////////////////////


/* loops:
for loop:
for (initialization; condition; increment/decrement) {
    // code to run in each iteration
}

while loop:
while (condition) {
    // code to run in each iteration
    // update condition to avoid infinite loop
}

*/


// start is 0 run until 4 and increment by 1
/* for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
} 
*/

// nested loops - pattern printing
/* for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
} */



//break and continue
/* for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}
 */

/* for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // skip the rest of the loop body when i is 5
    }
    console.log(i);
}  
 */

// for -> when number of iterations is known
// while -> when number of iterations is not known  (condition based)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//print table of 7
/* let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num , " x " , i , " = "  , (num * i));
} 
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Functions -> reusable code or logic :
function functionName(parameters) {
    // code to run
}
*/

//fnction without return statement
/* function greet(name) {
    console.log("Hello, " + name + "!"); 
}

greet("Alice");
greet("Bob"); 
 */


//function with return statement
/* function square(num) {
    return num * num;
}

let result = square(5);
console.log(result); // Output: 25
 */


//////////////////////////

// arrow function -> shorter syntax for writing functions 
//               -> used to seperate parameter from function body with an arrow (=>)
/* const multiply = (a, b) => {
    return a * b;
}
 */