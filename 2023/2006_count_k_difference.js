//https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
//2006. Count Number of Pairs With Absolute Difference K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            //console.log('nums[x] - nums[y]', nums[x] - nums[y], x, y);
            if (Math.abs(nums[x] - nums[y]) === k) count++
        }
    }
    return count;
};
