// objects - a collection of key-value pairs

let student = {
    name: "John",
    age: 20,
    course: "full stack"
};
console.log(student);

// accessing the object properties
console.log(student.name);  
console.log(student.age);
console.log(student.course);

// modifying the object properties
student.age = 21; // modifying the existing property (replacing the value of age from 20 to 21)
console.log(student); // { name: 'John', age: 21, course: 'full stack' }    
student.city = "New York"; // adding a new property to the object
console.log(student); // { name: 'John', age: 21, course: 'full stack', city: 'New York' }


//looping of object properties
for (let key in student) {
    console.log(key , ": " , student[key]);
} 


