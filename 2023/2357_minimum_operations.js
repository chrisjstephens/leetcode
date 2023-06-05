//2357. Make Array Zero by Subtracting Equal Amounts
//https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    while (Math.max(...nums)>0) {
        min = Math.min(...nums.filter(x => x > 0));
        nums = nums.map(x=> x -= min);
        count++;
    }
    return count;
};
