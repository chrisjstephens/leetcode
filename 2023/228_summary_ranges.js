//https://leetcode.com/problems/summary-ranges
//228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = [];

    for (let x=0; x < nums.length; x++) {
        let start = nums[x];

        while(x+1 < nums.length && nums[x+1] - nums[x] == 1) {
            x++;
        }

        if (nums[x] != start) {
            ranges.push(start + "->" + nums[x])
        }   else {
            ranges.push(start + "");
        }
    }

    return ranges;
};
