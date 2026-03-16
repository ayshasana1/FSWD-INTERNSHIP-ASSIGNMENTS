/* 
Event Handling 
event - user interaction
example: click, mouseover, keypress, keydown, submit, etc.
*/



//click event
let button = document.querySelector("#btn");
  button.addEventListener('click', function() {
    alert("Button Clicked! Thank You");
}); 



 // change text on click
button.addEventListener("click", function() {
    heading.textContent = "You clicked on me!";
}); 



//input event
let input = document.querySelector("#nameInput");
let output = document.querySelector("#output");

input.addEventListener("input", function() {
    output.textContent = input.value;
});


//form
let form = document.querySelector("#myform");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting
    alert("Form Submitted!");
});