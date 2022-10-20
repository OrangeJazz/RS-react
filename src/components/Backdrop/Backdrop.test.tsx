import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Backdrop from "./Backdrop";

const foo = () => {
  console.log();
};

describe("Backdrop tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Backdrop renders", async () => {
    render(<Backdrop onClick={foo} />);
    const element = await screen.findByTestId("backdrop");
    expect(element).toBeInTheDocument();
  });
});
