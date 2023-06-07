//507. Perfect Number
//https://leetcode.com/problems/perfect-number/
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    for(var x = 1; x < num; x++) {
        if (num % x === 0) {
            sum += x;
        }
    }
    return sum === num;
};
