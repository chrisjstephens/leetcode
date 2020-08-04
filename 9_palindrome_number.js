/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const rev = x.toString().split('').reverse().join('');

    return parseInt(rev) === x;
};
