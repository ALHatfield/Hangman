const inquirer = require('inquirer');

const wordlist = [
    "dog",
    "cat",
    "mouse",
    "zebra",
    "lion"
]

// START THE GAME
Game();

// GAME FUNCTION
function Game() {
    function startNewGame() {
        console.log("Guess the word!");
        this.guessesLeft = 10;
        nextWord();
    }
    function nextWord() {
        var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        console.log('randomWord === ' + randomWord);
        this.currentWord = new Word(randomWord);
        // console.log('currentWord === ' + this.currentWord);
    }
    startNewGame();
}
// ================================

function Word(word) {
    this.letters = word.split('').map(function(char) {
        return new Letter(char);
    });
    this.displayLetters = function() {
        return this.letters.map(function(letter) {
            return letter.hideLetter();
        })
    }
    console.log(this.displayLetters());
    // console.log(this.letters[0].char);
}

function Letter(char) {
    this.char = char;
    this.discovered = false;
    this.hideLetter = function() {
        if(this.discovered === false) {
            return "_";
        } else {
            return this.char;
        }
    }
}