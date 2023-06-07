//485. Max Consecutive Ones
//https://leetcode.com/problems/max-consecutive-ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, curr = 0;

    for (let x of nums) {
        max = Math.max(max, curr += x);
        if (!x) curr = 0;
    }

    return max;
};
