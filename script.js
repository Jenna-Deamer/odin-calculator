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
  .addEventListener("click", clearDisplayAndValues);
const equalButton = document.querySelector(".equal-btn");
equalButton.addEventListener("click", function () {
  let sum = operate(num1, operator, num2);
  let sumFixed = sum;
  // Truncate decimals, use parseFloat to turn it back to a number removing padding zeros
  sumFixed = parseFloat(sumFixed.toFixed(5));
  // Display message if user tried to divide by 0
  if (operator === "/" && num1 == 0 && num2 == 0) {
    resetValues();
    updateNumDisplay("):");
  }
  // Use sum as num1 for next operation & display it
  else {
    resetValues();
    num1 = sumFixed;
    getNumber(num1, firstNumberList);
    updateNumDisplay(num1);
  }
});

operands.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    // if operator has value listen for num2
    if (operator !== "") {
      num2 = getNumber(num2, secondNumberList, currentBtn.value);
    }
    if(num2 !== "" && operator !== "") {
      console.log("Num2 and OP have values")
      // disable operator buttons
      operators.forEach(function (currentBtn) {
        currentBtn.classList.add('disabled');
        currentBtn.disabled = true;
       
      });
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

function clearDisplayAndValues() {
  display.textContent = "";
  // reset variables
  num1 = "";
  operator = "";
  num2 = "";
  firstNumberList = [];
  secondNumberList = [];
  // reset visual for disabled buttons
 
}
function resetValues() {
  num1 = "";
  operator = "";
  num2 = "";
  firstNumberList = [];
  secondNumberList = [];
  // Enable buttons & reset visual
     operators.forEach(function (currentBtn) {
      currentBtn.classList.remove('disabled');
      currentBtn.disabled = false;
     
    });
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
// Make num1 & num2 numeric 
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    console.log("Error invalid or missing operator");
  }
}
