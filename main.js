//THEME IS CITIES OF THE WORLD;
//contain the logic of your app. Running it in Terminal start the game. The app should end when a player guesses the correct word or runs out of guesses.
//if statements
//USE INQUIRER FOR PROMPTING. Don't forget toUpperCase();

var audit = require('./word.js');
var inquirer = require('inquirer');
var gameover = false;
var guesses = [];

var userPrompt = function() {
    if (tries < 1 || counter + space === splitWord.length) {
        gameover = true;
    }
    if (gameover) {
        if (tries < 1) {
            console.log("\nYou did not guess the word correctly. You lost.\n");
        } else {
            console.log("\nCongratulatons! You won.\n");
        }
        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "Would you like to play again?"
        }]).then(function(restart) {
            if (restart.again) {
                console.log("Great!");
            } else {
                console.log("\nThat's okay, come again when you feel like playing.\n");
            }
        });
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "Type a letter to guess the word."
        }]).then(function(answers) {
            guesses.push(answers.guess.toUpperCase());
            console.log("\nYour Guesses: " + guesses);
            var checkedLetter = new audit(splitWord, answers.guess);
            checkedLetter.check();
            userPrompt();
        });
    }
};

console.log("Number of spaces:", space);

userPrompt();