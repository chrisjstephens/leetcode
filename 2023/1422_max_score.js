//1422. Maximum Score After Splitting a String
//https://leetcode.com/problems/maximum-score-after-splitting-a-string
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = 0;

    for (let x = 1; x < s.length; x++) {
        const left = s.slice(0, x).split(0).length - 1;
        const right = s.slice(x).split(1).length - 1;
        let currentSum = left + right;
        max = Math.max(max, currentSum);
    }

    return max;
};
