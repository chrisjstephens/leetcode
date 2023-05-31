//476. Number Complement
//https://leetcode.com/problems/number-complement
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bit = (num >>> 0).toString(2).split('');

    let newBit = bit.map(x => x === '1' ? '0' : '1' );

    return parseInt(newBit.join(''), 2);
};
