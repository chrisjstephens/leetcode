//https://leetcode.com/problems/largest-number-at-least-twice-of-others
//747. Largest Number At Least Twice of Others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest = Math.max(...nums);

    for(let x=0; x < nums.length; x++){
        if (nums[x] === largest) {
            continue;
        } else if (largest / nums[x] < 2)  {
            return -1;
        }
    }
    //console.log('largest', largest);
    return nums.indexOf(largest);
};
