//258. Add Digits
//https://leetcode.com/problems/add-digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sumTotal = 0;
    let numS = num.toString().split('');

    while (true) {
        sumTotal = numS.reduce((a,b) => parseInt(a) + parseInt(b));
        if (sumTotal.length === 1) return sumTotal;
        numS = sumTotal.toString().split('');
    }
};
