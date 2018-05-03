// Takes guesses from user and run a function
// "letter" constructor with a var to store letters guessed & a boolean value storing whether a letter has been guessed.

// A function that takes a character as an argument and checks it against
// the underlying character, updating the stored boolean value to true if it 
// was guessed correctly

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that 
// object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

//constructor named 'letter', displays a blank placeholder, it can switch to a letter.
var letter = function(let){
  this.charac = let;
// A boolean value that stores whether that letter appears
  this.appear = false;
  
	this.letterRender = function(){
    return !(this.appear) ? "_" : this.charac;
   
  };
};


//export the constructor
module.exports = letter;