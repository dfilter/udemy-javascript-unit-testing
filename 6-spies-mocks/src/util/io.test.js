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
  it("should the write file method", () => {
    const data = "Test";
    const filename = "test.txt";

    writeData(data, filename);

    // return expect().resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(filename, data);
  });
});
