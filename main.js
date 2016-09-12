/**
 * Variables
 */
var inquirer = require('inquirer');

var wordSelect = require('./game.js');
var wordDisplay = require('./letters.js');
var wordCheck = require('./word.js');

var guess;
blank = [];
guesses = [];
tries = 10;
counter = 0;
space = 0;

wordSelect.selectWord();

currentWord = new wordDisplay.hangmanWord(chosenWord);
wordPieces = currentWord.letters;

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

triesRemaining();
currentWord.print();