//https://leetcode.com/problems/find-target-indices-after-sorting-array
//2089. Find Target Indices After Sorting Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let targets = [];

    nums.sort((a,b) => a - b);

    for (let x=0; x < nums.length; x++) {
        if (nums[x] === target) targets.push(x);
    }

    return targets;
};
