//1816. Truncate Sentence
//https://leetcode.com/problems/truncate-sentence
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ').splice(0, k).join(' ');
};
