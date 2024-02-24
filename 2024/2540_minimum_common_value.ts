//https://leetcode.com/problems/minimum-common-value/description/
//2540 Minimum Common Value

function getCommon(nums1: number[], nums2: number[]): number {
    const set = new Set(nums1);
    const common = nums2.filter((n: number) => set.has(n)).sort((a: number, b: number) => a - b)[0];

    return common ? common : -1;
};
