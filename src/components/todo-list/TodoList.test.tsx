import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { mockTodoList } from "../../mocks/todoList.mock";

describe("TodoList component", () => {
  test("Should show todo title for the passed to do of 'Do laudry'", () => {
    render(<TodoList todos={mockTodoList} />);

    const title = screen.getByText(/Do laudry/i);

    expect(title).toBeInTheDocument();
  });
});
