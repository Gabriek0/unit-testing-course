import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  const numbers = [1, 2, 3, 4, 5];
  const sumFunction = add(numbers);

  expect(sumFunction).toBe(15);
});
