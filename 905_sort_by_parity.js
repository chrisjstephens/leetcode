//https://leetcode.com/problems/sort-array-by-parity
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    for (let x=0; x < nums.length; x++) {
        if (nums[x] % 2 === 0) {
            even.push(nums[x]);
        } else {
            odd.push(nums[x]);
        }
    }
    return [...even, ...odd];
};
