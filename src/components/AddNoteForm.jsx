import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const AddNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [important, setImportant] = useState(false);
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const description = descriptionRef.current.value.trim();

    if (!description) {
      alert("Campos vacíos");
      return;
    }

    const note = {
      id: uuid(),
      title,
      description,
      important,
    };

    addNote(note);

    // Limpiar campos
    setTitle("");
    descriptionRef.current.value = "";
    setImportant(false);
  };

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <input
        className="form-control m-2"
        type="text"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control m-2"
        type="text"
        placeholder="Descripción (obligatoria)"
        ref={descriptionRef}
      />

      <label className="m-2">
        <input
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        /> Importante
      </label>

      <button className="btn btn-success m-2" type="submit">
        Agregar Nota
      </button>
    </form>
  );
};

export default AddNoteForm;
