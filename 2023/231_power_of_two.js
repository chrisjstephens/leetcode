//https://leetcode.com/problems/power-of-two
//231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return Math.log2(n) % 1 === 0
};
