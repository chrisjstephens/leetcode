//https://leetcode.com/problems/maximum-repeating-substring/submissions/
//1668. Maximum Repeating Substring
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let ctr = 0;

    while (sequence.includes(word.repeat(ctr + 1))) {
        ctr++;
    }
    return ctr;
};
