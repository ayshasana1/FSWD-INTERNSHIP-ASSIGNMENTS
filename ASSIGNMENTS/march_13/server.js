const express = require("express");
const app = express();

const PORT = 3000;

// -------------------- Task 1 --------------------

app.get("/students", (req, res) => {
  const students = [
    { name: "Amit", course: "AI" },
    { name: "Riya", course: "FullStack" },
    { name: "Rahul", course: "DataScience" }
  ];

  res.json(students);
});

app.get("/courses", (req, res) => {
  const courses = ["AI", "ML", "FullStack", "DataScience"];
  res.json(courses);
});

// -------------------- Task 2 --------------------

app.get("/", (req, res) => {
  const date = new Date();

  res.send(`
    <h1>Welcome to My Website</h1>
    <p>Current Date and Time: ${date}</p>
  `);
});

app.get("/about", (req, res) => {
  const date = new Date();

  res.send(`
    <h1>About Us</h1>
    <p>This is the About page of my website.</p>
    <p>Current Date and Time: ${date}</p>
  `);
});

app.get("/services", (req, res) => {
  const date = new Date();

  res.send(`
    <h1>Our Services</h1>
    <p>We provide AI, ML and Web Development services.</p>
    <p>Current Date and Time: ${date}</p>
  `);
});

app.get("/contact", (req, res) => {
  const date = new Date();

  res.send(`
    <h1>Contact Us</h1>
    <p>Email: example@gmail.com</p>
    <p>Current Date and Time: ${date}</p>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});