//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for (let x=low; x <= high; x++ ) {
        if (x % 2 != 0) count++;
    }
    return count;
};
