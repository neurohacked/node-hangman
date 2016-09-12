/**
 * Word creation for game from chosenWord
 */
exports.hangmanWord = function(word) {
    this.word = word;
    this.letters = word.split('');
};

/**
 * Create blanks for the word and handle spaces
 */
exports.hangmanWord.prototype.print = function() {
    for (var i = 0; i < currentWord.letters.length; i++) {
        if (currentWord.letters[i] === " ") {
            guess = " ";
            space = 1;
        } else {
            guess = "_";
        }
        blank.push(guess);
    }
    console.log("\n" + blank.join(' ') + "\n");
};