import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadNotes from "./pages/UploadNotes";
import AIChat from "./pages/AIChat";
import Summary from "./pages/Summary";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/upload" element={<UploadNotes />} />

            <Route path="/chat" element={<AIChat />} />

            <Route path="/summary" element={<Summary />} />

            <Route path="/quiz" element={<Quiz />} />

            <Route path="/flashcards" element={<Flashcards />} />

            <Route path="/progress" element={<Progress />} />

            <Route path="/profile" element={<Profile />} />

            <Route
              path="/admin"
              element={<AdminDashboard />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;