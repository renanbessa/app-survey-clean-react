import { InvalidFieldError } from "@/validation/errors";
import { CompareFieldsValidation } from "./compare-fields-validation";
import faker from "faker";

const makeSut = (valueToCompare): CompareFieldsValidation =>
  new CompareFieldsValidation(faker.database.column(), valueToCompare);

describe("CompareFieldsValidation", () => {
  test("Should return error if compare is invalid", () => {
    const sut = makeSut(faker.random.word());
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError());
  });
});