import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
    </div>
  );
};

export default AddTodo;
