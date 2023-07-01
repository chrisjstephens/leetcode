//2460. Apply Operations to an Array
//https://leetcode.com/problems/apply-operations-to-an-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let x=0; x < nums.length - 1; x++) {
        if (nums[x] === nums[x + 1]) {
            nums[x] *= 2;
            nums[x+1] = 0;
        }
    }

    return nums.sort((a,b) => !a - !b);
};
