/* 
DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate and interact with the content and structure of a webpage dynamically using JavaScript.
when browser loads the html - it converts it into a tree structure 

document -> 
html -> 
body -> 
h1 -> 
p

1. access elements
2. change content
3. change styles
4. create new elements
5. remove elements

*/

//select by id
let heading = document.getElementById('title');
console.log(heading);


//select by class name
let paragraph = document.getElementsByClassName('desc');
console.log(paragraph[0]);


//modern method
let head = document.querySelector('#title');
let para = document.querySelector('.desc');


//changing the content
heading.textContent = "DOM is powerful";
para.innerHTML = "<b> this is updated text</b>";


//changig styles
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";


//creating new elements
let newPara = document.createElement('p');
newPara.textContent = "I am a new Paragraph";
document.body.appendChild(newPara);


/* //removing elements
newPara.remove(); */