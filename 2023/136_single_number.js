//136. Single Number
//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];

    let map = new Map();

    for (let x = 0; x < nums.length; x++) {
        if (map.has(nums[x])) {
            map.set(nums[x], map.get(nums[x]) + 1)
        } else {
            map.set(nums[x], 1);
        }
    }

    const newMap = [...map];

    for (let y = 0; y < newMap.length; y++) {
        if (newMap[y][1] === 1) return newMap[y][0];
    }

};
