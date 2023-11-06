import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5];

  // Act
  const sumFunction = add(numbers);

  // Assert
  const sumNumbers = numbers.reduce((acc, curr) => (acc += curr), 0);
  expect(sumFunction).toBe(sumNumbers);
});
