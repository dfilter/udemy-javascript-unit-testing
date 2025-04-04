import { expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

it("should throw an error if the provided string is empty", () => {
  const emptyString = "";

  const resultFn = () => validateStringNotEmpty(emptyString);

  expect(resultFn).toThrow();
  expect(resultFn).toThrow(/Invalid input/);
});

it("should throw an error if the provided string is empty space only", () => {
  const emptyString = "  ";

  const resultFn = () => validateStringNotEmpty(emptyString);

  expect(resultFn).toThrow();
  expect(resultFn).toThrow(/Invalid input/);
});

it("should throw a type error if the provided parameter is not a string", () => {
  const undefinedVar = undefined;
  const nullVar = null;
  const numberVar = 1;
  const objectVar = {};
  const boolVar = true;
  const bigIntVar = BigInt(1);
  const fnVar = () => {};

  const resultUndefinedFn = () => validateStringNotEmpty(undefinedVar);
  const resultNullFn = () => validateStringNotEmpty(nullVar);
  const resultNumberFn = () => validateStringNotEmpty(numberVar);
  const resultObjectFn = () => validateStringNotEmpty(objectVar);
  const resultBooleanFn = () => validateStringNotEmpty(boolVar);
  const resultBigIntFn = () => validateStringNotEmpty(bigIntVar);
  const resultFnVarFn = () => validateStringNotEmpty(fnVar);

  expect(resultUndefinedFn).toThrow(TypeError);
  expect(resultNullFn).toThrow(TypeError);
  expect(resultNumberFn).toThrow(TypeError);
  expect(resultObjectFn).toThrow(TypeError);
  expect(resultBooleanFn).toThrow(TypeError);
  expect(resultBigIntFn).toThrow(TypeError);
  expect(resultFnVarFn).toThrow(TypeError);
});

it("should throw an error if the parameter is NaN", () => {
  const NaNVar = NaN;
  const undefinedVar = undefined;
  const objVar = {};
  const fnVar = () => {};
  const nullVar = null;
  const boolVar = true;
  const arrayVar = [];

  const resultFn = () => validateNumber(NaNVar);
  const undefinedVarResultFn = () => validateNumber(undefinedVar);
  const objVarResultFn = () => validateNumber(objVar);
  const fnVarResultFn = () => validateNumber(fnVar);
  const nullVarResultFn = () => validateNumber(nullVar);
  const boolVarResultFn = () => validateNumber(boolVar);
  const arrayVarResultFn = () => validateNumber(arrayVar);

  expect(resultFn).toThrow(/Invalid number input/);
  expect(undefinedVarResultFn).toThrow(/Invalid number input/);
  expect(objVarResultFn).toThrow(/Invalid number input/);
  expect(fnVarResultFn).toThrow(/Invalid number input/);
  expect(nullVarResultFn).toThrow(/Invalid number input/);
  expect(boolVarResultFn).toThrow(/Invalid number input/);
  expect(arrayVarResultFn).toThrow(/Invalid number input/);
});

it("should not throw an error if the parameter is not NaN", () => {
  const numberInput = 1;

  const resultFn = () => validateNumber(numberInput);

  expect(resultFn).not.toThrow(/Invalid number input/);
});
