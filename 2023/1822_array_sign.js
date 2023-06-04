//1822. Sign of the Product of an Array
//https://leetcode.com/problems/sign-of-the-product-of-an-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if (nums.includes(0)) return 0;

    let product = nums.reduce((a,b) => a * b, 1);

    return product > 0 ? 1 : -1;
};
