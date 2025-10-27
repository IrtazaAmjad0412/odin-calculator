let num1 = "";
let num2 = "";
let operator = "";
let resultDisplayed = false;

const display = document.querySelector(".display");

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 === 0 ? "Can't divide by zero" : num1 / num2);

const operate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid Operator";
  }

  if (typeof result === "number") {
    result = Math.round(result * 100000) / 100000;
  }

  return result;
};

const updateDisplay = (text) => {
  display.textContent = text;
};

const handleNumberClick = (num) => {
  if (resultDisplayed) {
    num1 = num;
    num2 = "";
    operator = "";
    resultDisplayed = false;
    updateDisplay(num1);
  } else if (!operator) {
    num1 += num;
    updateDisplay(num1);
  } else {
    num2 += num;
    updateDisplay(num2);
  }
};

const handleOperatorClick = (op) => {
  if (!num1) return;

  if (num2) {
    num1 = String(operate(Number(num1), Number(num2), operator));
    num2 = "";
    updateDisplay(num1);
  }

  operator = op;
  resultDisplayed = false;
};

const handleEqualsClick = () => {
  if (!num1 || !num2 || !operator) return;

  num1 = String(operate(Number(num1), Number(num2), operator));
  num2 = "";
  operator = "";
  resultDisplayed = true;
  updateDisplay(num1);
};

const handleClearClick = () => {
  num1 = "";
  num2 = "";
  operator = "";
  resultDisplayed = false;
  updateDisplay("");
};

document.querySelectorAll(".number").forEach((btn) => {
  btn.addEventListener("click", () => handleNumberClick(btn.textContent));
});

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", () => handleOperatorClick(btn.textContent));
});

document.querySelector(".equal").addEventListener("click", handleEqualsClick);
document.querySelector(".clear").addEventListener("click", handleClearClick);
