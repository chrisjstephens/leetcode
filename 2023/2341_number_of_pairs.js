//2341. Maximum Number of Pairs in Array
//https://leetcode.com/problems/maximum-number-of-pairs-in-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let countPairs = [];
    let countNoPairs = [];
    nums = nums.sort((a, b) => a-b);

    while (nums.length > 0) {
        if (nums[0] === nums[1]) {
          countPairs.push(nums.shift());
          countPairs.push(nums.shift());
        } else {
          countNoPairs.push(nums.shift());
        }
    }

  return [countPairs.length / 2, countNoPairs.length];
};
