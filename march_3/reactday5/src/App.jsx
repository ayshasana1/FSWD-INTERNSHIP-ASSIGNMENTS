import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Routes,Route, Link } from "react-router-dom";


function App(){
  return(
    <div>
      <h1>My Router Demo</h1>
{/* 
      <Routes>
        <Route Path='/' element={<Home/>}/>
        <Route Path='/about' element={<About/>}/>
        <Route Path='/contact' element={<Contact/>}/>
        <Route Path='*' element={<NotFound/>}/>
      </Routes>
       */}

       <nav style={{marginBottom:"20px"}}>
        <Link to='/'>Home</Link> | {" "}
        <Link to='/about'>About</Link> | {" "}
        <Link to='/contact'>Contact</Link> 
       </nav>

       {/* Route Configuration */}
       <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="*" element = {<NotFound/>}/>
       </Routes>
    </div>
  );
}
export default App;