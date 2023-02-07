//217. Contains Duplicate
//https://leetcode.com/problems/contains-duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums);

    return nums.length === [...numsSet].length ? false : true;
};
