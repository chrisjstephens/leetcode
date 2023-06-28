//287. Find the Duplicate Number
//https://leetcode.com/problems/find-the-duplicate-number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let numSet = new Set();
    for (let x = 0; x < nums.length; x++) {
        if (!numSet.has(nums[x])) {
            numSet.add(nums[x]);
        } else {
            return nums[x];
        }
    }
};
