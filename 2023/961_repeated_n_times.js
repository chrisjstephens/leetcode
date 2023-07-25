//961. N-Repeated Element in Size 2N Array
//https://leetcode.com/problems/n-repeated-element-in-size-2n-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let nSet = new Set();

    for (let x of nums) {
        if (nSet.has(x)) {
            return x;
        } else {
            nSet.add(x);
        }
    }

  return -1;
};
