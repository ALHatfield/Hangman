function test(arg1, arg2) {
    var r;
    r = arg1 * arg2;
    return (r)
}

// test(2,3);
// console.log(test(2,3));      // works


var numbers = [2, 4, 8, 10];
var halves = numbers.map(x => x / 2);
console.log(halves);