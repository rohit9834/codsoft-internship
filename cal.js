let displayValue = "0";
let currentOperator = "";
let currentValue = 0;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  currentOperator = "";
  currentValue = 0;
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentOperator = operator;
  currentValue = parseFloat(displayValue);
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  const newValue = parseFloat(displayValue);
  if (currentOperator === "+") {
    currentValue += newValue;
  } else if (currentOperator === "-") {
    currentValue -= newValue;
  } else if (currentOperator === "*") {
    currentValue *= newValue;
  } else if (currentOperator === "/") {
    currentValue /= newValue;
  }
  displayValue = currentValue.toString();
  currentOperator = "";
  updateDisplay();
}

updateDisplay();