import React, { useState } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail); // invalid username/password
    } else {
      alert("Login successful 🎉");

      console.log(data);

      // 👉 store user info (basic)
      localStorage.setItem("user", JSON.stringify(data));

      // 👉 navigate to home
      navigate("/home");
    }
  } catch (error) {
    console.error("Login error:", error);
    if (error.name === 'TypeError') {
      alert("Backend not running? Start with: cd backend && python -m uvicorn main:app --reload");
    } else {
      alert(`Login error: ${error.message || error.detail || 'Try again'}`);
    }
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue shopping</p>

        <form onSubmit={handleLogin} className="login-form">
          
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link to="/register">Sign Up</Link>
          
        </p>
      </div>
    </div>
  );
};

export default Login;
