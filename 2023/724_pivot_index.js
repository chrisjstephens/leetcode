//https://leetcode.com/problems/find-pivot-index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    for (let x=0; x < nums.length; x++) {
        const leftNums = nums.slice(0, x);
        const rightNums = nums.slice(x + 1, nums.length);
        leftSum = leftNums.reduce((a, b) => a + b, 0);
        rightSum = rightNums.reduce((a, b) => a + b, 0);

        if (leftSum === rightSum) return x;
    }
    return -1;
};
