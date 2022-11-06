import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBarApi from "./SearchBarApi";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get(`https://swapi.dev/api/people/`, (req, res, ctx) => {
    const reqSearch = req.url.searchParams.get("search");
    if (reqSearch) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: "string",
            birth_year: "string",
            name: "TestName",
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
        ])
      );
    }
  }),
];

const server = setupServer(...handlers);
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Search tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Search renders", async () => {
    render(<SearchBarApi />);
    const element = await screen.findByTestId("api-search");
    const button = await screen.findByTestId("api-search-button");
    const input = await screen.findByTestId("api-search-input");
    expect(element).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("Search", async () => {
    render(<SearchBarApi />);
    const button = await screen.findByTestId("api-search-button");
    // const input = (await screen.findByTestId(
    //   "api-search-input"
    // )) as HTMLInputElement;
    // userEvent.type(input, "item");
    fireEvent.click(button);
    // const logSpy = jest.spyOn(console, "log");
    // expect(logSpy).toHaveBeenCalledWith("TestName");
  });
});
