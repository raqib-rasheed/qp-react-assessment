import React from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
// import { mockTodo } from './mocks/todoList.mock';

function App() {
  // To test large todo set gets rendered, comment line number 13 &
  // Uncomment line number 14.

  const todos = useSelector((state: RootState) => state.todos);
  // const todos = new Array(1500).fill(mockTodo);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList todos={todos.todos} />
    </div>
  );
}

export default App;
