import React, { useState } from "react";

function LoginForm(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('Welcome ${username}');
    };

    return(
        <div>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter Username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                />

                <br /> <br />

                <input type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}
export default LoginForm;