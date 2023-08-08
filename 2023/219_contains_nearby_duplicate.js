//219. Contains Duplicate II
//https://leetcode.com/problems/contains-duplicate-ii
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashMap = new Map();

    for (let x = 0; x < nums.length; x++) {
        if (x - hashMap.get(nums[x]) <= k) {
            return true;
        }
        hashMap.set(nums[x], x);
    }

    return false;
};
