import { describe, expect, it } from "vitest";
import { transformToNumber } from "../util/numbers";

describe("transformToNumbers function", () => {
  it("should transform string number to a number", () => {
    const number = "1";

    const numberTransformed = transformToNumber(number);

    expect(numberTransformed).toBe(1).toBeTypeOf("number");
  });

  it.each(["a", {}])(
    `should yield NaN for non-transformable value, testing: %s`,
    (value) => {
      const transformedValue = transformToNumber(value);
      expect(transformedValue).toBeNaN();
    }
  );
});
