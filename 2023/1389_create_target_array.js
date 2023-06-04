//1389. Create Target Array in the Given Order
//https://leetcode.com/problems/create-target-array-in-the-given-order
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = [];

    for (let x = 0; x < nums.length; x++) {
        result.splice(index[x], 0, nums[x]);
    }

    return result;
};
