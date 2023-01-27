//https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let tempString = '';
    for (let x of words) {
        tempString += x;
        if (s === tempString) return true;
    }
    return false;
};
