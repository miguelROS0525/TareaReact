const Note = ({ note, deleteNote }) => {
  const { id, title, description, important } = note;

  return (
    <div
      style={{
        backgroundColor: important ? "#EC7063" : "#FFFFCC",
        position: "relative",
        padding: "1rem",
        borderRadius: "8px",
        minHeight: "150px",
      }}
    >
      <button
        onClick={() => deleteNote(id)}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          background: "transparent",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        X
      </button>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Note;