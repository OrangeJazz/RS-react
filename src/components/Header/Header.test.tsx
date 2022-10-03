import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

test("navigation is render", async () => {
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
