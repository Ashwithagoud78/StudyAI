import React, { useEffect, useState } from "react";
import "./UploadNotes.css";
import { createNote, deleteNote as deleteNoteApi, getNotes } from "../api/api";

function UploadNotes() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

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

                    <button className="btn btn-success btn-sm me-2">
                      View
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

      </div>
    </div>
  );
}

export default UploadNotes;