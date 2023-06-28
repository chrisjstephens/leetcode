//1768. Merge Strings Alternately
//https://leetcode.com/problems/merge-strings-alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let fullWord = '';
    let endWord = '';

    let lengthDiff = Math.abs(word1.length - word2.length);
    let loopLen = 0;

    if (word1.length > word2.length) {
        endWord = word1.slice(-lengthDiff);
        loopLen = word2.length;
    } else if (word2.length > word1.length) {
        endWord = word2.slice(-lengthDiff);
        loopLen = word1.length;
    } else {
        loopLen = word1.length;
    }

    for (let x = 0; x < loopLen; x++) {
        fullWord += word1[x];
        fullWord += word2[x];
    }

    return fullWord + '' + endWord;
};
