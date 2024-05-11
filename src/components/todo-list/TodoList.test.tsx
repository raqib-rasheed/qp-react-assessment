import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { mockTodoList } from "../../mocks/todoList.mock";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("TodoList component", () => {
  test("Should show todo title for the passed to do of 'Do laudry'", () => {
    render(
      <Provider store={store}>
        <TodoList todos={mockTodoList} />
      </Provider>
    );

    const title = screen.getByText(/Do laudry/i);

    expect(title).toBeInTheDocument();
  });
});
