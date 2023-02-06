//https://leetcode.com/problems/smallest-index-with-equal-value
//2057. Smallest Index With Equal Value
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    for (let x=0; x < nums.length; x++) {
        if (x % 10 === nums[x]) {
            return x;
        }
    }
    return -1;
};
