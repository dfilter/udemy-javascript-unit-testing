import { describe, it, expect, vi, test } from "vitest";

import { sendDataRequest } from "./http.js";
import { HttpError } from "./errors.js";

const restResponseData = { testKey: "testValue" };

// Spy to function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(restResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

// fetch mock replacing global fetch
vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return any available response data", () => {
    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).resolves.toEqual(restResponseData);
  });

  it("should convert the data to json before posting", async () => {
    const testData = { key: "test" };

    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe("Not a string.");
  });

  it("should throw an HttpError in case of non-ok response", () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(restResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });

    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
