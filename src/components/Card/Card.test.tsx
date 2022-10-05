import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import { Doll } from "../../data/types";

const testDoll: Doll = {
  id: 5,
  name: "Happy Holidays Barbie",
  rare: true,
  brand: "Barbie",
  year: 1994,
  type: "play",
  outfit: "full",
  hight: 28,
  img: "../img/dolls/5.jpg",
};

test("card is render", () => {
  render(<Card doll={testDoll} />);
  const linkElement = screen.getByText(/Happy Holidays/i);
  expect(linkElement).toBeInTheDocument();
});
