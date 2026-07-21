import { listNotes, createNote, deleteNote, generateStudyPack } from '../services/notesService.js';

function getNotes(req, res) {
  res.status(200).json({
    success: true,
    notes: listNotes()
  });
}

function addNote(req, res) {
  const { title, subject, file } = req.body;

  if (!title || !subject || !file) {
    return res.status(400).json({
      success: false,
      message: 'Title, subject, and file are required'
    });
  }

  const note = createNote({ title, subject, file });
  return res.status(201).json({
    success: true,
    message: 'Note uploaded successfully',
    note
  });
}

function removeNote(req, res) {
  const deleted = deleteNote(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: 'Note not found'
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Note deleted successfully',
    note: deleted
  });
}

async function generateStudyPackController(req, res) {
  try {
    const { notes } = req.body;

    if (!notes) {
      return res.status(400).json({
        success: false,
        message: 'Notes text is required'
      });
    }

    const studyPack = await generateStudyPack(notes);
    return res.status(200).json({
      success: true,
      data: studyPack
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export {
  getNotes,
  addNote,
  removeNote,
  generateStudyPackController
};