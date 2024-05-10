import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Should show 'Todo App' heading", () => {
    render(<App />);

    const heading = screen.getByText(/Todo App/i);

    expect(heading).toBeInTheDocument();
  });
  
  test("Should show input to add new todo", () => {
    render(<App />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);

    expect(addNewInput).toBeInTheDocument();
  });
});
