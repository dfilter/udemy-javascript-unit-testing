// @vitest-environment happy-dom

import fs from "fs";
import path from "path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

describe("showError()", () => {
  it("should add a paragraph with error message to the id='errors' element", () => {
    showError("test");

    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain an error paragraph initially", () => {
    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should add a paragraph with error message to the id='errors' element", () => {
    const errorMessage = "test";

    showError(errorMessage);

    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(errorMessage);
  });
});
