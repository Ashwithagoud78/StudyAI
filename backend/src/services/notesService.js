import { GoogleGenAI, Type } from '@google/genai';

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

const ai = new GoogleGenAI({});

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
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: `Generate flashcards and a quiz based on these notes: ${notesInput}`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          flashcards: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                front: { type: Type.STRING, description: "The question or key concept" },
                back: { type: Type.STRING, description: "The answer or definition" }
              },
              required: ["front", "back"]
            }
          },
          quiz: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "4 multiple choice options" 
                },
                answer: { type: Type.STRING, description: "The correct option from the list" }
              },
              required: ["question", "options", "answer"]
            }
          }
        },
        required: ["flashcards", "quiz"]
      },
    },
  });

  return JSON.parse(response.text);
}