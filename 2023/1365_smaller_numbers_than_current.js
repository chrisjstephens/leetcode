//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let smallerArray = [];
    for (let x=0; x < nums.length; x++) {
        let count = 0;
        let currentNum = nums[x];
        for (let y=0; y < nums.length; y++ ) {
            if (nums[y] < currentNum) count++;
        }
        smallerArray.push(count);
    }
    return smallerArray;
};
