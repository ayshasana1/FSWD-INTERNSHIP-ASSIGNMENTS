import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar(){
    const{theme,toggleTheme}=useContext(ThemeContext);

    return(
        <div style={{
            background:theme==="light"?"#eee":"#333",
            color:theme==="light"?"#000":"#fff",
            padding:"10px"
        }}>
            <h2>My App</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    );
}
export default NavBar;
