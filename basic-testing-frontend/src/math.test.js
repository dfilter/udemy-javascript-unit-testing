import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3, 4];
  const expectedResults = numbers.reduce(
    (previous, current) => previous + current,
    0
  );

  // Act
  const sum = add(numbers);

  // Assert
  expect(sum).toBe(expectedResults);
});
