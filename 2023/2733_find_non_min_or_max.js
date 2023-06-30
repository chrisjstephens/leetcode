//https://leetcode.com/problems/neither-minimum-nor-maximum
//2733. Neither Minimum nor Maximum
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length <= 2) return -1;

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const filter = nums.find((x) => x != min && x != max);

    return filter;
};
