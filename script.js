//definitions for tokens
const ADDITION_OPERATOR = '+';
const SUBTRACTION_OPERATOR = '-';
const MULTIPLICATION_OPERATOR = 'x';
const DIVISION_OPERATOR = '/';
const CLEAR_TOKEN = 'C';
const EVALUATE_TOKEN = 'E';

const operatorTokens = [ADDITION_OPERATOR, SUBTRACTION_OPERATOR, MULTIPLICATION_OPERATOR, DIVISION_OPERATOR];
const digitTokens = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

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

//returns Number result of operation
//takes operator token (an element of OPERATOR_TOKENS)
//and the two numbers for it to operate on
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

//object for keeping track of display text
//knowing what part of the text is the first number, operator, and last number
//is extremely useful for ensuring only one operator is used in total, and only
//one . is used in each number
let displayText = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    cursor: '_'
};
const display = document.querySelector("#display");

//button press event handling is kept in one function to simplify event
//listener assignment.
//arg can be any value defined in the token definition section.
function handleButtonPress (token) {
    //clear display
    if (token === CLEAR_TOKEN) {
        clearCalculatorState();
    }

    //evaluate
    else if (token === EVALUATE_TOKEN) {
        evaluateCalculatorState();
    }
    
    //digits and dots are added to first number if no operator has entered
    //and to the second if an operator has already been entered
    else if (digitTokens.includes(token)) {
        displayText.operator === '' ? 
            displayText.firstNumber += token :
            displayText.secondNumber += token; 
    }

    //operator token handling
    //after one operator is entered, subsequent ones over write it
    else if (operatorTokens.includes(token)) {
        setOperator(token);
    }


    display.textContent = displayText.firstNumber + ' ' +
        displayText.operator + ' ' +
        displayText.secondNumber +
        displayText.cursor;
}

function clearCalculatorState (){
    displayText.firstNumber = '';
    displayText.secondNumber = '';
    displayText.operator = '';
}

//evaluate expression held in calculator state and store it as the firstNumber.
//Clears operator and second number, leaving only the result
//this both displays the result and allows the user to easily further operate on the result
function evaluateCalculatorState () {
        //ensure all fields are full
        let isExpressionComplete = 
            displayText.firstNumber &&
            displayText.operator !== '' &&
            displayText.secondNumber !== '';
        if (isExpressionComplete) {
            displayText.firstNumber = operate(
                displayText.operator,
                displayText.firstNumber,
                displayText.secondNumber);
            displayText.operator = '';
            displayText.secondNumber = '';
        }
}

//sets the operator in calculator expression
function setOperator(token) {
    displayText.operator = token;
}