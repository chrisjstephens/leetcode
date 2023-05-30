//496. Next Greater Element I
//https://leetcode.com/problems/next-greater-element-i
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    let ctr = 0;
    for (let x=0; x < nums1.length; x++) {
        let location = nums2.findIndex(index => index === nums1[x]);

        let found = false;

        for (let y=location; y < nums2.length; y++) {

            if (nums2[y] > nums1[x]) {
                arr.push(nums2[y]);
                found = true;
                y = nums2.length;
            }
        }
        if (!found) arr.push(-1);
    }

    return arr;
};
