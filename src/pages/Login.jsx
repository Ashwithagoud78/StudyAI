import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Login functionality will be connected to backend.");
  };

  return (
    <div className="login-page">
      <div className="container">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p>Login to continue learning.</p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <button
              className="btn btn-primary w-100"
              type="submit"
            >
              Login
            </button>

          </form>

          <p className="mt-4 text-center">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;