// Convert Word to Blanks

var word = require('./game.js');

/**
 * Conversion of word to blanks
 */
var conversion = function(){
	this.blankWord = [];
	this.obfuscate = function(word){
		for (var i = 0; i < splitWord.length; i++){
			if(splitWord[i].valueOf() !== " "){
				this.blankWord.push("_");
			} else{
				this.blankWord.push(" ");
				space = 1;
			}
		}
	};
	this.printObfuscated = function() {
		var obfscWord = this.blankWord.join(' ');
		console.log("\n" + obfscWord + "\n");
        console.log("Tries remaining:", tries);
	};
};

module.exports = conversion;

