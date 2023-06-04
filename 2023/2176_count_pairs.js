//2176. Count Equal and Divisible Pairs in an Array
//https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;

    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] === nums[y] && (x * y) % k === 0) count++;
        }
    }

    return count;
};
