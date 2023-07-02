//1295. Find Numbers with Even Number of Digits
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    for (let x = 0; x < nums.length; x++) {
        if (nums[x].toString().split('').length % 2 === 0) count++;
    }

    return count;
};
