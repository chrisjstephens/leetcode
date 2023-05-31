//521. Longest Uncommon Subsequence I
//https://leetcode.com/problems/longest-uncommon-subsequence-i/
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) return -1;
    return a.length > b.length ? a.length : b.length;
};
