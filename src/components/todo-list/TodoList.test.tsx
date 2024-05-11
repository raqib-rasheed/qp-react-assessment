import { screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { mockTodoList } from "../../mocks/todoList.mock";
import { renderWithProvider } from "../../testUtils";

describe("TodoList component", () => {
  test("Should show todo title for the passed to do of 'Do laudry'", () => {
    renderWithProvider(<TodoList todos={mockTodoList} />);

    const title = screen.getByText(/Do laudry/i);

    expect(title).toBeInTheDocument();
  });
});
