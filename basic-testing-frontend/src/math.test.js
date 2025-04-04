import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  const sum = add([1, 2, 3, 4]);
  expect(sum).toBe(10);
});
