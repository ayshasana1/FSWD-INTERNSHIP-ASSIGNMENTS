const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my server 🚀");
});

app.get("/about", (req, res) => {
  res.send("This is the About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at: example@email.com");
});

app.get("/services", (req, res) => {
  res.send("We offer web development services");
});

app.get("/api", (req, res) => {
  res.json({
    name: "Aysha",
    course: "Full Stack"
  });
});

app.use((req, res) => {
  res.status(404).send("Page not found ❌");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});