import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProvider } from "./testUtils";

describe("App component", () => {
  test("Should show 'Todo App' heading", () => {
    renderWithProvider(<App />);

    const heading = screen.getByText(/Todo App/i);

    expect(heading).toBeInTheDocument();
  });

  test("Should show input to add new todo", () => {
    renderWithProvider(<App />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);

    expect(addNewInput).toBeInTheDocument();
  });
});
