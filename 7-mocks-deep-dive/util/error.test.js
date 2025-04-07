import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should have properties provided to the constructor", () => {
    const httpError = new HttpError("500", "Something went wrong.", null);

    expect(httpError).toHaveProperty("statusCode");
    expect(httpError).toHaveProperty("message");
    expect(httpError).toHaveProperty("data");
  });

  it("should have property values passed to the constructor", () => {
    const statusCode = 500;
    const message = "Internal Server Error";
    const data = { message: "Something went wrong!" };

    const httpError = new HttpError(statusCode, message, data);

    expect(httpError.data).toEqual(data);
    expect(httpError.message).toBe(message);
    expect(httpError.statusCode).toBe(statusCode);
  });

  it("should contain undefined if no data is provided to constructor", () => {
    const statusCode = 500;
    const message = "Internal Server Error";
    const httpError = new HttpError(statusCode, message);

    expect(httpError.data).toBeUndefined();
    expect(httpError.message).toBe(message);
    expect(httpError.statusCode).toBe(statusCode);
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const message = "message";
    const validationError = new ValidationError(message);

    expect(validationError).toHaveProperty("message");
    expect(validationError.message).toBe(message);
  });
});
