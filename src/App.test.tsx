import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

test("full app rendering/navigating", async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/main page/i)).toBeInTheDocument();
  await userEvent.click(screen.getByText(/about/i));
  expect(screen.getByText(/about us/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Error/i)).toBeInTheDocument();
});
