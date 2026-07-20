import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          📘 StudyAI
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/upload">
                Upload Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                AI Chat
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/summary">
                Summary
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/quiz">
                Quiz
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/flashcards">
                Flashcards
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/progress">
                Progress
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light ms-3" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-warning ms-2" to="/register">
                Register
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;