import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";
import { User } from "../../data/types";
import userEvent from "@testing-library/user-event";

const foo = (user: User) => {
  console.log(user);
};

describe("Form tests", () => {
  window.URL.createObjectURL = jest.fn();
  it("Form renders", async () => {
    render(<Form onSubmit={foo} />);
    const element = await screen.findByTestId("react-form");
    expect(element).toBeInTheDocument();
  });

  it("Submit is disabled", async () => {
    render(<Form onSubmit={foo} />);
    const element = await screen.findByTestId("submit-button");
    expect(element).toBeInTheDocument();
    expect(element).toBeDisabled;
  });

  it("The first name input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = await screen.findByTestId("name-input");
    const button = await screen.findByTestId("submit-button");
    const error = await screen.findByTestId("name-error");
    expect(element).toBeInTheDocument();
    userEvent.type(element, "a");
    expect(element).toHaveValue("a");
    expect(button).not.toBeDisabled;
    fireEvent.click(button);
    expect(error).toHaveClass("error-message");
  });

  it("The last name input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = await screen.findByTestId("surname-input");
    const button = await screen.findByTestId("submit-button");
    const error = await screen.findByTestId("surname-error");
    expect(element).toBeInTheDocument();
    userEvent.type(element, "a123");
    expect(element).toHaveValue("a123");
    expect(button).not.toBeDisabled;
    fireEvent.click(button);
    expect(error).toHaveClass("error-message");
  });

  it("The image input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = (await screen.findByTestId(
      "image-input"
    )) as HTMLInputElement;
    expect(element).toBeInTheDocument();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    userEvent.upload(element, file);
    expect(element.files!.item(0)).toStrictEqual(file);
  });

  it("The date input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = (await screen.findByTestId(
      "date-input"
    )) as HTMLInputElement;
    const button = await screen.findByTestId("submit-button");
    const error = await screen.findByTestId("date-error");
    expect(element).toBeInTheDocument();
    userEvent.type(element, "2023-01-01");
    expect(element.value).toBe("2023-01-01");
    expect(button).not.toBeDisabled;
    fireEvent.click(button);
    expect(error).toHaveClass("error-message");
  });

  it("The radio input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element1 = (await screen.findByTestId(
      "radio-input-1"
    )) as HTMLInputElement;
    const element2 = (await screen.findByTestId(
      "radio-input-2"
    )) as HTMLInputElement;
    const button = await screen.findByTestId("submit-button");
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element2.value).toBe("false");
    expect(element2).toBeChecked();
    userEvent.click(element1);
    expect(element2).not.toBeChecked();
    expect(button).not.toBeDisabled;
  });

  test("The promo input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = (await screen.findByTestId(
      "promoPermission-input"
    )) as HTMLInputElement;
    const button = await screen.findByTestId("submit-button");
    const error = await screen.findByTestId("promoPermission-error");
    expect(element).toBeInTheDocument();
    expect(element.value).toBe("true");
    fireEvent.click(element);
    expect(button).not.toBeDisabled;
    fireEvent.click(button);
    expect(error).toHaveClass("error-message_hidden");
  });

  test("The doll type input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = (await screen.findByTestId(
      "dollType-input"
    )) as HTMLInputElement;
    const button = await screen.findByTestId("submit-button");
    expect(element).toBeInTheDocument();
    expect(element.value).toBe("bjd");
    fireEvent.click(element);
    expect(button).not.toBeDisabled;
  });

  test("The select input on the page", async () => {
    render(<Form onSubmit={foo} />);
    const element = (await screen.findByTestId(
      "select-input"
    )) as HTMLSelectElement;
    expect(element).toBeInTheDocument();
    expect(element.value).toBe("barbie");
  });

  test("reset the form", async () => {
    render(<Form onSubmit={foo} />);
    const name = await screen.findByTestId("name-input");
    userEvent.type(name, "aaa");
    const surname = (await screen.findByTestId(
      "surname-input"
    )) as HTMLInputElement;
    userEvent.type(surname, "bbb");
    const date = (await screen.findByTestId("date-input")) as HTMLInputElement;
    userEvent.type(date, "2020-01-01");
    const promo = (await screen.findByTestId(
      "promoPermission-input"
    )) as HTMLInputElement;
    userEvent.click(promo);
    const img = (await screen.findByTestId("image-input")) as HTMLInputElement;
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    userEvent.upload(img, file);
    const button = await screen.findByTestId("submit-button");
    expect(button).not.toBeDisabled;
    userEvent.click(button);
    expect(button).toBeDisabled;
  });
});
