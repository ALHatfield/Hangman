# Hangman

<h1>Week_11 Hangman Startup Guide</h1>

<br>

<h3>game1.js</h3>
This is the fundamental start up code for how the constructor functions manipulate the random word string to become an array object with information and functions tagged to each letter.

<h3>game2.js</h3>
This file builds off of game1.js where instead of the argument being a static variable, we can use Math.random to generate a random index number to pull a word from a hard coded array of words.

<h3>game3.js</h3>
This file adds functions inside of the letter constructor that can switch the letter true/false.  This version of hangman declares each function separately.  Note that the random word is being passed as an argument to NextWord() and next word calls other functions passing the same argument to those functions.