import React from "react";
import { Todo } from "../../models/Todo.model";

interface TodoItemProps {
  todo: Todo;
  style: React.CSSProperties;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, style }) => {
  return (
    <div style={style}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => console.log("changed status")}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
