import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when passed numeric string", () => {
  const stringInput = "1";
  const numberResult = 1;

  const result = transformToNumber(stringInput);

  expect(result).toBeTypeOf("number");
  expect(result).toBe(numberResult);
});

it("should return NaN for a non-numeric string", () => {
  const stringInput = "not a number";
  const objectInput = {};

  const result = transformToNumber(stringInput);
  const resultObj = transformToNumber(objectInput);

  expect(result).toBeNaN();
  expect(resultObj).toBeNaN();
});

it("should return a number for array and boolean inputs", () => {
  const booleanInput = false;
  const expectedBooleanResult = 0;
  const arrayInput = [];
  const expectedArrayResult = 0;

  const resultBool = transformToNumber(booleanInput);
  const resultArray = transformToNumber(arrayInput);

  expect(resultBool).toBe(expectedBooleanResult);
  expect(resultArray).toBe(expectedArrayResult);
});

it("should still work with multiple parameters", () => {
  const string1 = "1";
  const string2 = "2";
  const expectedResult = 1;

  const result = transformToNumber(string1, string2);

  expect(result).toBe(expectedResult);
});
