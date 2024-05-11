// components/TodoItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/todoSlices";
import { Todo } from "../../models/Todo.model";

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
    <div style={style}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
