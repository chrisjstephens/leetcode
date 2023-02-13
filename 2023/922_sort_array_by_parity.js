//https://leetcode.com/problems/sort-array-by-parity-ii
//922. Sort Array By Parity II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = [];
    let odd = [];
    let numArray = [];

    for (let x=0; x < nums.length; x++) {
        if (nums[x] % 2 === 0) {
            even.push(nums[x]);
        } else {
            odd.push(nums[x]);
        }
    }

    for (let y=0; y < even.length; y++) {
        numArray.push(even[y]);
        numArray.push(odd[y]);
    }

    return numArray;
};
