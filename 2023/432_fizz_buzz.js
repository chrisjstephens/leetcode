//https://leetcode.com/problems/fizz-buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let fizzArray = [];

    for (let x=1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            fizzArray.push("FizzBuzz");
        } else if (x % 3 === 0) {
            fizzArray.push("Fizz");
        } else if (x % 5 === 0) {
            fizzArray.push("Buzz");
        } else {
            fizzArray.push(x.toString());
        }
    }
    return fizzArray;
};
