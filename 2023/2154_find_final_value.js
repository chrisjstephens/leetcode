//https://leetcode.com/problems/keep-multiplying-found-values-by-two
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    if (!nums.includes(original)) return original;
    for (let x=0; x < nums.length; x++) {
        original = original * 2;
        if (!nums.includes(original)) return original;
    }
};
