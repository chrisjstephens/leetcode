//https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    const rev = x.toString().split('').reverse().join('');

    const newRev = parseInt(rev) * Math.sign(x)

    return (newRev <= 0x7fffffff && newRev >= -0x80000000) ? newRev : 0;
};
