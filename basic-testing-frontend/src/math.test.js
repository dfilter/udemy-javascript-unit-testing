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
