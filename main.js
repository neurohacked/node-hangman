/**
 * Variables
 */
var hangmanStart = require('./game.js');
var blank = require('./letters.js');

var randomWord; // Array of words
var randomCategory; // Selected category
var word; // Selected word
var letters = []; // Blank letters
var guess; // User guess
var guesses = []; // Stored guesses
var tries; // Tries
var counter; // Count correct guesses
var space; // Handle spaces in words

/**
 * Display remaining tries for incorrect guesses
 */
function triesRemaining() {
    tries = 10;
    if (tries === 1) {
        console.log("\nYou have " + tries + " try remaining.");
    } else {
        console.log("\nYou have " + tries + " tries remaining.");
    }
    if (tries < 1) {
        console.log("Game Over! You did not guess the word correctly.");
    }
    for (var i = 0; i < letters.length; i++) {
        if (counter + space === letters.length) {
            console.log("Congratulations! You Win!");
        }
    }
}

hangmanStart();
triesRemaining();
blank.letters();