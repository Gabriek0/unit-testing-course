import { describe, expect, it } from "vitest";
import { validateResult } from "../util/validation";

// CASES
// If is a input number return input as string
// If is different input types -> number/boolean/string -> return string

describe("validateResult function", () => {
  it("should return error if result is invalid ", () => {
    const resultText = validateResult("invalid");

    expect(resultText).toMatch(/You must enter valid numbers/);
  });

  it("should return the empty string if entered value is no-calc", () => {
    const resultText = validateResult("no-calc");

    expect(resultText).toBe("");
  });

  it("should return entered value as result", () => {
    const value = "3";

    const resultText = validateResult(value);

    expect(resultText).toMatch(`Result: ${value}`);
  });
});
