/**
 * Word creation for game from chosenWord
 */
exports.hangmanWord = function(word) {
    this.word = word;
    this.characters = word.split('');
};

/**
 * Create blanks for the word and handle spaces
 */
exports.hangmanWord.prototype.print = function() {
    for (var i = 0; i < currentWord.characters.length; i++) {
        if (currentWord.characters[i] === " ") {
            guess = " ";
            space = 1;
        } else {
            guess = "_";
        }
        blank.push(guess);
    }
    console.log("\n" + blank.join(' ') + "\n");
};