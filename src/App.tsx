import React from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <p></p>
      <TodoList todos={todos.todos} />
    </div>
  );
}

export default App;
