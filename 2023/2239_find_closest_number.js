//https://leetcode.com/problems/find-closest-number-to-zero
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let minDistance = Math.abs(nums[0]);
    let minValues = [];

    for (let x=0; x< nums.length; x++) {
        //console.log('check', Math.abs(nums[x] - 0), minDistance);
        if (Math.abs(nums[x] - 0) < minDistance) {
            minValues = [];
            minDistance = Math.abs(nums[x] - 0);
            minValues.push(nums[x]);
        } else if (Math.abs(nums[x] - 0) === minDistance) {
            minValues.push(nums[x]);
        }
    }
    //console.log('mv', minValues);
    return minValues.sort((a,b) => a - b)[minValues.length - 1];
};
