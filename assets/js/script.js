// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them (to trigger the code to be executed)

// listens for the page to be loaded before executing the code within the function

document.addEventListener("DOMContentLoaded", function() {
    // Gets all of the button elements from the html in an array/list
    let buttons = document.getElementsByTagName("button");
    // to execute the same code for each button in the array, use a for loop:
    // basic format for a loop is (let i=0; i < buttons.length; 1++), but using shortened modern version:
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") { //if the button with the data-type attribute for 'submit' is clicked
                alert("You clicked Submit!"); //create an alert to say 'You clicked...'
            } else {
                let gameType = this.getAttribute("data-type");//tells the system which 'gameType' they have selected from the other data-type options
                runGame(gameType);
                //alert(`You clicked ${gameType}`); //Make sure to use backquote when you want to insert a template literal
            }
        }
        )

    }
    runGame("addition");

})

// Everything created within functions to avoid too much global scope
// Using a 'docstring' instead of a comment (as below with asterisks) tells the code to 
//use the description as a prompt everytime that function is called. A useful reminder!!

/** The main game function 'runGame' is a repeated or 'looped' function that is called when the script is first loaded 
 * and after the user's answer has been processed. */

function runGame(gameType) {
    // Creates two random numbers between 1 and 25. Math.floor rounds the number down to a whole integer.
    // The +1 at the end is to ensure that '0' isn't ever selected as an operand
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    //before you can run the game you need to check which gameType() has been selected!
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; // checking that the gameType is recongised - if not then error message shown.
    }
}

function checkAnswer() {

}

/** Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText); //collects the numbers from the 'innerText' integer displayed in the html (in the DOM)
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText; //collects the operator from the DOM so it can tell the script which 'gameType' to run for the relevant operator.

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; //returns an array which tells the script what to do with the numbers (add them together) and which gameType to run next. 
        //Stay on 'addition'until user changes it.
    } else {
        alert(`Unimplemented operator ${operator}`); //alert message to test if operator is unrecognised, what to do.
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1; //'gets' the element in the html with id "operand1" and set it's textContent to the number generated in the JS.
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

