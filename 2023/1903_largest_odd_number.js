//https://leetcode.com/problems/largest-odd-number-in-string
//1903. Largest Odd Number in String
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for (let x = num.length - 1; x >= 0; x--) {
        if (num[x] % 2 != 0) return num.slice(0, x + 1);
    }
    return "";
};
