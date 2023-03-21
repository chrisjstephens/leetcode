//https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three
//2455. Average Value of Even Numbers That Are Divisible by Three
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let divisibleInts = [];

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] % 3 === 0 && nums[x] % 2 === 0) divisibleInts.push(nums[x]);
    }

    if (divisibleInts.length) {
        let sum = 0;
        for (const item of divisibleInts) {
            sum += item;
        }
        return Math.floor(sum / divisibleInts.length);
    } else {
        return 0;
    }
};
