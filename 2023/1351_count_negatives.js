//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
//1351. Count Negative Numbers in a Sorted Matrix
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let newArray = grid.flat();
    let count = 0;

    for (let x=0; x<newArray.length; x++) {
        if (newArray[x] < 0) count++;
    }
    return count;
};
