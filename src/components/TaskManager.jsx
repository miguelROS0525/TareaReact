import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskManager = () => {
  const [tareas, setTareas] = useState([]); // Iniciando una lista vacia de tareas

  const addTarea = (tarea) => {
    const esta = tareas.some(t => tarea.titulo === t.titulo )
    if(esta){
        alert('Titulo ya existe')
        return
    }

    // Funcion para manejar nuevas tareas
    setTareas([...tareas, tarea]);
    
    alert('Bien hecho!')
  };

  const completeTask = (id) => {
    const nueva_lista = tareas.map((t) =>
      id === t.id ? { ...t, completado: !t.completado } : t
    );
    setTareas(nueva_lista);
  };

  const deleteTask = (id) => {
    const nueva_lista = tareas.filter((t) => t.id !== id);
    setTareas(nueva_lista);
  };

  return (
    <>
      <TaskForm addTarea={addTarea} />
      <ol className="list-group list-group-numbered">
        {tareas.map((t) => (
          <TaskItem
            tarea={t}
            key={t.id}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </ol>
    </>
  );
};

export default TaskManager;
