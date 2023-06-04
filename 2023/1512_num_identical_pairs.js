//1512. Number of Good Pairs
//https://leetcode.com/problems/number-of-good-pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] === nums[y]) count++;
        }
    }
    return count;
};
