import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="container">

        <div className="dashboard-header">

          <h2>Welcome to StudyAI 👋</h2>

          <p>Learn smarter with Artificial Intelligence.</p>

        </div>

        {/* Statistics */}

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="dashboard-card blue">
              <h3>25</h3>
              <p>Notes Uploaded</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card green">
              <h3>12</h3>
              <p>Quizzes Taken</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card orange">
              <h3>82%</h3>
              <p>Study Progress</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card purple">
              <h3>156</h3>
              <p>AI Questions</p>
            </div>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="section-box">

          <h4>Quick Actions</h4>

          <div className="quick-buttons">

            <Link to="/upload" className="btn btn-primary">
              Upload Notes
            </Link>

            <Link to="/chat" className="btn btn-success">
              AI Chat
            </Link>

            <Link to="/summary" className="btn btn-warning">
              Summary
            </Link>

            <Link to="/quiz" className="btn btn-danger">
              Quiz
            </Link>

          </div>

        </div>

        {/* Recent Notes */}

        <div className="section-box">

          <h4>Recent Notes</h4>

          <table className="table table-striped">

            <thead>

              <tr>

                <th>Subject</th>

                <th>Uploaded</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Java Programming</td>

                <td>Today</td>

              </tr>

              <tr>

                <td>DBMS</td>

                <td>Yesterday</td>

              </tr>

              <tr>

                <td>Operating Systems</td>

                <td>2 Days Ago</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Quiz Scores */}

        <div className="section-box">

          <h4>Recent Quiz Scores</h4>

          <table className="table table-bordered">

            <thead>

              <tr>

                <th>Quiz</th>

                <th>Score</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Java Basics</td>

                <td>18 / 20</td>

              </tr>

              <tr>

                <td>DBMS</td>

                <td>16 / 20</td>

              </tr>

              <tr>

                <td>React</td>

                <td>19 / 20</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;