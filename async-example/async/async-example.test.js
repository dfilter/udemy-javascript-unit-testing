import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "test@email.com";

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate a token value", () => {
    const testUserEmail = "test@email.com";

    // when passing a promise to expect you must return the result of .toBe*()
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate a token value (async)", async () => {
    const testUserEmail = "test@email.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
