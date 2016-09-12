// Check player guesses
	function check(letter) {
		userGuesses = document.getElementById("guessed");
		guess = String.fromCharCode(keyPressed.keyCode);
		if (tries === 0 || counter + space === letters.length) {
			alert('Click \'Play Again\' to start a new game.');
			return;
		} else if (guesses.find(function(item) {
				return item === guess.toUpperCase();
			})) {
			console.log("You already guessed that letter. Try another.");
			return;
		}
		for (var i = 0; i < word.length; i++) {
			if (word[i] === guess.toLowerCase() || word[i] === guess.toUpperCase()) {
				letters[i].innerHTML = word[i];
				counter += 1;
			}
		}
		var j = (word.indexOf(guess));
		if (j === -1) {
			tries -= 1;
			life();
		} else {
			life();
		}

		guesses.push(guess.toUpperCase());
		console.log("Your Guesses: " + guesses + "\u0020");
		// console.log('Guesses: ' + guesses);
		// console.log('Tries: ' + tries);
		// console.log('Counter: ' + counter);
	}

/**
 * Check user guess against word
 */
// hangman.prototype.check = function(callback) {
//     var self = this;
//     if (this.isFinished()) {
//         callback();
//     } else {
//         this.progress(function() {
//             self.check(callback);
//         });
//     }
// };