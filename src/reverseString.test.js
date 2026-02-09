import { describe, test, expect } from "vitest";
import { reverseString } from "./reverseString";

describe("reverseString", () => {
  test('reverses "hello" to "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test('reverses "world" to "dlrow"', () => {
    expect(reverseString("world")).toBe("dlrow");
  });
});
