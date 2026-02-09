import { describe, it, expect } from "vitest";
import { multiply } from "./multiply";

describe("multiply", () => {
  it("should multiply 2 and 3 and return the product which is 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it("should multiply -4 and 5 and return the product which is -20", () => {
    expect(multiply(-4, 5)).toBe(-20);
  });
});
