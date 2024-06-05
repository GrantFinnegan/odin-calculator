function add(a, b) {
    //Number.parseFloat used to ensure + operator performs addition rather
    //than concatenation in the event a string is passed
    return Number.parseFloat(a) + Number.parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}