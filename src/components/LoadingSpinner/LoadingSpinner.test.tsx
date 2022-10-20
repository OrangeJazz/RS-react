import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "./LoadingSpinner";

describe("Loading spinner tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Spinner renders", async () => {
    render(<LoadingSpinner />);
    const element = await screen.findByTestId("spinner");
    expect(element).toBeInTheDocument();
  });
});
