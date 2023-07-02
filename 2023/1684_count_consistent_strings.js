//1684. Count the Number of Consistent Strings
//https://leetcode.com/problems/count-the-number-of-consistent-strings
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {

    return words.filter(word => [...word].every(letter => allowed.includes(letter))).length;

};
