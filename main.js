/**
 * Variables
 */
var inquirer = require('inquirer');

var wordSelect = require('./game.js');
var wordDisplay = require('./letters.js');

var guess; // User guess

tries = 10;
counter = 0;
space = 0;

/**
 * Display remaining tries for incorrect guesses
 */
function triesRemaining() {
    if (tries > 1) {
        console.log("\nYou have " + tries + " tries remaining.");
    } else {
        console.log("\nYou have " + tries + " try remaining.");
    }
    if (tries < 1) {
        console.log("Game Over! You did not guess the word correctly.");
    }
    for (var i = 0; i < blankLetters.length; i++) {
        if (counter + space === blankLetters.length) {
            console.log("Congratulations! You Win!");
        }
    }
}

// wordDisplay.prototype.isFinished = function() {
//     return hangmanWord.remainingPieces.length === 0;
// };


// wordDisplay.hangmanWord.prototype.isFinished = function() {
//     return this.remainingPieces.length === 0;
// };
//
// wordDisplay.hangmanWord.prototype.check = function(callback) {
//     var self = this;
//     if (this.isFinished()) {
//         callback();
//     } else {
//         this.progress(function() {
//             self.check(callback);
//         });
//     }
// };
//
//
// currentWord.check(function() {
//     currentWord.print();
// });

// wordDisplay.hangmanWord.prototype.print = function() {
//     console.log(letters.join(' '));
// };

// var currentWord = new hangmanWord(chosenWord);


wordSelect();
wordDisplay();
triesRemaining();