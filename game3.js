var inquirer = require('inquirer');

const wordlist = ["dog", "cat", "mouse", "zebra", "lion"]
var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];

Game();


function Game() {

    var word = new NextWord();

    function NextWord() {
        console.log("\nNextWord()")

        const wordlist = ["dog", "cat", "mouse", "zebra", "lion"]
        var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        console.log("random word is: " + randomWord);

        var currentWordObject = new Word(randomWord);
        // console.log("currentWordObject: " + JSON.stringify(currentWordObject, null, 2));
        // console.log('currentWordObject characters : ' + currentWordObject.letters.map(item => item.character).join(' '));  // d o g
        
        displayWord(currentWordObject);            // [{d},{o},{g}]
    }

    function displayWord(wordObject) {
        console.log("\ndisplayWord()");
        // console.log('currentWordObject characters : ' + wordObject.letters.map(item => item.character).join(" "));  // d o g
        console.log('currentWordObject displayLetter : ' + wordObject.letters.map(item => item.displayLetter()).join(" "));  // _ _ _
        

        // makeGuess(wordObject);             // makeGuess([{d},{o},{g}])
    }

    function makeGuess(wordObject) {
        console.log("\nmakeGuess()")
        // console.log(wordObject);         // console.log([{d},{o},{g}])
        askForLetter(wordObject);           // askForLetter([{d},{o},{g}])
        // .then ...
        // You got it right!
        // You got it wrong!
    }

    function askForLetter(wordObject) {
        console.log('\naskForLetter()')
        // inquirer input
        return inquirer.prompt([
            {
                type: "input",
                name: "choice",
                message: "Guess a letter!"
            }
        ]).then(function(guess) {
            console.log(guess);             // { choice: 'd' }
            displayWord(wordObject);        // displayWord([{d},{o},{g}])

        })
        // self.currentWord.guessLetter(input)  //  returns true/false
        // if true .. if false ...
    }
}


function Word(arg1) {
    this.letters = arg1.split('').map(
        function(arrayItem) {
            return new Letter(arrayItem);
        }
    );
    // console.log("this.letters === " + this.letters);    
    // console.log("typeofthis.letters === " + typeof(this.letters));
    this.guessLetter = function(input) {
        console.log(this.letters);
    }
}

function Letter(character) {

    this.character = character;
    this.discovered = false;

    this.testCharacter = function(input) {
        this.character.test(input);
    }

    this.displayLetter = function() {
        if(this.discovered === false) {
            return "_";
        }
        else if(this.discovered === true) {
            return this.character;
        }
    }
}