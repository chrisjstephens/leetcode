//https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force
var twoSum = function(nums, target) {
    let length = nums.length;

    for (let x1 = 0; x1 <= length; x1++) {
         for (let x2 = x1 + 1; x2 < length; x2++) {
            if (nums[x1] + nums[x2] === target) {
                return [x1,x2];
            }
        }
    }
};

};
