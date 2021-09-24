import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders phone code component", () => {
  render(<App />);
  const element = screen.getByText("Phone number");
  expect(element).toBeInTheDocument();
});
