//https://leetcode.com/problems/running-sum-of-1d-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    for (let x = 0; x < nums.length; x++) {
        sum += nums[x];
        nums[x] = sum;
    }
    return nums;
};
