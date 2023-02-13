//1748. Sum of Unique Elements
//https://leetcode.com/problems/sum-of-unique-elements
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let numsMap = new Map();

    for (let x=0; x < nums.length; x++) {
        if (!numsMap.get(nums[x])) {
            numsMap.set(nums[x], 1);
        }   else {
            numsMap.set(nums[x], numsMap.get(nums[x]) + 1);
        }
    }

    let sum = 0;
    for (let [key, val] of numsMap) {
       if(val === 1) sum += key;
    }

    return sum;
};
