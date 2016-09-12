/**
 * Word Select
 */
module.exports = function() {
    letters = [];
    guesses = [];
    counter = 0;
    space = 0;

    /**
     * Select a Category
     */
    function selectCategory() {
        if (chosenCategory === randomWord[0]) {
            console.log("\nThe chosen category is: Show");
        } else if (chosenCategory === randomWord[1]) {
            console.log("\nThe chosen category is: Character");
        }
        console.log("The word is: " + word);
    }

    /**
     * Choose a word and start the game
     */
    function selectWord() {
        console.log("\n=====================================");
        console.log("Welcome to Nickelodeon themed Hangman");
        console.log("=====================================");

        randomWord = [
            ["All That", "Hey Arnold", "Double Dare", "Invader ZIM", "Nickelodeon Guts", "Rugrats", "Hey Dude", "SpongeBob SquarePants", "Finders Keepers", "Nick Arcade", "Weinerville", "Rocket Power"],
            ["Alex Mack", "Doug Funnie", "Patti Mayonnaise", "GIR", "Dib", "Gaz", "Helga Pataki", "Tommy Pickles", "Chuckie Finster", "Reptar", "Ickis", "Oblina", "Krumm", "Rocko", "Heffer Wolfe", "Ren", "Stimpy", "Daggett Doofus", "Norbert Foster"]
        ];

        chosenCategory = randomWord[Math.floor(Math.random() * randomWord.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

        selectCategory();
    }
    selectWord();
};