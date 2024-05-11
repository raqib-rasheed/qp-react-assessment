import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

describe("App component", () => {
  test("Should show 'Todo App' heading", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const heading = screen.getByText(/Todo App/i);

    expect(heading).toBeInTheDocument();
  });

  test("Should show input to add new todo", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);

    expect(addNewInput).toBeInTheDocument();
  });
});
