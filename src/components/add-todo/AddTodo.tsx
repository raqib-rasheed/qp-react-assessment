// components/AddTodo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlices";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const enterKeyCode = "Enter";
    if (e.code === enterKeyCode && text) {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onKeyDown={handleEnterKey}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
