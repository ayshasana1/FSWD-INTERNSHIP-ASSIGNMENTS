import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then(res => res.json())
      .then(data => {
        // 🔥 FIX: Ensure it's always an array
        if (Array.isArray(data)) {
          setStudents(data);
        } else if (data.students) {
          setStudents(data.students);
        } else {
          setStudents([]);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Error retrieving data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Retrieving data... Please wait</h2>;

  return (
    <div>
      <h1>Student List</h1>

      {students.length > 0 ? (
        students.map((s, index) => (
          <p key={index}>{s.name}</p>
        ))
      ) : (
        <p>No students found</p>
      )}
      
    </div>
  );
}

export default App;