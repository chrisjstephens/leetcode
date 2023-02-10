//704. Binary Search
//https://leetcode.com/problems/binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let x=0; x < nums.length; x++) {
        if (nums[x] === target) return x;
    }
    return -1;
};
