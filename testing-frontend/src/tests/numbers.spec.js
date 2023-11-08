import { describe, expect, it } from "vitest";
import { transformToNumber } from "../util/numbers";

describe("Transform Numbers", () => {
  it("should transform string number to a number", () => {
    const number = "1";

    const numberTransformed = transformToNumber(number);

    expect(numberTransformed).toBeTypeOf("number");
  });

  it("should yield NaN for non-transformable values", () => {
    const number = "string";

    const numberTransformed = transformToNumber(number);

    expect(numberTransformed).toBeNaN("number");
  });
});
