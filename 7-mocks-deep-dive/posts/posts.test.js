import { beforeEach, describe, expect, it } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "test title";
const testContent = "test content";
let testFormData;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });

  it("should extract title and content from form data", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });

  it("should throw a ValidationError if title is empty", () => {
    const testFormData = {
      title: "",
      content: "Content",
      get(key) {
        return this[key];
      },
    };

    expect(() => extractPostData(testFormData)).toThrow(
      /A title must be provided./
    );
  });

  it("should throw a ValidationError if content is empty", () => {
    const testFormData = {
      title: "Title",
      content: "",
      get(key) {
        return this[key];
      },
    };

    expect(() => extractPostData(testFormData)).toThrow(
      /Content must not be empty!/
    );
  });
});
