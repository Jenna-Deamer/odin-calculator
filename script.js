const decimal = ".";
const display = document.querySelector(".displayContents");
// Hold user inputs for displaying
let firstNumberList = [];
let secondNumberList = [];
// define operation vars
let num1 = "";
let operator = "";
let num2 = "";
// Define buttons
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const clearButton = document
  .querySelector(".clear-btn")
  .addEventListener("click", clearDisplay);
const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", function () {
  let sum = operate(num1, operator, num2);
  updateNumDisplay(sum)
  console.log(sum)



});

operands.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    // if operator has value listen for num2
    if (operator !== "") {
      num2 = getNumber(num2, secondNumberList, currentBtn.value);
    }
    // if operator doesn't have value, listen for num1
    else {
      num1 = getNumber(num1, firstNumberList, currentBtn.value);
    }
  });
});

operators.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    if (num1 !== "") {
      operator = currentBtn.value;
      updateOperatorDisplay(operator);
    }
  });
});

function getNumber(numberValue, numberArray, buttonValue) {
  numberArray.push(buttonValue);
  // combine numbers ex 8,2 82
  numberValue = numberArray.join("");
  updateNumDisplay(numberValue);
  return numberValue;
}

function updateNumDisplay(numberValue) {
  display.textContent = numberValue;
}
function updateOperatorDisplay(operator) {
  display.textContent = operator;
}

function clearDisplay() {
  display.textContent = "";
  // reset variables
  num1 = "";
  operator = "";
  num2 = "";
  firstNumberList = [];
  secondNumberList = [];
}
// basic math functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  console.log("operate called");
  // make num1 & num2 numeric

  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Error invalid or missing operator";
  }
}
