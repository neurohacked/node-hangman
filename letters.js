/**
 * Convert letters to blanks
 */
module.exports = function() {
    blankLetters = [];
    /**
     * Create blanks for the chosen word and handle spaces
     */
    var hangmanWord = function(word) {
        this.word = word;
        this.remainingPieces = word.split('');
    };

    var currentWord = new hangmanWord(chosenWord);
    var wordPieces = currentWord.remainingPieces;

    for (var i = 0; i < wordPieces.length; i++) {
        if (wordPieces[i] === " ") {
            guess = " ";
            space = 1;
        } else {
            guess = "_";
        }
        blankLetters.push(guess);
    }
    console.log(blankLetters.join(' '));
};