const num1 = 0;
const num2 = 0;
const operator = "";

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  // Add safety check for dividing by 0.
  return num1 / num2;
};

const operate = (num1, num2, operator) => {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Invalid operator";
  }
};

console.log(operate(num1, num2, "+"));
