/**
 * Word Select
 */
module.exports = function() {
    guesses = [];

    /**
     * Select a Category
     */
    function selectCategory() {
        if (chosenCategory === wordBank[0]) {
            console.log("\nThe chosen category is: Show");
        } else if (chosenCategory === wordBank[1]) {
            console.log("\nThe chosen category is: Character");
        }
        console.log("The word is: " + chosenWord);
    }

    /**
     * Choose a word and start the game
     */
    function selectWord() {
        console.log("\n=====================================");
        console.log("Welcome to Nickelodeon themed Hangman");
        console.log("=====================================");

        wordBank = [
            ["All That", "Hey Arnold", "Double Dare", "Invader ZIM", "Nickelodeon Guts", "Rugrats", "Hey Dude", "SpongeBob SquarePants", "Finders Keepers", "Nick Arcade", "Weinerville", "Rocket Power"],
            ["Alex Mack", "Doug Funnie", "Patti Mayonnaise", "GIR", "Dib", "Gaz", "Helga Pataki", "Tommy Pickles", "Chuckie Finster", "Reptar", "Ickis", "Oblina", "Krumm", "Rocko", "Heffer Wolfe", "Ren", "Stimpy", "Daggett Doofus", "Norbert Foster"]
        ];

        chosenCategory = wordBank[Math.floor(Math.random() * wordBank.length)];
        chosenWord = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

        selectCategory();
    }
    selectWord();
};