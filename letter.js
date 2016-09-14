// Convert Word to Blanks

var splitWord = require('./game.js');

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
		var covertWord = this.blankWord.join(' ');
		console.log("\n" + covertWord + "\n");
        console.log("Tries remaining:", tries);
	};
};

var obfuscated = new conversion(splitWord);// Conversion Instance
obfuscated.obfuscate(splitWord);
obfuscated.printObfuscated();

module.exports = obfuscated;

