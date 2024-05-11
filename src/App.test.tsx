import { fireEvent, screen } from "@testing-library/react";
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

  test("Should show title when new todo is added", () => {
    renderWithProvider(<App />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(addNewInput, { target: { value: "Workout" } });
    fireEvent.click(screen.getByText("Add Todo"));

    const listContainer = screen.getByRole("rowgroup");
    expect(listContainer).toHaveTextContent(/workout/gi);
  });

  test("Should show large title when new todo is added with large title", () => {
    renderWithProvider(<App />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(addNewInput, {
      target: { value: "a test todo title witn large text content" },
    });
    fireEvent.click(screen.getByText("Add Todo"));

    const listContainer = screen.getByRole("rowgroup");
    expect(listContainer).toHaveTextContent(
      /a test todo title witn large text content/gi
    );
  });
});
