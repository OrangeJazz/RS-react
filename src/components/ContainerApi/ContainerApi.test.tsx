import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContainerApi from "./ContainerApi";
import userEvent from "@testing-library/user-event";

const itemMock = [
  {
    id: "string",
    birth_year: "string",
    name: "string",
    created: "string",
    edited: "string",
    eye_color: "string",
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
  },
];

describe("Container tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Container and cards are renders", async () => {
    render(<ContainerApi items={itemMock} />);
    const element = await screen.findByTestId("container-api");
    const card = await screen.findByTestId("card-api");
    expect(element).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });

  it("Card click is open modal", async () => {
    render(<ContainerApi items={itemMock} />);
    const card = await screen.findByTestId("card-api");
    userEvent.click(card);
    const modal = await screen.findByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("When button clicked modal is close", async () => {
    render(<ContainerApi items={itemMock} />);
    const card = await screen.findByTestId("card-api");
    userEvent.click(card);
    const modal = await screen.findByTestId("modal");
    const button = await screen.findByTestId("modal-button");
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(modal).not.toBeInTheDocument();
  });

  it("When button clicked modal is close", async () => {
    render(<ContainerApi items={itemMock} />);
    const card = await screen.findByTestId("card-api");
    userEvent.click(card);
    const modal = await screen.findByTestId("modal");
    const backdrop = await screen.findByTestId("backdrop");
    expect(backdrop).toBeInTheDocument();
    userEvent.click(backdrop);
    expect(modal).not.toBeInTheDocument();
  });
});
