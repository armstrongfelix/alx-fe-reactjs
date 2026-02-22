import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          flexGrow: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ color: "red" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
