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
    var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log('randomWord === ' + randomWord);
    // console.log(typeof(randomWord));
    this.currentWord = new Word(randomWord);

    // console.log('this.currentWord === ' + this.currentWord);
    // console.log('typeof(this.currentWord) === ' + typeof(this.currentWord));   
    // console.log(this.currentWord.lettersArrayObject);                                                       // Array to loop through
    // console.log(this.currentWord.lettersArrayObject.map(itemObject => itemObject.character));               // logs the itemObject.character of each letter  
    // console.log(this.currentWord.lettersArrayObject.map(itemObject => typeof(itemObject.character)));       // Checks the typeof of each item.character
    // console.log(this.currentWord.lettersArrayObject[0].displayLetter());                                    // invokes displayLetter() on the first itemObject in the array
    
    function displayWord() {
        var word = this.currentWord.lettersArrayObject.map(itemObject => itemObject.displayLetter()).join(" ");
        console.log(word);       
    }
    displayWord();
}

// ====================================================================================


function Word(randomWordString) {
    this.lettersArray = randomWordString.split('');                         // ["d","o","g"]
    this.lettersArrayObject = this.lettersArray.map(       
        function(arrayItem) {
            return new Letter(arrayItem);                       // [ {this.character = "d", this.discovered = false},{this.character = "o", this.discovered = false},{this.character = "o", this.discovered = false} ]
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
