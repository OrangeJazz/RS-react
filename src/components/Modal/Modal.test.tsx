import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

const foo = () => {
  console.log("it is here");
};

const itemMock = {
  id: "string",
  birth_year: "string",
  name: "Test Name",
  created: "string",
  edited: "string",
  eye_color: "blue",
  gender: "string",
  hair_color: "string",
  height: "string",
  homeworld: "string",
  mass: "string",
  skin_color: "string",
  url: "string",
  films: [],
  species: [],
  starships: [],
};

describe("Modal tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Modal renders", async () => {
    render(<Modal item={itemMock} onCancel={foo} />);
    const element = await screen.findByTestId("modal");
    expect(element).toBeInTheDocument();
  });

  it("Modal is contain the item data", async () => {
    render(<Modal item={itemMock} onCancel={foo} />);
    const name = await screen.findByTestId("modal-name");
    expect(name).toBeInTheDocument();
    expect(name.textContent).toBe("Test Name");
    const eye = await screen.findByTestId("modal-eye-color");
    expect(eye).toBeInTheDocument();
    expect(eye.textContent).toBe("Eye color: blue");
  });
});
