//https://leetcode.com/problems/remove-duplicates-from-sorted-array
//26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numsSet = new Set(nums);

    nums.length = 0;
    nums.push(...numsSet.values())

    return numsSet.size;
};
