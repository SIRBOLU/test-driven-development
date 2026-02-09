import { describe, it, expect } from "vitest";
import { subtract } from "./subtract";

describe("subtract", () => {
  it("should subtract 5 from 2 and return the difference", () => {
    expect(subtract(5, 2)).toBe(3);
  });
  it("should subtract 4 from -3 and return the difference", () => {
    expect(subtract(4, -3)).toBe(7);
  });
});
