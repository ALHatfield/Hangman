const inquirer = require('inquirer');

const wordlist = ["dog", "cat", "mouse", "zebra", "lion"]

function Game() {

    // Sets the guesses to 10 and gets the next word
    this.play = function() {
        // Reset the guesses left and calls next word
    }

    // Creates a new Word object using a random word from the array, asks the user for their guess
    this.nextWord = function() {

    }

    // Uses inquirer to prompt the user for their guess
    this.makeGuess = function() {
        // Ask for letter
    }

    // Asks the user if they want to play again after running out of guessesLeft
    this.askToPlayAgain = function() {

    }

    // Prompts the user for a letter
    this.askForLetter = function() {
        return inquirer.prompt([
            {
                type: "input",
                name: "choice",
                message: "Guess a letter!"
            }
        ])
        .then(function(val) {
            
        })
    }

  // Logs goodbye and exits the node app
    this.quit = function() {
        console.log("\nGoodbye!");
        process.exit(0);
    };


}