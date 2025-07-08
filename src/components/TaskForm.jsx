import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const TaskForm = ({ addTarea }) => {
  const [titulo, setTitulo] = useState("");
  const descripcionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`titulo: ${titulo}`);
    console.log(`descripcion: ${descripcionRef.current.value}`);
    const descripcion = descripcionRef.current.value;

    if(!titulo.trim() || !descripcion.trim()){
      alert('Campos vacios');
      return
    }

    // Creando objeto tarea
    const tarea = {
      id: uuid(),
      titulo,
      descripcion,
      completado: false
    };

    addTarea(tarea);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      {/** Utilzando useState */}
      <input
        className="form-control m-2"
        onChange={(e) => setTitulo(e.target.value)}
        type="text"
        placeholder="Ingrese titulo tarea..."
      />
      {/** Utilzando useRef */}
      <input
        className="form-control m-2"
        ref={descripcionRef}
        type="text"
        placeholder="Ingrese descripcion tarea..."
      />
      <button className="btn btn-success m-2" type="submit">
        Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;
