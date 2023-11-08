import { describe, expect, it } from "vitest";
import { add } from "../math";

const sum = (array) => array.reduce((acc, curr) => (acc += +curr), 0);

describe("add function", () => {
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

  it("should yield 0 if an empty array is provided", () => {
    const values = [];

    const sumValues = add(values);

    expect(sumValues).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const sumFunction = () => add();
    expect(sumFunction).toThrowError();
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const value_one = 1;
    const value_two = 2;

    const sumFunction = () => add(value_one, value_two);

    expect(sumFunction).toThrowError(/iterable/);
  });
});
