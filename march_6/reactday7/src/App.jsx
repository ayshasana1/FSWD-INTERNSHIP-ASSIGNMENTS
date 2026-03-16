import React, { useState } from "react";
import FormValidation from "./components/FormValidation";

/* 
function App(){
  const handleSubmit = (event)=>{
    event.preventDefault(); //stops page refreshing
    alert("Form Sumited")
  }
  return(
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 */

/* 
function App(){
  const[name,setName]=useState("");
  const handleChange=(e)=>{
    setName(e.target.value);
  }
  return(
    <div>
      <h2>Controlled Component</h2>
      <input type="text"
      valur={name}
      onChange={handleChange}
      placeholder="Enter your Name"
      />
      <p>Your Name: {name}</p>
    </div>
  );
}

export default App;
 */


function App(){
  return(
    <div className="app-container">
      <h1>React Form Validation</h1>
      <FormValidation/>
    </div>
  );
}

export default App;