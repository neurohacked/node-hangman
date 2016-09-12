/**
 * Convert letters to blanks
 */
module.exports = {
    /**
     * Create blanks for the chosen word and handle spaces
     */
    letters: function lettersResult() {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                guess = " ";
                space = 1;
            } else {
                guess = "_";
            }

            letters.push(guess);
            console.log(letters.join(' '));
        }
    }
};