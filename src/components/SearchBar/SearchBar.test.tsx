import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

// Storage Mock
function storageMock() {
  let storage: { [key: string]: string } = {};
  return {
    setItem: function (key: string, value?: string) {
      storage[key] = value || "";
    },

    getItem: function (key: string) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function (key: string) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function (i: number) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
    clear: function () {
      storage = {};
    },
  };
}
window.localStorage = storageMock();
beforeEach(() => localStorage.clear());

test("search bar is render", () => {
  render(<SearchBar />);
  const placeholderText = screen.getByPlaceholderText(/Search dolls/i);
  expect(placeholderText).toBeInTheDocument();
});

test("searching value in local storage", () => {
  render(<SearchBar />);
  userEvent.type(screen.getByRole("searchbox"), "test");
  const expectedStorageValue = localStorage.getItem("searchStr");
  expect(expectedStorageValue).toEqual("test");
  localStorage.clear();
});

test("searching value from local storage set to serch bar", () => {
  render(<SearchBar />);
  userEvent.type(screen.getByRole("searchbox"), "test");
  cleanup();
  render(<SearchBar />);
  const expectedSearchValue = screen.queryByDisplayValue("test");
  expect(expectedSearchValue).toBeInTheDocument();
});
