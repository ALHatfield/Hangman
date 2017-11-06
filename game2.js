// const inquirer = require('inquirer');

const wordlist = [
    "dog",
    "cat",
    "mouse",
    "zebra",
    "lion"
]

// ====================================================================================

// START THE GAME
Game();

// GAME FUNCTION
function Game() {

    startNewGame();

    function startNewGame() {
        console.log("\nGuess the word!");
        this.guessesLeft = 10;
        nextWord();

    }

    function nextWord() {
        var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        var randomWordTwo = "second argument";
        // console.log('randomWord === ' + randomWord);
        this.currentWord = new Word(randomWord);
        // console.log('currentWord === ' + this.currentWord);

        // ========= INQUIRER ===============
        //
        // get INPUT and check if INPUT === currentWord.letters[].item
        //
        //
        // this.solve = function(x) {
        //     if(x === "c") {
        //         console.log("foo");
        //     } else {
        //         console.log("bar")
        //     }
        // }
        // console.log(solve(this.currentWord.letters[0].item));
    }
}
// ====================================================================================


function Word(arg1) {
    this.letters = arg1.split('').map(function(item) {
        return new Letter(item);
    });
    // console.log(this.letters);    

    this.displayLetters = function() {
        return this.letters.map(function(letter) {
            return letter.displayLetter();
        }).join(" ");
    }
    console.log(this.displayLetters());
    // console.log(this.letters[0].item);
}

// ====================================================================================

function Letter(item) {
    this.item = item;
    this.discovered = false;
    this.displayLetter = function() {
        if(this.discovered === false) {
            return "_";
        }
        else if(this.discovered === true) {
            return this.item;
        }
    }
}