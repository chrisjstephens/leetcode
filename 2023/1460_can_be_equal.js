//1460. Make Two Arrays Equal by Reversing Subarrays
//https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    return JSON.stringify(target.sort()) === JSON.stringify(arr.sort());
};
