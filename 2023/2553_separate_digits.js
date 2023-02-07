//https://leetcode.com/problems/separate-the-digits-in-an-array
//2553. Separate the Digits in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
   return nums.join('').split('');
};
