import { expect, it } from "vitest";
import { add } from "../math";

const sum = (array) => array.reduce((acc, curr) => (acc += +curr), 0);

it("should summarize all number values in an array", () => {
  // Arrange
  const values = [1, 2, 3, 4, 5];

  // Act
  const sumFunction = add(values);

  // Assert
  const sumValues = sum(values);
  expect(sumFunction).toBe(sumValues);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const values = ["string", 1];

  const sumFunction = add(values);

  expect(sumFunction).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const values = ["1", "2"];

  const sumFunction = add(values);

  const sumValues = sum(values);

  expect(sumFunction).toBe(sumValues);
});
