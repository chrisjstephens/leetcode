//1636. Sort Array by Increasing Frequency
//https://leetcode.com/problems/sort-array-by-increasing-frequency
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let numsMap = new Map();
    let newArr = [];
    for (let x = 0; x < nums.length; x++) {
        if (!numsMap.has(nums[x])) {
            numsMap.set(nums[x], 1);
        } else {
            numsMap.set(nums[x], numsMap.get(nums[x]) + 1);
        }
    }

    let sortedNumsArr = [...numsMap].sort((a,b) => a[1] - b[1] || b[0] - a[0]);

    for (let y = 0; y < sortedNumsArr.length; y++) {
      for (let z = 0; z < sortedNumsArr[y][1]; z++) {
          newArr.push(sortedNumsArr[y][0]);
      }
    }
    return newArr;
};
