import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest";

import { User } from "./hooks";
const testEmail = "test@test.com";
let user = new User(testEmail);

/*
Depending on which describe block these hooks are defined within
determins for which tests they'll run. For example since these
are in the outer scope they'll run for all tests defined in this
file.

If they were defined within a describe block they would only execute
for the tests within that define block.
*/
beforeAll(() => {
  console.log("beforeAll()");
});

beforeEach(() => {
  user = new User(testEmail);
  console.log("beforeEach()");
});

afterEach(() => {
  // user = new User(testEmail);
  console.log("afterEach()");
});

afterAll(() => {
  console.log("afterAll()");
});

it("should update the email", () => {
  const newTestEmail = "new-email@test.com";
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
