let students = [
    {name:"aman", marks:85},
    {name:"riya", marks:92},
    {name:"john", marks:60},
    {name:"joe", marks:78},
];

// get students above 80
let toppers = students.filter(function(student){
    return student.marks>80;
});
console.log(toppers); // [ { name: 'aman', marks: 85 }, { name: 'riya', marks: 92 } ]


//only the names of the students above 80
let names = students.map(function(student){
    return student.name;
});
console.log(names); // [ 'aman', 'riya', 'john', 'joe' ]


//find the total marks
let total = students.reduce(function(sum,student){
    return sum+student.marks;
},0);
console.log(total); // 315