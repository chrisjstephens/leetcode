//https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer
//2529. Maximum Count of Positive Integer and Negative Integer
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negative = [];
    let positive = [];

    for (let x=0; x < nums.length; x++) {
        if (nums[x] > 0) {
            positive.push(nums[x]);
        } else if (nums[x] < 0) {
            negative.push(nums[x]);
        }
    }

    return Math.max(positive.length, negative.length);
};
