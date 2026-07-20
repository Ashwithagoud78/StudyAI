import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { getDashboardData } from "../api/api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboardData();
        setData(response.data.data);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) {
    return <div className="container mt-5">Loading dashboard...</div>;
  }

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
              <h3>{data.stats.notesUploaded}</h3>
              <p>Notes Uploaded</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card green">
              <h3>{data.stats.quizzesTaken}</h3>
              <p>Quizzes Taken</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card orange">
              <h3>{data.stats.studyProgress}</h3>
              <p>Study Progress</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card purple">
              <h3>{data.stats.aiQuestions}</h3>
              <p>AI Questions</p>
            </div>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="section-box">

          <h4>Quick Actions</h4>

          <div className="quick-buttons">

            {data.quickActions.map((action) => (
              <Link key={action.path} to={action.path} className="btn btn-primary me-2 mb-2">
                {action.label}
              </Link>
            ))}

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

              {data.recentNotes.map((note) => (
                <tr key={note.subject}>
                  <td>{note.subject}</td>
                  <td>{note.uploaded}</td>
                </tr>
              ))}

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

              {data.recentQuizScores.map((score) => (
                <tr key={score.quiz}>
                  <td>{score.quiz}</td>
                  <td>{score.score}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;