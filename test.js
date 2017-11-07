function mult(arg1, arg2) {
    var r;
    r = arg1 * arg2;
    return (r)
}

mult(2,3);
console.log(mult(2,3));      // works


var numbers = [2, 4, 8, 10];
// var halves = numbers.map(x => x / 2);
var halves = numbers.map(function(x) {
    return (x / 2);
})
console.log(halves);

var lettersGuessed = ["dog","cat","hello"];

function replay() {
    lettersGuessed = [];
    console.log(lettersGuessed);
} 

console.log(lettersGuessed)

replay();

var input = 'a';
var result = /^a/.test(input);
console.log(result);

