// import Welcome from "./Welcome";
// import LoginForm from "./components/LoginForm";
import ToggleMessage from "./components/ToggleMessage";

import React from "react";
/* 
function App(){
  return(
    <div>
      <h1>Props Example</h1>
      <Welcome name="Navya" role="IT Trainer"/>
      <Welcome name="Rahul" role="Data Science Trainer"/>
      <Welcome name="Kavya" role="Soft Skill Trainer"/>
    </div>
  );
} 
*/

function App(){
  return(
    <div>
    {/*   <LoginForm/> */}
    <ToggleMessage/>
    </div>
  );
}

export default App;
