//169. Majority Element
//https://leetcode.com/problems/majority-element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let len = nums.length;

    for(let x of nums) {
        if(!map[x]) {
            map[x] = 1;
        } else {
            map[x]++;
        }
        if (map[x] >= len / 2) return x;
    }
};
