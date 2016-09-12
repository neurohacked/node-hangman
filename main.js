/**
 * Variables
 */
var inquirer = require('inquirer');
var game = require('./game.js');
var letters = require('./letters.js');

var guess;
blank = [];
guesses = [];
tries = 10;
counter = 0;
space = 0;

console.log(game);
game.selectWord();

/**
 * Display remaining tries for incorrect guesses
 */
function triesRemaining() {
    if (tries > 1) {
        console.log("\nYou have " + tries + " tries remaining.");
    } else if (tries === 1) {
        console.log("\nYou have " + tries + " try remaining.");
    } else {
        console.log("Game Over! You did not guess the word correctly.");
    }
    for (var i = 0; i < blank.length; i++) {
        if (counter + space === blank.length) {
            console.log("Congratulations! You Win!");
        }
    }
}

currentWord = new letters.hangmanWord(chosenWord);

triesRemaining();
currentWord.print();