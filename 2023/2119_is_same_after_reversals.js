//2119. A Number After a Double Reversal
//https://leetcode.com/problems/a-number-after-a-double-reversal
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reverseOne = Number(String(num).split('').reverse().join(''));

    let reverseTwo = Number(String(reverseOne).split('').reverse().join(''));

    return num === reverseTwo ? true : false;
};
