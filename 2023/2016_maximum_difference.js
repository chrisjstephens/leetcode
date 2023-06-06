//2016. Maximum Difference Between Increasing Elements
//https://leetcode.com/problems/maximum-difference-between-increasing-elements
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxDiff = 0;

    for (let x = 0; x < nums.length; x++) {
      for (let y = x; y < nums.length; y++) {
        let diff = nums[y] - nums[x];
        if (diff > maxDiff) maxDiff = diff;
      }
    }

    return maxDiff > 0 ? maxDiff : -1;
};
