const Note = require('../models/Note');

async function listNotes() {
  return await Note.find().sort({ createdAt: -1 }).exec();
}

async function createNote({ title, subject, file }) {
  const newNote = new Note({ title, subject, file });
  await newNote.save();
  return newNote;
}

async function deleteNote(id) {
  const deleted = await Note.findByIdAndDelete(id).exec();
  return deleted;
}

module.exports = {
  listNotes,
  createNote,
  deleteNote
};
