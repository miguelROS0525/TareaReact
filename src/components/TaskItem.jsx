const TaskItem = ({ tarea, completeTask, deleteTask }) => {
  // destructuring
  const { id, titulo, descripcion, completado } = tarea;
  console.log(id);

  const handleChange = () => {
    completeTask(id);
  };

  const handleClick = () => {
    deleteTask(id);
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{titulo}</div>
        <p className={completado ? "text-decoration-line-through" : ""}>
          {descripcion}
        </p>
      </div>
      <span class="badge text-bg-primary rounded-pill p-2">
        Completada?
        <input type="checkbox" onChange={handleChange} checked={completado} />
      </span>
      <span class="badge text-bg-danger rounded-pill p-2">
        <a onClick={handleClick}>
          Eliminar
        </a>
      </span>
    </li>
  );
};

/**
 * 
 * <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
 */

export default TaskItem;
