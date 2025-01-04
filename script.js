const legalOperands = ['0','1','2','3','4','5','6','7','8','9'];
const legalOperators = ['+','-','*','/', '='];
const decimal = '.';
const display = document.querySelector('.display');
// Hold user inputs for displaying
let firstNumberList = [];
let secondNumberList = [];
// operation variables
let num1;
let num2;
let operator = "";
// Get all buttons
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
// Attach event listeners 
operands.forEach(function(currentBtn){
    currentBtn.addEventListener('click',function(){
        display.textContent = currentBtn.value;
        firstNumberList.push(currentBtn.value);
        // combine them ex 8,2 82
        let firstNumber = firstNumberList.join('');
        display.textContent = firstNumber;     

        // somehow take all numbers pressed and combine them ex 8,2 82. Until operator or clear clicked
        // Listen for operator or clear
        // listen for numbers and combine them until = or clear is clicked
        // Display legal arguments as user adds them

        // add to array if legal stripping out commas and combining them until op clicked
        // Add op to display
        // listen for numbers again stripping out commas and turning them into a whole number displaying them on the screen until = or clear is clicked
     
    })
})

// basic math functions
function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function operate ( num1, operator, num2){
    if (operator === "+"){
        add(num1, num2);
    }
    else if (operator === "-"){
        subtract(num1, num2);
    }
    else if (operator === "*"){
        multiply(num1, num2);
    }
    else if (operator === "/"){
        divide(num1, num2);
    }
    else{
        return "Error invalid or missing operator"
    }
}

// Need to get what value of what user clicked on.
// Validate its a legal agr. Ex entering an op first should not do anything
// Push number to display & listen for next input
// Push op to display listen for final number
// Listen for = if pressed early don't do anything
// Display result and listen for next op press, backspace or clear
function populateDisplay (){

}

function clearDisplay (){
    
}