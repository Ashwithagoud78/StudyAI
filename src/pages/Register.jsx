import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(user);

    alert("Registration will be connected to backend.");
  };

  return (
    <div className="register-page">

      <div className="container">

        <div className="register-card">

          <h2>Create Account</h2>

          <p>Join StudyAI today.</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <button
              className="btn btn-success w-100"
              type="submit"
            >
              Register
            </button>

          </form>

          <p className="mt-4 text-center">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;