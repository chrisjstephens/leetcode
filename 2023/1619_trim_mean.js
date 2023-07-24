//1619. Mean of Array After Removing Some Elements
//https://leetcode.com/problems/mean-of-array-after-removing-some-elements
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b);

    let fivePercent = arr.length * 0.05;

    arr.splice(0, fivePercent);
    arr.splice(-fivePercent);

    return arr.reduce((a, c) => a + c) / arr.length;
};
