//896. Monotonic Array
//https://leetcode.com/problems/monotonic-array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = nums[0] < nums[nums.length-1] ? true : false;

    for (let x = 0; x < nums.length; x++) {
        if (increasing) {
            if (nums[x+1] < nums[x]) return false;
        } else {
            if (nums[x+1] > nums[x]) return false;
        }
    }

    return true;
};
