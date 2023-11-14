// Function Fragments
import { calculateResult } from "./src/math.js";
import { outputResult } from "./src/output.js";
import { getUserInput } from "./src/parser.js";
import { validateResult } from "./src/util/validation.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  // Get User Inputs
  const numberInputs = getUserInput(form);

  // Calculate Result
  const result = calculateResult(numberInputs);

  // Validate Result
  const resultText = validateResult(result);

  // Set output element text content
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
