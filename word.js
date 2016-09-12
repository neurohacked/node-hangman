var letters = require('./letters.js');

    // Check player guesses
    // function check(input) {
    //
    //     if (tries === 0 || counter + space === letters.length) {
    //         alert('Click \'Play Again\' to start a new game.');
    //         return;
    //     } else if (guesses.find(function(item) {
    //             return item === guess.toUpperCase();
    //         })) {
    //         console.log("You already guessed that letter. Try another.");
    //         return;
    //     }
    //     for (var i = 0; i < word.length; i++) {
    //         if (word[i] === guess.toLowerCase() || word[i] === guess.toUpperCase()) {
    //             letters[i].innerHTML = word[i];
    //             counter += 1;
    //         }
    //     }
    //     var j = (word.indexOf(guess));
    //     if (j === -1) {
    //         tries -= 1;
    //         life();
    //     } else {
    //         life();
    //     }
    //
    //
    // }

    console.log(letters);

    letters.prototype.isFinished = function() {
        return this.remainingPieces.length === 0;
    };

    letters.prototype.progress = function(callback) {
        var self = this;
        var nextLetter = this.letters.shift();
        if (nextLetter.charAt(0) === "_") {
            inquirer.prompt([{
                type: "input",
                name: "input",
                message: "Guess a letter"
            }]).then(function(answer) {
                guess += answer.input + " ";
                callback();
            });
        } else {
            self.story += nextLetter + " ";
            callback();
        }
        guesses.push(guess.toUpperCase());
        console.log("Your Guesses: " + guesses + "\u0020");
        console.log('Tries: ' + tries);
        console.log('Counter: ' + counter);
    };

    letters.prototype.check = function(callback) {
        var self = this;
        if (this.isFinished()) {
            callback();
        } else {
            this.progress(function() {
                self.check(callback);
            });
        }
    };
