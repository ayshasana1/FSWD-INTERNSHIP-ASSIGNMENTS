const getStudents = (req, res) => {
  const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Rahul" }
  ];

  setTimeout(() => {
    res.json(students);
  }, 2000);
};

module.exports = { getStudents };
