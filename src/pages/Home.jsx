
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>
                Learn Smarter with <span>StudyAI</span>
              </h1>

              <p>
                Upload your notes, chat with AI, generate summaries,
                create quizzes and flashcards, and track your learning
                progress—all in one place.
              </p>

              <Link to="/register" className="btn btn-primary-custom me-3">
                Get Started
              </Link>

              <Link to="/login" className="btn btn-outline-custom">
                Login
              </Link>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                alt="Study"
                className="hero-image"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="section">

        <div className="container">

          <div className="section-title">
            <h2>Features</h2>
            <p>Everything you need for smarter learning.</p>
          </div>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>📄</h1>
                <h4>Upload Notes</h4>
                <p>Upload PDF notes securely.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>🤖</h1>
                <h4>AI Chat</h4>
                <p>Ask questions and receive instant answers.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>📝</h1>
                <h4>Quiz Generator</h4>
                <p>Practice automatically generated quizzes.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>📚</h1>
                <h4>Flashcards</h4>
                <p>Revise concepts quickly using flashcards.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>📈</h1>
                <h4>Progress</h4>
                <p>Track your daily study performance.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card-custom text-center">
                <h1>📖</h1>
                <h4>AI Summary</h4>
                <p>Generate short summaries from long notes.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* How it Works */}
      <section className="how-section">

        <div className="container">

          <div className="section-title">
            <h2>How StudyAI Works</h2>
          </div>

          <div className="row text-center">

            <div className="col-md-3">
              <h1>1️⃣</h1>
              <h5>Register</h5>
              <p>Create your account.</p>
            </div>

            <div className="col-md-3">
              <h1>2️⃣</h1>
              <h5>Upload Notes</h5>
              <p>Upload study material.</p>
            </div>

            <div className="col-md-3">
              <h1>3️⃣</h1>
              <h5>Ask AI</h5>
              <p>Generate summaries and quizzes.</p>
            </div>

            <div className="col-md-3">
              <h1>4️⃣</h1>
              <h5>Track Progress</h5>
              <p>Improve your learning every day.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">
              <h2>1000+</h2>
              <p>Students</p>
            </div>

            <div className="col-md-3">
              <h2>5000+</h2>
              <p>Notes Uploaded</p>
            </div>

            <div className="col-md-3">
              <h2>25000+</h2>
              <p>AI Questions</p>
            </div>

            <div className="col-md-3">
              <h2>99%</h2>
              <p>User Satisfaction</p>
            </div>

          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section className="cta">

        <div className="container text-center">

          <h2>Start Learning with AI Today</h2>

          <p>
            Join thousands of students improving their learning experience.
          </p>

          <Link to="/register" className="btn btn-warning btn-lg">
            Join Now
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;