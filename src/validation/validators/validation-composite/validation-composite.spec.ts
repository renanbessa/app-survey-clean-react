import { FieldValidationSpy } from "@/validation/validators/test/";
import { ValidationComposite } from "./validation-composite";

describe("ValidationComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldValidationSpy = new FieldValidationSpy("any_field");
    fieldValidationSpy.error = new Error("first_error_message");
    const fieldValidationSp2 = new FieldValidationSpy("any_field");
    fieldValidationSp2.error = new Error("second_error_message");
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSp2,
    ]);
    const error = sut.validate("any_field", "any_value");
    expect(error).toBe("first_error_message");
  });
});
