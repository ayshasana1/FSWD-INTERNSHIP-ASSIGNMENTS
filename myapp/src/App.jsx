import React from "react";
/* 
//create multiple components
function Header(){
  return <h1>My Websites</h1>
}
function Footer(){
  return <p>@ 2026 All Rights Reserved</p>
}

function App(){
  return(
    <div>
      <Header/>
      <p>This is Body Content</p>
      <Footer/>

    </div>
  );
}
 */


/* 
//dynamic component
function Greetings(){
  const name = "Sana";
  return <h2>Hello {name} 👋</h2>
}
function App(){
  return(
    <Greetings/>
  );
}
 */


//lets build a simple profile card

function ProfileCard(){
  return(
    <div style={{
      border: "1px solid gray",
      padding: "20px",
      width: "250px",
      borderRadius: "10px"
    }}>
      <h2>Navya</h2>
      <p>IT Corporate Tech Trainer</p>
      <button>Follow</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <ProfileCard/>
      <ProfileCard/>
    </div>
  );
}
export default App;