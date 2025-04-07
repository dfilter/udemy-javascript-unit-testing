import { describe, it, expect } from "vitest";
import { ValidationError } from "./errors.js";
import { validateNotEmpty } from "./validation.js";

describe("validateNotEmpty()", () => {
  it("should throw an exception when an empty string is passed", () => {
    const emptyString = "";
    const emptySpaceString = "  ";

    expect(() => validateNotEmpty(emptyString, "some message")).toThrowError(
      ValidationError
    );
    expect(() =>
      validateNotEmpty(emptySpaceString, "some message")
    ).toThrowError(ValidationError);
  });

  it("should throw an error with the provided error message", () => {
    const emptyString = "";
    const errorMessage = "Error!";

    expect(() => validateNotEmpty(emptyString, errorMessage)).toThrow(
      errorMessage
    );
  });
});
