//2656. Maximum Sum With Exactly K Elements
//https://leetcode.com/problems/maximum-sum-with-exactly-k-elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    let max = Math.max(...nums);

    for (let x = 0; x < k; x++) {
        sum +=max;
        max +=1;
    }

    return sum
};
