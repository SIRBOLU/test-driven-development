import { describe, test, expect } from "vitest";
import { findMax } from "./findMax";

describe("findMax", () => {
  test("returns the largest value from array", () => {
    expect(findMax([7, 5, 4, 12, 27])).toBe(27);
  });

  test("returns the largest value from negative numbers", () => {
    expect(findMax([-17, -1, -7, -16, -78])).toBe(-1);
  });
});
