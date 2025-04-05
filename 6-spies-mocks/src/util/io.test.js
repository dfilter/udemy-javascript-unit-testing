import { expect, it, describe, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

// vi.mock should be called in all the test files where we
// want to test fs for example.
vi.mock("fs");
vi.mock("path", () => ({
  default: {
    join: (...args) => args[args.length - 1],
  },
}));

describe("writeData()", () => {
  it("should execute the writeFile method and check that it returns a promise", () => {
    const data = "Test";
    const filename = "test.txt";

    writeData(data, filename);

    return expect(writeData(data, filename)).resolves.toBeUndefined();
  });

  it("should execute the writeFile method with expected arguments", () => {
    const data = "Test";
    const filename = "test.txt";

    writeData(data, filename);

    expect(fs.writeFile).toBeCalledWith(filename, data);
  });
});
