//1967. Number of Strings That Appear as Substrings in Word
//https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    for (let x = 0; x < patterns.length; x++) {
        if (word.includes(patterns[x])) {
            count++;
        }
    }
    return count;
};
