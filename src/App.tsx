import React from "react";
import "./App.css";
import { AddTodo } from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
    </div>
  );
}

export default App;
