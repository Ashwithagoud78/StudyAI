const notes = [
  {
    id: 1,
    title: 'Java Basics',
    subject: 'Java',
    file: 'java.pdf'
  },
  {
    id: 2,
    title: 'DBMS Unit-1',
    subject: 'DBMS',
    file: 'dbms.pdf'
  }
];

function listNotes() {
  return notes;
}

function createNote({ title, subject, file }) {
  const newNote = {
    id: Date.now(),
    title,
    subject,
    file
  };

  notes.push(newNote);
  return newNote;
}

function deleteNote(id) {
  const index = notes.findIndex((note) => note.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedNote = notes.splice(index, 1)[0];
  return deletedNote;
}

module.exports = {
  listNotes,
  createNote,
  deleteNote
};
