//461. Hamming Distance
//https://leetcode.com/problems/hamming-distance
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return (x^y).toString(2).split('').filter(x => x == '1').length;
};
