import { useState } from "react";

function SignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    let valid = true;

    if (!email.includes("@")) {
      setEmailError("Enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert("Signup Successful!");
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={validateForm}>

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{color:"red"}}>{emailError}</p>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{color:"red"}}>{passwordError}</p>
        </div>

        <button type="submit">Sign Up</button>

      </form>
    </div>
  );
}

export default SignupForm;