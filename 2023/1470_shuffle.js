//https://leetcode.com/problems/shuffle-the-array
//1470. Shuffle the Array
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
   let arr1 = nums.slice(0, n), arr2 = nums.slice(n, nums.length);
   let shuffleArr = [];

   for (let x = 0; x < arr1.length; x++) {
       shuffleArr.push(arr1[x], arr2[x]);
   }

   return shuffleArr;
};
