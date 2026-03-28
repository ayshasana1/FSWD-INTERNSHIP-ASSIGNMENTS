import { useEffect, useState } from "react";
import { fetchStudents } from "./services/api";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents()
      .then(data => {
        setStudents(data);
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
      {students.map(s => (
        <p key={s.id}>{s.name}</p>
      ))}
    </div>
  );
}

export default App;
