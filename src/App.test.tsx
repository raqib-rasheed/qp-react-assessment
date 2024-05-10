import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Should show 'Todo App' heading", () => {
    render(<App />);

    const heading = screen.getByText(/Todo App/i);

    expect(heading).toBeInTheDocument();
  });
});
