//https://leetcode.com/problems/find-the-difference
//389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let char of s) {
        t = t.replace(char, '');
    }

    return t;
};
