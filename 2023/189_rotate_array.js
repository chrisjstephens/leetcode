//https://leetcode.com/problems/rotate-array
//189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k > nums.length) {
        k = Math.abs(k % nums.length);
    }

    const temp = nums.splice(-k);
    nums.unshift(...temp);

    // while (k > 0) {
    //     let last = nums.pop();
    //     nums.unshift(last);
    //     k--;
    // }

};
