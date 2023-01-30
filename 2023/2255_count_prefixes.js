//https://leetcode.com/problems/count-prefixes-of-a-given-string
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let lastWord = words[words.length];
    let count = 0;
    for (let x=0; x < words.length; x++) {
        if (s.startsWith(words[x])) count++;
    }
    return count;
};
