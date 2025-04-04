import { describe, it, expect } from "vitest";

import {
  generateResultText,
  INVALID,
  invalidLanguage,
  NO_CALC,
  resultPrefix,
} from "./output";

describe("generateResultText()", () => {
  it("should return a string no matte which value is passed in", () => {
    const nullValue = null;
    const stringVal = INVALID;
    const numberVal = 1;

    const result1 = generateResultText(nullValue);
    const result2 = generateResultText(stringVal);
    const result3 = generateResultText(numberVal);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it(`should return the expected result text when "${INVALID}" is passed`, () => {
    const invalid = INVALID;

    const result = generateResultText(invalid);

    expect(result).toBe(invalidLanguage);
  });

  it(`should an empty string when "${NO_CALC}" is provided`, () => {
    const noCalc = NO_CALC;
    const emptyString = "";

    const result = generateResultText(noCalc);

    expect(result).toBe(emptyString);
  });

  it(`should return the formatted text when the input is anything not "${NO_CALC}" or "${INVALID}"`, () => {
    const input = "12";
    const expectedResult = resultPrefix + input;

    const result = generateResultText(input);

    expect(result).toBe(expectedResult);
  });
});
