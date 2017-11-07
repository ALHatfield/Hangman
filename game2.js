const inquirer = require('inquirer');

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
    
    console.log("\nGuess the word!");
    var guessesLeft = 10;
    function subtractGuessesLeft() {
        guessesLeft -= 1;
        return guessesLeft ;
    }
    var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log('randomWord === ' + randomWord);
    // console.log(typeof(randomWord));
    this.currentWord = new Word(randomWord);
    // console.log('this.currentWord === ' + this.currentWord);
    // console.log('typeof(this.currentWord) === ' + typeof(this.currentWord));

    var input = process.argv[2];
    // console.log(this.currentWord.letters);                                           // Array to loop through
    // console.log(this.currentWord.letters.map(item => typeof(item.character)));       // Checks the typeof of each item.character
    // console.log(this.currentWord.letters[0].displayLetter());                        // function to invoke for each
    function displayWord() {
        var word = this.currentWord.letters.map(
            function(item) {
                if(item.character === input) {
                    console.log("You discovered a letter!")
                    item.discovered = true;
                    return item.displayLetter();
                } else {
                    return item.displayLetter();
                }
            }
        ).join(" ");
        console.log(word);       
    }
    displayWord();
}

// ====================================================================================


function Word(arg1) {
    this.letters = arg1.split('').map(
        function(arrayItem) {
            return new Letter(arrayItem);
        }
    );
    // console.log("this.letters === " + this.letters);    
    // console.log("typeofthis.letters === " + typeof(this.letters));
}

// ====================================================================================

function Letter(character) {
    this.character = character;
    this.discovered = false;
    this.displayLetter = function() {
        if(this.discovered === false) {
            return "_";
        }
        else if(this.discovered === true) {
            return this.character;
        }
    }
}




// var randomWord = "dog";
// var currentWord = new Word(randomWord);

// word(randomWord) {
//     // 1. "dog" Take the argument 
//     // 2. ["d","o","g"] Turn dog into an array with .split("")
//     // 3. [{},{},{}] Transforms each item of the array into an object using .map()
//     [ 
//         { 
//             this.character = "d", 
//             this.discovered = false, 
//             this.displayLetter = [function] 
//         } , 
//         {
//             this.character = "o",
//             this.discovered = false,
//             this.displayLetter = [function]
//         }, 
//         {
//             this.character = "g",
//             this.discovered = false,
//             this.displayLetter = [function]
//         } 
//     ]
// }
