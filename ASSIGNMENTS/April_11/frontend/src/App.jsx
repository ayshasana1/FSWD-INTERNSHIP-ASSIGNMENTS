import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  // LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password
      });

      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);

      setMessage("Login successful");
    } catch (err) {
      setMessage("Login failed");
    }
  };

  // USER ROUTE
  const getUserData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user", {
        headers: {
          authorization: localStorage.getItem("token")
        }
      });

      setMessage(JSON.stringify(res.data));
    } catch (err) {
      setMessage("User access failed");
    }
  };

  // ADMIN ROUTE
  const getAdminData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin", {
        headers: {
          authorization: localStorage.getItem("token")
        }
      });

      setMessage(JSON.stringify(res.data));
    } catch (err) {
      setMessage("Admin access denied");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <hr />

      <button onClick={getUserData}>Get User Data</button>
      <br /><br />

      <button onClick={getAdminData}>Get Admin Data</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;