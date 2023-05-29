//2586. Count the Number of Vowel Strings in Range
//https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowels = ['a','e','i','o', 'u'];
    let validCount = 0;

    for (let x=left; x <= right; x++) {

        if (vowels.includes(words[x][0]) && vowels.includes(words[x][words[x].length - 1])) {
            validCount++;
        }
    }
    return validCount;
};
