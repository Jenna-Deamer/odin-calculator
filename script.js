// Get all buttons
const buttons = document.querySelectorAll('.btn')
// Attach event listeners 
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click',function(){
        console.log("Clicked " + currentBtn.value)
    })
})

// operation variables
let num1;
let num2;
let operator = "";

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