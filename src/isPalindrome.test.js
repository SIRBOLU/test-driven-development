import { describe, it, test, expect } from "vitest";
import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  it('returns true for "ronaldo"', () => {
    expect(isPalindrome("odlanor")).toBe(false);
  });

  it('returns false for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
});
