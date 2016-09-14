// Convert Word to Blanks

var conversion = require('./letter.js');

/**
 * Check word against userChoice
 */
var audit = function(splitWord, inputChoice) {
    this.splitWord = splitWord;
    this.inputChoice = inputChoice;
    this.check = function() {
        for (var i = 0; i < splitWord.length; i++) {
            if (splitWord[i].valueOf() === inputChoice.toUpperCase() || splitWord[i].valueOf() === inputChoice.toLowerCase()) {
                obfuscated.blankWord[i] = splitWord[i].valueOf();
                counter++;
            }
        }
        var j = (splitWord.indexOf(inputChoice));
        console.log(j);
		if (j === -1) {
			tries--;
		}
        obfuscated.printObfuscated();
        console.log("Counter:",counter);
    };
};

module.exports = audit;