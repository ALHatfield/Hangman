const inquirer = require('inquirer');





function start() {
    
    // Set starting conditions in a function
        // Reset the guess count
        // Select next word 

    // Function that determines new word

    // Function that 
    

}


var Word = function(word) {
    this.letters = [];
    this.word = word;
    this.addLetter = function(l) {
        this.letters.push(new Letter(l));
    }
}


var Letter = function(letter) {
    this.letter = letter;
}