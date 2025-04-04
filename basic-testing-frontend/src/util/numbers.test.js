import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when passed numeric string", () => {
  const stringInput = "1";
  const numberResult = 1;

  const result = transformToNumber(stringInput);

  expect(result).toBe(numberResult);
  expect(result).toBeTypeOf("number");
});

it("should return NaN for a non-numeric string", () => {
  const stringInput = "not a number";

  const result = transformToNumber(stringInput);

  expect(result).toBeNaN();
});

it("should still work with multiple parameters", () => {
  const string1 = "1";
  const string2 = "2";
  const expectedResult = 1;

  const result = transformToNumber(string1, string2);

  expect(result).toBe(expectedResult);
});
