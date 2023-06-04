//1913. Maximum Product Difference Between Two Pairs
//https://leetcode.com/problems/maximum-product-difference-between-two-pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let sorted = nums.sort((a,b) => a - b);
    let sL = sorted.length;

    return sorted[sL-1] * sorted[sL-2] - sorted[0] * sorted[1];
};
