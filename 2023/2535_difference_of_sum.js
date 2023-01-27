//https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum = nums.reduce((a, b) => a + b);
    const digitSum = nums.join("").split("").reduce((a, b) => +a + +b);

    return elementSum - digitSum;
};
