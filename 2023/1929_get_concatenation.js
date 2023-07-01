//https://leetcode.com/problems/concatenation-of-array
//1929. Concatenation of Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const newArray = nums.concat(nums);
    return newArray;
};
