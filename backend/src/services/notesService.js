<<<<<<< HEAD
=======
import 'dotenv/config';
import Groq from 'groq-sdk';

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

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export function listNotes() {
  return notes;
}

export function createNote({ title, subject, file }) {
  const newNote = {
    id: Date.now(),
    title,
    subject,
    file
  };

  notes.push(newNote);
  return newNote;
}

export function deleteNote(id) {
  const index = notes.findIndex((note) => note.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedNote = notes.splice(index, 1)[0];
  return deletedNote;
}

export async function generateStudyPack(notesInput) {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a study assistant. You must output valid JSON only. The JSON object must contain two keys: "flashcards" (an array of objects with "front" and "back" string properties) and "quiz" (an array of objects with "question" string, "options" array of 4 strings, and "answer" string properties).'
      },
      {
        role: 'user',
        content: `Generate flashcards and a quiz based on these notes: ${notesInput}`
      }
    ],
    model: 'llama-3.3-70b-versatile',
    response_format: { type: 'json_object' }
  });

  return JSON.parse(completion.choices[0].message.content);
}
>>>>>>> 559978b (used groq api)
