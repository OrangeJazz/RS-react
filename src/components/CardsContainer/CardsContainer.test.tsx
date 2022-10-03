import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Doll } from "data/types";
import { CardsContainer } from "./CardsContainer";

const arrDolls: Doll[] = [
  {
    id: 5,
    name: "Happy Holidays Barbie",
    rare: true,
    brand: "Barbie",
    year: 1994,
    type: "play",
    outfit: "full",
    hight: 28,
    img: "../img/dolls/5.jpg",
  },
];
test("cards are render", () => {
  render(<CardsContainer data={arrDolls} />);
  const linkElement = screen.getByText(/Happy Holidays/i);
  expect(linkElement).toBeInTheDocument();
});
