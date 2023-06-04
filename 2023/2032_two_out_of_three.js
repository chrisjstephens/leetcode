//2032. Two Out of Three
//https://leetcode.com/problems/two-out-of-three
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let distinct = new Map();

    let distinctSet = new Set(nums1);
    let ds1 = [...distinctSet];

    for (let x = 0; x < ds1.length; x++) {
        if (distinct.has(ds1[x])) {
            distinct.set(ds1[x], distinct.get(ds1[x]) + 1);
        } else {
            distinct.set(ds1[x], 1);
        }
    }

    let distinctSet2 = new Set(nums2);
    let ds2 = [...distinctSet2];

    for (let y = 0; y < ds2.length; y++) {
        if (distinct.has(ds2[y])) {
            distinct.set(ds2[y], distinct.get(ds2[y]) + 1);
        } else {
            distinct.set(ds2[y], 1);
        }
    }

    let distinctSet3 = new Set(nums3);
    let ds3 = [...distinctSet3];

    for (let z = 0; z < ds3.length; z++) {
        if (distinct.has(ds3[z])) {
            distinct.set(ds3[z], distinct.get(ds3[z]) + 1);
        } else {
            distinct.set(ds3[z], 1);
        }
    }

    let uniqueVal = [...distinct].sort((a,b) => a[1] - b[1]).filter(ele => ele[1] > 1).map(ele => ele[0]);
    return uniqueVal;
};
