let display = document.querySelector(".display");

let firstValue;
let secondValue;
let operator;

// shows the number pressed into the display
function showFigureInDisplay(figure) {
    display.innerText += figure;
}

// function for the signs (operators)
function selectSign(sign) {
    // add whatever we have on the display at that moment to the first value
    firstValue = parseInt(display.innerText);
    // save the sign operator into the operator variable
    operator = sign;
    // clear the display
    clearEverything();
}

// function that does the whole arithmetics
function equalsTo() {
    let answer = "";

    // gets the current figures on the display and save it as the second value
    secondValue = parseInt(display.innerText);

    // a switch block to perform the arithmetics
    switch (operator) {

        case "subtract":
            answer = firstValue - secondValue;
            break;

        case "multiply":
            answer = firstValue * secondValue;
            break;

        case "add":
            answer = firstValue + secondValue;
            break;

        case "multiply":
            answer = firstValue * secondValue;
            break;

        default:
            alert("Invalid Operator");
            break;
    }

    // output the answer to the display
    display.innerText = answer;
}

// function to handle percentage
function percentage() {
    let answer = "";
    // add whatever we have on the display at that moment to the first value
    firstValue = parseInt(display.innerText);
    // calculate the percentage
    answer = firstValue / 100;
    // display the answer
    display.innerText = answer;
}

// function for plus or minus
function plusOrMinus() {
    let convertedValue = display.innerText.replace("-", "");
    display.innerText = convertedValue;
}

// function for the CE button that cleears the display
function clearEverything() {
    display.innerText = "";
}