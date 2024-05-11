import React from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <h1>Todo App</h1>
      <TodoList todos={[{ completed: true, id: 1, text: "Todo 1" }]} />
    </div>
  );
}

export default App;
