//2206. Divide Array Into Equal Pairs
//https://leetcode.com/problems/divide-array-into-equal-pairs
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let numsMap = new Map();

    for (let x=0; x < nums.length; x++) {
        if (!numsMap.has(nums[x])) {
            numsMap.set(nums[x], 1)
        } else {
            numsMap.set(nums[x], numsMap.get(nums[x]) + 1);
        }
    }

    for (let [key, value] of numsMap) {
        if (value % 2 != 0) return false;
    }

    return true;
};
