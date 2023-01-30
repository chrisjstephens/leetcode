//https://leetcode.com/problems/longest-common-prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let x=0; x < strs[0].length; x++) {
        for (let value of strs) {
            if (value[x] !== strs[0][x]) return value.slice(0, x);
        }
    }
    return strs[0];
};
