//https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let count = 0;
    for (let x=0; x < nums.length; x++) {
        let larger = false;
        let smaller = false;
        for (let y=0; y < nums.length; y++) {
            if (nums[x] > nums[y]) larger = true;
            if (nums[x] < nums[y]) smaller = true;
        }
        if (larger && smaller) count++;
    }
    return count;
};
