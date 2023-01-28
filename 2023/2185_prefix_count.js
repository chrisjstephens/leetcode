//https://leetcode.com/problems/counting-words-with-a-given-prefixp
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;
    for (let x=0; x < words.length; x++) {
        if (words[x].startsWith(pref)) count++;
    }
    return count;
};
