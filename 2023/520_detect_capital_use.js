//520. Detect Capital
//https://leetcode.com/problems/detect-capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const UC = word === word.toUpperCase();
    const LC = word === word.toLowerCase();
    const FL = word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();

    if (UC || LC || FL) {
        return true;
    }   else {
        return false;
    }
};
