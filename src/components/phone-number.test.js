import { render, screen } from "@testing-library/react";
import PhoneNumber from "./phone-number";

test("renders phone code component", () => {
  render(<PhoneNumber />);
  const element = screen.getByPlaceholderText("+49");
  expect(element).toBeInTheDocument();
});

test("renders phone number component", () => {
  render(<PhoneNumber />);
  const element = screen.getByPlaceholderText("123456789");
  expect(element).toBeInTheDocument();
});
