import React from "react";

function StudentCard(props) {
  return (
    <div style={styles.card}>
      <img src={props.image} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.text}><strong>Course:</strong> {props.course}</p>
      <p style={styles.text}><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <StudentCard
        name="Aiden"
        course="Computer Science Engineering"
        year="4th Year"
        image="https://via.placeholder.com/100"
      />

      <StudentCard
        name="John"
        course="Mechanical Engineering"
        year="2nd Year"
        image="https://via.placeholder.com/100"
      />

      <StudentCard
        name="Cary"
        course="Information Science"
        year="1st Year"
        image="https://via.placeholder.com/100"
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    margin: "10px 0",
  },
  text: {
    margin: "5px 0",
  },
};

export default App;