import { render, RenderResult } from "@testing-library/react";
import React from "react";
import Signup from "./signup";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Signup />);
  return {
    sut,
  };
};

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`);
  expect(fieldStatus.title).toBe(validationError || "Tudo certo!");
  expect(fieldStatus.textContent).toBe(validationError ? "🔴" : "🟢");
};

const testChildCount = (
  sut: RenderResult,
  fieldName: string,
  count: number
): void => {
  const el = sut.getByTestId(fieldName);
  expect(el.childElementCount).toBe(count);
};

const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement;
  expect(button.disabled).toBe(isDisabled);
};

describe("Signup Component", () => {
  test("Should start with initial state", () => {
    const validationError = "Campo obrigatório";
    const { sut } = makeSut();
    testChildCount(sut, "error-wrap", 0);
    testButtonIsDisabled(sut, "submit", true);
    testStatusForField(sut, "email", validationError);
    testStatusForField(sut, "password", validationError);
  });
});
