const inquirer = require('inquirer');

const wordlist = [
    "dog",
    "cat",
    "mouse",
    "zebra",
    "lion"
]

function Letter(char) {
    this.char = char;
    this.discovered = false;
    this.showLetter = function() {
        return this.char;
    }
    this.hideLetter = function() {
        if(this.discovered === false) {
            return "_";
        } 
        else {
            this.showLetter();
        }
    }
}

function Word(word) {
    // console.log("New word: " + word);    
    this.letters = word.split('').map(function(char) {
        return new Letter(char);
    }),
    this.displayHidden = function() {
        // return this.letters.length;
        for(let i = 0; i < this.letters.length; i++) {
            // console.log(this.letters[i].hideLetter);
            return this.letters[i].hideLetter();
        }
    },
    this.toString = function() {
        return this.letters.join(' ');
    }
}


function start() {

    function startNewGame() {
        console.log("Guess the word!");
        this.guessesLeft = 10;
        nextWord();
    }
    
    function nextWord() {
        var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        this.currentWord = new Word(randomWord);
        // console.log(this.currentWord.displayHidden());
        return this.currentWord.displayHidden();
    }

    startNewGame();
}

start();

