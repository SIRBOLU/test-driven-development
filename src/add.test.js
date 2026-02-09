import { describe, it, test, expect } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("should return 5 if 2 and 3 are added", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("should return 5 if -3 and 4 are added", () => {
    expect(add(-3, 4)).toBe(1);
  });
});
