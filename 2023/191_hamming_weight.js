//https://leetcode.com/problems/number-of-1-bits
//191. Number of 1 Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let bitArray = n.toString(2).split('');
    for (let x = 0; x < bitArray.length; x++ ) {
        if (bitArray[x] === '1') count++;
    }
    return count;
};
