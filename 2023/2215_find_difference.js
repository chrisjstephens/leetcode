//https://leetcode.com/problems/find-the-difference-of-two-arrays
//2215. Find the Difference of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let tempArray = [], tempArray2 = [];
    for (let x=0; x < nums1.length; x++) {
        if (!nums2.includes(nums1[x]) && !tempArray.includes(nums1[x])) {
            tempArray.push(nums1[x]);
        }
    }

    for (let y=0; y < nums2.length; y++) {
        if (!nums1.includes(nums2[y]) && !tempArray2.includes(nums2[y])) {
            tempArray2.push(nums2[y]);
        }
    }
    return [tempArray, tempArray2];

};
