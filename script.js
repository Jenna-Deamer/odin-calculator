const legalOperands = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const legalOperators = ["+", "-", "*", "/", "="];
const decimal = ".";
const display = document.querySelector(".displayContents");
// Hold user inputs for displaying
let firstNumberList = [];
let secondNumberList = [];
// Operation variables
let num1;
let num2;
// Define buttons
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");

// Attach event listeners
operands.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    firstNumberList.push(currentBtn.value);
    // combine numbers ex 8,2 82
    let firstNumber = firstNumberList.join("");

    populateDisplay(firstNumber);
  });
});

operators.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    let operator = currentBtn.value;
    console.log("Stored " + operator);
    populateDisplay(operator);
  });
});

function populateDisplay(firstNumber, operator, secondNumber) {
  // if firstNumber is a number display
  if (!isNaN(firstNumber)) {
    // Get first Operand(s)
    display.textContent = firstNumber;
  }

  if (!display.innerHTML === "") {
    console.log(operator);
    display.textContent = operator;
  }

  // if op selected listen for a operand for secondNumber operand
  // if secondNumber has at least a operand in it ex 2 or 234 listen for =
  // if firstNumber contains a number & operator contains an operator 
  // if = clicked sum & store sum as firstNumber.
}

function clearDisplay() {}

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
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  } else {
    return "Error invalid or missing operator";
  }
}
