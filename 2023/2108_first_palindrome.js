//https://leetcode.com/problems/find-first-palindromic-string-in-the-array
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let x = 0; x < words.length; x++) {
        //console.log(words[x]);
        let reverseString = words[x].split("").reverse().join("");
        //console.log('r', reverseString);
        if (words[x] === reverseString) return reverseString;
    }
    return "";
};
