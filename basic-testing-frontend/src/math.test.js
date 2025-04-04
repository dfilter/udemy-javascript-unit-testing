import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResults = numbers.reduce(
    (previous, current) => previous + current,
    0
  );

  // Act
  const sum = add(numbers);

  // Assert
  expect(sum).toBe(expectedResults);
});

it("should yield NaN if at least on invalid number is provided", () => {
  // Arrange
  const inputs = ["invalid", 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values are provided", () => {
  // Arrange
  const numbers = ["1", "2"];
  const expectedResults = numbers.reduce(
    (previous, current) => +previous + +current,
    0
  );

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResults);
});

it("should yield 0 if an empty array is provided", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it("should throw an error if no value is pass into the function", () => {
  // if we expect a function to throw an error we can wrap it in another function...
  const resultFn = () => add();

  // ...and pass to to vitest.
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const number1 = 1;
  const number2 = 2;

  const resultFn = () => add(number1, number2);

  expect(resultFn).toThrow(/is not iterable/);
});
