import React, { useEffect, useState } from "react";
import "./UploadNotes.css";
import { createNote, deleteNote as deleteNoteApi, getNotes, generateStudyPack } from "../api/api";

function UploadNotes() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [studyPackLoading, setStudyPackLoading] = useState(false);
  const [studyPack, setStudyPack] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data.notes || []);
    } catch (error) {
      console.error("Failed to fetch notes", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !subject || !file) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await createNote({
        title,
        subject,
        file: file.name,
      });

      if (response.data.success) {
        setNotes((prev) => [...prev, response.data.note]);
        setTitle("");
        setSubject("");
        setFile(null);
        alert("Note uploaded successfully!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Note upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateStudyPack = async (noteText) => {
    setStudyPackLoading(true);
    setUserAnswers({});
    setSubmittedQuiz(false);
    setFlippedCards({});
    try {
      const response = await generateStudyPack(noteText);
      setStudyPack(response.data.data);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate study pack");
    } finally {
      setStudyPackLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await deleteNoteApi(id);
      if (response.data.success) {
        setNotes((prev) => prev.filter((note) => note.id !== id));
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete note");
    }
  };

  return (
    <div className="upload-page">
      <div className="container">

        <h2 className="page-title">
          📂 Upload Study Notes
        </h2>

        <div className="upload-card">

          <form onSubmit={handleUpload}>

            <div className="mb-3">
              <label className="form-label">Title</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Upload PDF
              </label>

              <input
                type="file"
                className="form-control"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Notes"}
            </button>

          </form>

        </div>

        <div className="notes-table">

          <h3>Uploaded Notes</h3>

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Title</th>

                <th>Subject</th>

                <th>File</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {notes.map((note) => (

                <tr key={note.id}>

                  <td>{note.title}</td>

                  <td>{note.subject}</td>

                  <td>{note.file}</td>

                  <td>

                    <button 
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleGenerateStudyPack(`Title: ${note.title}, Subject: ${note.subject}, File: ${note.file}`)}
                      disabled={studyPackLoading}
                    >
                      {studyPackLoading ? "Generating..." : "Generate AI Pack"}
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {studyPack && (
          <div className="mt-5 p-4 bg-white rounded shadow">
            <h3 className="mb-4">Generated AI Study Pack</h3>
            
            <h4 className="text-secondary">
              Flashcards <small className="text-muted fs-6">(Click a card to flip)</small>
            </h4>
            <div className="row mb-4">
              {studyPack.flashcards.map((card, index) => {
                const isFlipped = flippedCards[index];

                return (
                  <div key={index} className="col-md-6 mb-3">
                    <div 
                      className={`flashcard-container ${isFlipped ? "flipped" : ""}`}
                      onClick={() => setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }))}
                    >
                      <div className="flashcard-inner">
                        <div className="flashcard-front">
                          <span className="badge bg-primary mb-2">Question {index + 1}</span>
                          <p className="card-text fw-bold mb-0">{card.front}</p>
                        </div>
                        <div className="flashcard-back">
                          <span className="badge bg-secondary mb-2">Answer {index + 1}</span>
                          <p className="card-text mb-0">{card.back}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 className="text-secondary mb-3">Quiz</h4>
            {studyPack.quiz.map((q, qIndex) => {
              const selectedOption = userAnswers[qIndex];
              const isSubmitted = submittedQuiz;
              const isCorrect = selectedOption === q.answer;

              return (
                <div key={qIndex} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <p className="card-text fw-bold">Q{qIndex + 1}: {q.question}</p>
                    <div className="list-group">
                      {q.options.map((opt, i) => {
                        let variant = "list-group-item-action";
                        if (selectedOption === opt) {
                          variant = "active";
                        }
                        if (isSubmitted) {
                          if (opt === q.answer) {
                            variant = "list-group-item-success";
                          } else if (selectedOption === opt && !isCorrect) {
                            variant = "list-group-item-danger";
                          }
                        }

                        return (
                          <button
                            type="button"
                            key={i}
                            className={`list-group-item ${variant}`}
                            onClick={() => !submittedQuiz && setUserAnswers(prev => ({ ...prev, [qIndex]: opt }))}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isSubmitted && (
                      <div className={`mt-3 alert ${isCorrect ? "alert-success" : "alert-danger"} py-2 mb-0`}>
                        {isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${q.answer}`}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {!submittedQuiz ? (
              <button 
                className="btn btn-primary btn-lg mt-3"
                onClick={() => setSubmittedQuiz(true)}
              >
                Submit Quiz
              </button>
            ) : (
              <button 
                className="btn btn-outline-secondary btn-lg mt-3"
                onClick={() => {
                  setSubmittedQuiz(false);
                  setUserAnswers({});
                }}
              >
                Retake Quiz
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default UploadNotes;