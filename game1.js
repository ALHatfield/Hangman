// create a new word where each letter of that word will:
    // 1) display itself when discovered 
    // OR 
    // 2) display _ when not discovered

// word = dog   // display _ _ _
// input = 'd'  // display d _ _
// input = 'o'  // display d o _

// .split('')   // transforms string into array
// .join(' ')   // transforms array into string
// .map()       // transforms each item of an array to something else
// =============================================================================================


var currentWord = new Word("dog");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// console.log(currentWord);                       // Word { string: 'dog', stringArray: ['d', 'o', 'g'], objectArray = [object object] }
// console.log(currentWord.string);                // 'dog'
// console.log(currentWord.stringArray);           // ['d', 'o', 'g']
// console.log(currentWord.objectArray);           // [ {charater: 'd', ...}, {character: 'o', ...}, {character: 'g', ...} ]
// console.log(currentWord.objectArray.map(item => item.displayLetter()));      // ['_', '_', '_']
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function Word(str) {
    this.string = str;                                                  // "dog"
    this.stringArray = str.split('');                                   // ['d', 'o', 'g']
    this.objectArray = this.stringArray.map(item => new Letter(item));  // [ Letter{ charater: 'd' }, Letter{ character: 'o' }, Letter{ character: 'g' } ]
}

function Letter(str) {
    this.character = str;
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



