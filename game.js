// Choose Random Word

/**
 * Available words
 */
var wordBank = [
    ["All That", "Hey Arnold", "Double Dare", "Invader ZIM", "Nickelodeon Guts", "Rugrats", "Hey Dude", "SpongeBob SquarePants", "Finders Keepers", "Nick Arcade", "Weinerville", "Rocket Power"],
    ["Alex Mack", "Doug Funnie", "Patti Mayonnaise", "GIR", "Dib", "Gaz", "Helga Pataki", "Tommy Pickles", "Chuckie Finster", "Reptar", "Ickis", "Oblina", "Krumm", "Rocko", "Heffer Wolfe", "Ren", "Stimpy", "Daggett Doofus", "Norbert Foster"]
];

/**
 * Select a Category
 */
var randomCategory = function() {
    if (randomizeWord.categorySelect === wordBank[0]) {
        currentCategory = "Show";
    } else if (randomizeWord.chosenCategory === wordBank[1]) {
        currentCategory = "Character";
    }
};

/**
 * Choose a random word based on category
 */
var randomizeWord = function(categorySelect, wordSelect) {
    this.categorySelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.wordSelect = this.categorySelect[Math.floor(Math.random() * this.categorySelect.length)];
    if (this.categorySelect === wordBank[0]) {
        currentCategory = "Show";
    } else if (this.categorySelect === wordBank[1]) {
        currentCategory = "Character";
    }
};

module.exports = randomizeWord;