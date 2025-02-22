// src/pages/authentication/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with", { email, password });
  };

  return (
    <div className="container py-5 mt-4">
      <h2 className="text-center mt-4">Login to Your Account</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="text-center">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;