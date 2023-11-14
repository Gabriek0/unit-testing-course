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

export function validateResult(result) {
  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  return resultText;
}
