//1991. Find the Middle Index in Array
//https://leetcode.com/problems/find-the-middle-index-in-array
//Brute force, not efficient
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {

    for (let x = 0; x < nums.length; x++) {
        let leftArr = nums.slice(0, x);
        let rightArr = nums.slice (x + 1, nums.length)

        let leftSum = leftArr.reduce((a,b) => a + b, 0);
        let rightSum = rightArr.reduce((a,b) => a + b, 0);

        if (leftSum === rightSum) return x
    }
    return -1;
};
//More efficient
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    for (let x = 0; x < nums.length; x++) {
        let leftArr = nums.slice(0, x).reduce((a, b) => a + b, 0);
        let rightArr = nums.slice (x + 1).reduce((a, b) => a + b, 0);

        if (leftArr === rightArr) return x
    }
    return -1;
};
