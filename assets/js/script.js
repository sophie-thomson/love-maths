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
                alert(`You clicked ${gameType}`); //Make sure to use backquote when you want to insert a template literal
            }
        }
        )

    }
})

// Everything created within functions to avoid too much global scope

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

