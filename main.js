//`main.js` contains the logic of the app. Running it in Terminal/Bash will start the game.
//grabbing info from word.js, file and storing in var
var Word = require('./Word.js');
var prompt = require('prompt');
//Times user won game
var timesWon = 0;
//Welcome statement and hint to begin playing Hangman
console.log("Let's play Hangman!");
console.log("Guess letters in the name of a famous candy bar");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();
//words to be guessed by user
game = {
 	wordBank: ['hersheys', 'almondjoy', 'reeses', 'snickers', 'milkyway', 'kitkat', 'twix'],
  wordsWon: 0,
//Ticker for guesses remaining
 	guessesRemaining: 10,
//CurrentWrd changes according to the random word
	currentWrd: null,
// The value of the key "sartGame" is a function to Randomly selects a word and uses the Word constructor to store it
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 //getLet grabbes the letter in the current word
		this.currentWrd.getLet();
		this.promptUser();
	 },
// resets the counter of remainin guesses
 	resetGuesses: function(){
		this.guessesRemaining = 10;
 	},
// Prompts the user for each guess, keeps track of the user's remaining guesses, wrong guesses ticks down to 0 untill game over. Correct answer wins!
 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 		 console.log("You guessed: " + result.guessLet);
 		 var manyGuessed = self.currentWrd.checkLetter(result.guessLet);
 				if(manyGuessed ==0) {
 				 console.log("WRONG");
 				self.guessesRemaining--;		
				 } 
				else {		
 				 console.log("CORRECT");
 				 if(self.currentWrd.findWord()){
					(timesWon++);
					console.log("You won! It's: " + '"' + self.currentWrd.target + '"' + "\n"  + "Games won: " + timesWon);
					console.log("-------------------");
					return;
				 }
				}
	console.log("Guesses remaining: " + self.guessesRemaining);
	console.log("-------------------");
				if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
					self.promptUser();
				}
				else if(self.guessesRemaining ==0){
					console.log("Game over." + '\n' + " Correct Word was:", self.currentWrd.target);
				} else {			
				}
				console.log(self.currentWrd.wordRender());
			});
		}
	};
game.startGame();