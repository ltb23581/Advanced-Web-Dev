// calculate.js

// Get references to the elements
const screen = document.getElementById('screen');
const clearButton = document.getElementById('clearButton');
const posNegButton = document.getElementById('posNegButton');
const percentButton = document.getElementById('percentButton');
const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');
const equalButton = document.getElementById('equalButton');
const decimalButton = document.getElementById('decimal');

// Variables to hold the current value and operator
let currentInput = '';
let operator = '';
let firstOperand = '';

// Function to update the screen
function updateScreen(value) {
    screen.textContent = value || '0';
}

// Function to handle number button clicks
function handleNumberClick(number) {
    currentInput += number;
    updateScreen(currentInput);
}

// Function to handle decimal button click
function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen(currentInput);
    }
}

// Function to handle operator button clicks
function handleOperator(op) {
    if (currentInput) {
        if (firstOperand === '') {
            firstOperand = currentInput;
        } else if (operator) {
            firstOperand = calculate(firstOperand, currentInput, operator);
        }
        operator = op;
        currentInput = '';
        updateScreen(firstOperand);
    }
}

// Function to handle clear button click
function handleClear() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateScreen();
}

// Function to handle positive/negative toggle
function handlePosNeg() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateScreen(currentInput);
    }
}

// Function to handle percentage button click
function handlePercentage() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateScreen(currentInput);
    }
}

// Function to handle equal button click
function handleEqual() {
    if (currentInput && operator) {
        // Calculate the result
        const result = calculate(firstOperand, currentInput, operator);
        updateScreen(result);
        // Reset for the next calculation
        firstOperand = result;
        operator = '';
        currentInput = '';
    }
}

// Function to perform the calculation
function calculate(a, b, op) {
    switch (op) {
        case '+':
            return (parseFloat(a) + parseFloat(b)).toString();
        case '-':
            return (parseFloat(a) - parseFloat(b)).toString();
        case 'x':
            return (parseFloat(a) * parseFloat(b)).toString();
        case '/':
            if (parseFloat(b) === 0) {
                return 'Error'; // Handle division by zero
            }
            return (parseFloat(a) / parseFloat(b)).toString();
        default:
            return '';
    }
}

// Event listeners for buttons
document.querySelectorAll('.keypad button').forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.id;
        if (id === 'clearButton') {
            handleClear();
        } else if (id === 'posNegButton') {
            handlePosNeg();
        } else if (id === 'percentButton') {
            handlePercentage();
        } else if (id === 'divideButton') {
            handleOperator('/');
        } else if (id === 'multiplyButton') {
            handleOperator('x');
        } else if (id === 'subtractButton') {
            handleOperator('-');
        } else if (id === 'addButton') {
            handleOperator('+');
        } else if (id === 'equalButton') {
            handleEqual();
        } else if (id === 'decimal') {
            handleDecimal();
        } else {
            handleNumberClick(id);
        }
    });
});

