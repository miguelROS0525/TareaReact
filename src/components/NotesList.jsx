import { useState } from "react";
import AddNoteForm from "./AddNoteForm";
import Note from "./Note";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const exists = notes.some((n) => note.title === n.title);
    if (exists) {
      alert("Este titulo ya existe");
      return;
    }

    setNotes([...notes, note]);
    alert("Nota Agregada correctamente");
  };

  const deleteNote = (id) => {
    const newList = notes.filter((n) => n.id !== id);
    setNotes(newList);
  };

  return (
    <>
      <AddNoteForm addNote={addNote} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {notes.map((n) => (
          <Note key={n.id} note={n} deleteNote={deleteNote} />
        ))}
      </div>
    </>
  );
};

export default NotesList;