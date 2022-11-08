import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardApi from "./CardApi";

const foo = () => {
  console.log("it is here");
};

const logSpy = jest.spyOn(console, "log");

const itemMock = {
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
};

describe("Card tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Card renders", async () => {
    render(
      <CardApi
        item={itemMock}
        // setActiveItem={foo}
      />
    );
    const element = await screen.findByTestId("card-api");
    expect(element).toBeInTheDocument();
  });

  it("Card is active", async () => {
    render(
      <CardApi
        item={itemMock}
        // setActiveItem={foo}
      />
    );
    const element = await screen.findByTestId("card-api");
    fireEvent.click(element);
    expect(logSpy).toHaveBeenCalledWith("it is here");
  });
});
