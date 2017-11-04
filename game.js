const inquirer = require('inquirer');

const wordlist = [
    "dog",
    "cat",
    "mouse",
    "zebra",
    "lion"
]

function Word(word) {
    // console.log("New word: " + word);    
    this.letters = word.split("");
}



function start() {
    
    function nextWord() {
        var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        this.currentWord = new Word(randomWord);
        console.log(this.currentWord);

    }

    nextWord();   
}

start();

