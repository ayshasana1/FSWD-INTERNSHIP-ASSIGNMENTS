const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

let students = [
    { id: 1, name: "Arjun", course: "AI" },
    { id: 2, name: "Priya", course: "Web" }
];


app.get("/students", (req, res) => {
    res.json(students);
});




app.get("/students/add", (req, res) => {

    const newStudent = {
        id:3,
        name:"Rahul",
        course:"ML"
    };

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        students: newStudent
    });
});



app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});