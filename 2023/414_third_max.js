//https://leetcode.com/problems/third-maximum-number
//414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsSet = new Set(nums)
    let numsArray = [...numsSet].sort((a,b) => a - b);

    if (numsArray.length <3) {
        return numsArray[numsArray.length-1];
    } else {
        return numsArray[numsArray.length-3];
    }
};
