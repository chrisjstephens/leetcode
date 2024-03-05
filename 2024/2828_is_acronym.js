//2828. Check if a String Is an Acronym of Words
//https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return s === words.map((x) => x[0]).join("");
};
