//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
//1662. Check If Two String Arrays are Equivalent
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('');
};
