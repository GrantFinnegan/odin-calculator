const ADDITION_OPERATOR = '+';
const SUBTRACTION_OPERATOR = '-';
const MULTIPLICATION_OPERATOR = 'x';
const DIVISION_OPERATOR = '/';

function add(a, b) {
    //Number.parseFloat used to ensure + operator performs addition rather
    //than concatenation in the event a string is passed
    return Number.parseFloat(a) + Number.parseFloat(b);
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}


function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case ADDITION_OPERATOR:
            return add(firstNumber, secondNumber);
        case SUBTRACTION_OPERATOR:
            return subtract(firstNumber, secondNumber);
        case MULTIPLICATION_OPERATOR:
            return multiply(firstNumber, secondNumber);
        case DIVISION_OPERATOR:
            return divide(firstNumber, secondNumber);
    }
}