export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

export function validateNumber(number) {
  const isNotNumberType = typeof number !== "number";

  if (isNaN(number) || isNotNumberType) {
    throw new Error("Invalid number input.");
  }
}
