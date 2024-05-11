import { fireEvent, screen } from "@testing-library/react";
import { renderWithProvider } from "../../testUtils";
import AddTodo from "./AddTodo";

describe("TodoList component", () => {
  test("Should show heading 'Add Todo'", () => {
    renderWithProvider(<AddTodo />);

    const heading = screen.getByText(/Add Todo/i);

    expect(heading).toBeInTheDocument();
  });

  test("Should clear input value on submit", () => {
    renderWithProvider(<AddTodo />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(addNewInput, { target: { value: "test todo" } });
    fireEvent.click(screen.getByText("Add Todo"));

    expect(addNewInput).toHaveValue("");
  });

  test("Should submit input value when enter key is pressed", () => {
    renderWithProvider(<AddTodo />);

    const addNewInput = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(addNewInput, { target: { value: "test todo" } });
    fireEvent.keyDown(addNewInput, { code: "Enter" });

    expect(addNewInput).toHaveValue("");
  });
});
