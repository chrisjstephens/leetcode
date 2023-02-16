//693. Binary Number with Alternating Bits
//https://leetcode.com/problems/binary-number-with-alternating-bits
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let bit =  (n >>> 0).toString(2);

    for (let x=0; x < bit.length; x++) {
        if (bit[x] === bit[x+1]) return false;
    }

    return true;
};
