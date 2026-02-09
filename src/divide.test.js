import { describe, it, expect } from "vitest";
import { divide } from "./divide";

describe("divide", () => {
  it("should divide 4 by 2 and return 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
  it("should return null when 2 is divided by 0", () => {
    expect(divide(2, 0)).toBeNull();
  });
});
