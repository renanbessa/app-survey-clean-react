import { FieldValidationSpy } from "@/validation/validators/test/";
import { ValidationComposite } from "./validation-composite";

describe("ValidationComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldValidationSpy = new FieldValidationSpy("any_field");
    const fieldValidationSp2 = new FieldValidationSpy("any_field");
    fieldValidationSp2.error = new Error("any_error_message");
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSp2,
    ]);
    const error = sut.validate("any_field", "any_value");
    expect(error).toBe("any_error_message");
  });
});
