//https://leetcode.com/problems/left-and-right-sum-differences
//2574. Left and Right Sum Differences
function leftRightDifference(nums: number[]): number[] {
     const leftSum: number[] = [];
     const rightSum: number[] = [];
     const difference: number[] =[];

     let tempSum: number = 0;
     let tempRightSum: number = 0;

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
