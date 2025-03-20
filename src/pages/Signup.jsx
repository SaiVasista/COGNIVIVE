// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="psychologist">Psychologist</option>
        <option value="psychiatrist">Psychiatrist</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Signup;
