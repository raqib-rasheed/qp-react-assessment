import { render } from "@testing-library/react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

export function renderWithProvider(children: ReactNode) {
  return render(<Provider store={store}>{children}</Provider>);
}
