//1051. Height Checker
//https://leetcode.com/problems/height-checker
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sorted = [...heights].sort((a,b) => a - b);
    let count = 0;

    for (let x = 0; x < heights.length; x++) {
        if (heights[x] != sorted[x]) count++;
    }

    return count;
};
