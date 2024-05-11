import React from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { RootState, store } from "./store/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <h1>Todo App</h1>
        <TodoList todos={todos.todos} />
      </div>
    </Provider>
  );
}

export default App;
