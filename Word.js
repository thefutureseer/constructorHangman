// Contains a constructor, Word that Depends ON the Letter constructor. This is 
//used to create an object representing the current word the user is attempting to 
//guess. That means the constructor should define:::

// 1) An array of new Letter objects representing the letters of the underlying word

// 2) A function that returns a string representing the word. This should 
// call the function on each letter object (the first function defined in 
// Letter.js) that displays the character or an underscore and concatenate 
//those together.
// A function that takes a character as an argument and calls the 
//guess function on each letter object (the second function defined in Letter.js)


//list of letters object
//a boolean that says if word is guessed or not
// var LetterObjects = [];
// var guessed = false;
//display text function
// loop through letterobject array
// for each letterobject get the text
// concatenate text for each letter object
// return concatendated string

// actions methods
// isGuessed methos that returns guessed
// if (secret word.isGuessed) {
// 	gameover}
 



var letter = require('./Letter.js');

function Word(target) {
	this.target = target;
	this.lets = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.lets.push( new letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;