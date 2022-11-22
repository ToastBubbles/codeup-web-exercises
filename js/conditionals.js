"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    switch (color) {
        case "red":
            return "red is spicy";

        case "blue":
            return "blue is cool";

        case "green":
            return "green cup";

        case "yellow":
            return "Yellow lemonade";

        case "white":
            return "Walter White";

        case "black":
            return "midnight black";

        default:
            return "I aint never dun heard bout that now, go on github outta here wit yo nonsense colors.";



    }

}


console.log(analyzeColor("red"));
console.log(analyzeColor("white"));
console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
function colorExercise() {
    let userColor = prompt("insert color please");

    alert(analyzeColor(userColor));
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount){

    switch (luckyNum){
        case 0:
            return (totalAmount);

        case 1:
            return (totalAmount * 0.90);

        case 2:
            return (totalAmount * 0.75);

        case 3:
            return (totalAmount * 0.65);

        case 4:
            return (totalAmount * 0.50);

        case 5:
            return ("it's free");

        default:
            return "error";

    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
function luckyExercise() {
    let userTotal = prompt(`Get your lucky number!
Enter your total to see if you'll get lucky!`);
    if (luckyNumber === 0) {
        alert(`Bad luck!
    you rolled a ${luckyNumber}. No discount today!
    Your total remains $${parseFloat(userTotal).toFixed(2)}`)
    } else if (luckyNumber === 5) {
        alert(`Holy cow!
    You hit the jackpot with lucky number ${luckyNumber}!
    Literally everything is free, this is not a successful business model.
    Your total is $0.00!`)
    } else {
        alert(`You are lucky number ${luckyNumber}!
Your new total is $${calculateTotal(luckyNumber, userTotal).toFixed(2)}.`)
    }
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function confirmExercise() {
    let userNumb;
    if(confirm(`would you like to enter a number?`)){
        userNumb = prompt(`Enter your number NOW.`);

        if(!isNaN(userNumb)) {
            if((runMath(userNumb).odd - Math.floor(runMath(userNumb).odd)) > 0){
                alert("float");
            }else{
                alert((runMath(userNumb).odd) ? "odd" : "even");
            }

            alert(runMath(userNumb).plus100);
            alert((runMath(userNumb).positive) ? "positive" : "negative");
        }else {
            alert("please enter a number");
        }
    }
}

function runMath(number){

        number = parseFloat(number);
        return {
            odd: (number % 2),
            plus100: (number + 100),
            positive: (number > 0)
        }



}

