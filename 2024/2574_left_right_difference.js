//https://leetcode.com/problems/left-and-right-sum-differences
//2574. Left and Right Sum Differences
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftSum = [];
    const rightSum = [];
    const difference =[];

    let tempSum = 0;
    let tempRightSum = 0;

    for (let i=0; i < nums.length; i++) {
        leftSum.push(tempSum);
        tempSum += nums[i];
    }

    for (let i=nums.length - 1; i >= 0; i--) {
        rightSum.unshift(tempRightSum);
        tempRightSum += nums[i];
    }

    for (let i=0; i < rightSum.length; i++) {
        difference[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return difference;
};
