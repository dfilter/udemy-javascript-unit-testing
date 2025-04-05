import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of numeric strings are provided", () => {
    const stringNumbers = ["1", "2"];

    const cleanedNumbers = cleanNumbers(stringNumbers);

    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if at least one empty string is provided", () => {
    const input = ["", 2];

    const resultFn = () => cleanNumbers(input);

    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error if one of the inputs is non-numeric", () => {
    const input = ["invalid", 1];

    const resultFn = () => cleanNumbers(input);

    expect(resultFn).toThrow(/Invalid number input./);
  });
});
