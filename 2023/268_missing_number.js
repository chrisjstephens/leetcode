//https://leetcode.com/problems/missing-number
//268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var realLength = nums.length + 1;
    let currentSum = 0;
    let totalSum = 0;

    for (let y=0; y < nums.length; y++) {
        currentSum += nums[y];
    }

    for(let x=0; x < realLength; x++) {
        totalSum += x;
    }

    return totalSum - currentSum;
};
