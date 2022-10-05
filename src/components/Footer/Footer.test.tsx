import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

test("footer is render", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/2022/i);
  expect(linkElement).toBeInTheDocument();
});
