//2605. Form Smallest Number From Two Digit Arrays
//https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    for (let x=0; x < nums2.length; x++) {
        if (nums1.includes(nums2[x])) return nums2[x];
    }

    let tempNum = nums1[0] + "" + nums2[0];
    let splitNum = tempNum.split("").sort((a,b) => a - b).join("");
    return splitNum;
};
