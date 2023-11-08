import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "../util/validation";

describe("validateStringNotEmpty function", () => {
  it("should be throw an error if the string is empty", () => {
    const value = "";

    const validateFunction = () => validateStringNotEmpty(value);

    expect(validateFunction).toThrowError(/empty/);
  });

  it("should not throw an error if the string is not empty", () => {
    const value = "string";

    const validateFunction = () => validateStringNotEmpty(value);

    expect(validateFunction).not.toThrowError();
  });

  it.each([1, {}, true])(
    `should be throw an error if the value is not string: %s`,
    (value) => {
      const validateFunction = () => validateStringNotEmpty(value);

      expect(validateFunction).toThrowError(/is not a function/);
    }
  );
});

describe("validateNumber function", () => {
  it("should be throw an error if the value is not a number", () => {
    const value = "string";

    const validateFunction = () => validateNumber(value);

    expect(validateFunction).toThrowError(/Invalid number input./);
  });

  it("should not throw an error if the value is a number", () => {
    const value = 10;

    const validateFunction = () => validateNumber(value);

    expect(validateFunction).not.toThrowError();
  });
});
