var audit = require('./word.js');
var inquirer = require('inquirer');

var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    console.log("\n=====================================");
    console.log("Welcome to Nickelodeon themed Hangman");
    console.log("=====================================");
    console.log("\nThe chosen category is:", currentCategory);
    console.log("\nTries remaining:", tries);
    currentWord = new audit(chosenWord);
    currentWord.createBlanks();

    console.log("\n" + currentWord.render() + "\n\n");
};

var userPrompt = function() {
    inquirer.prompt([{
        name: "guess",
        message: "Type a letter to guess the word."
    }]).then(function(answers) {
        if (guesses.find(function(item) {
                return item === answers.guess.toUpperCase();
            })) {
            console.log("\nYou already guessed that letter, silly. Try again.\n");
            userPrompt();
        } else {
            guesses.push(answers.guess.toUpperCase());
            console.log("\nYour Guesses: " + guesses);
            letFound = currentWord.check(answers.guess);
            console.log("\nTries remaining:", tries);
            console.log("\n" + currentWord.render() + "\n\n");
            currentWord.wordFound();
            if (tries < 1 || found) {
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
                        startGame();
                    } else {
                        console.log("\nThat's okay, come again when you feel like playing.\n");
                    }
                });
            }
            userPrompt();
        }
    });
};

startGame();
userPrompt();