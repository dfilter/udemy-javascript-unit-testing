export const invalidLanguage = "Invalid input. You must enter valid numbers.";
export const resultPrefix = "Result: ";
export const INVALID = "invalid";
export const NO_CALC = "no-calc";

export function generateResultText(calculationResult) {
  if (calculationResult === INVALID) {
    return invalidLanguage;
  } else if (calculationResult !== NO_CALC) {
    return resultPrefix + calculationResult;
  } else {
    return "";
  }
}

export function outputResult(resultText) {
  const output = document.getElementById("result");
  output.textContent = generateResultText(resultText);
}
