//https://leetcode.com/problems/minimum-common-value/description/
//2540 Minimum Common Value
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);
    const common = nums2.filter(n => set.has(n)).sort((a,b) => a - b)[0];

    return common ? common : -1;
};
