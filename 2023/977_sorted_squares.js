//https://leetcode.com/problems/squares-of-a-sorted-array/description
//977. Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sortArray = [];
    for(let x = 0; x < nums.length; x++) {
        sortArray.push(nums[x] * nums[x]);
    }
    return sortArray.sort((a,b) => a - b);
};
