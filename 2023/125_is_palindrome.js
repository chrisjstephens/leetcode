//125. Valid Palindrome
//https://leetcode.com/problems/valid-palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = s.replace(/[^a-z0-9]/gi, '');
    let reverseString = filteredString.split('').reverse().join('');

    return filteredString.toLowerCase() == reverseString.toLowerCase();
};
