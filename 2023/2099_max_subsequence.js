//https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum
//2099. Find Subsequence of Length K With the Largest Sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    if (nums.length === k) return nums;

    while (nums.length !=k) {
        let min = Math.min(...nums);
        let index = nums.indexOf(min);
        nums.splice(index, 1);
    }

    return nums;
};
