import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((path, data) => new Promise((resolve, reject) => resolve())),
};
