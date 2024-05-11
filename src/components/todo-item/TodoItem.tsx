import React from "react";
import { useDispatch } from "react-redux";
import { Todo, toggleTodo } from "../../store/todoSlices";
import "./styles.css";

interface TodoItemProps {
  todo: Todo;
  style: React.CSSProperties;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, style }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="TodoItem" style={style}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span className="checkbox-checkmark"></span>
      </label>
      <span
        className="checkbox-label"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
