/**
 * Convert letters to blanks
 */
module.exports = function() {
    blank = [];
    /**
     * Create blanks for the chosen word and handle spaces
     */
    var hangmanWord = function(word) {
        this.word = word;
        this.letters = word.split('');
    };

    currentWord = new hangmanWord(chosenWord);
    wordPieces = currentWord.letters;

    hangmanWord.prototype.print = function() {
        for (var i = 0; i < wordPieces.length; i++) {
            if (wordPieces[i] === " ") {
                guess = " ";
                space = 1;
            } else {
                guess = "_";
            }
            blank.push(guess);
        }
        console.log("\n" + blank.join(' ') + "\n");
    };

};