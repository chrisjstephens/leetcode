//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
//1281. Subtract the Product and Sum of Digits of an Integer
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    let newString = n.toString().split('');

    for (let x=0; x<newString.length; x++) {
        product *= parseFloat(newString[x]);
        sum += parseFloat(newString[x]);
    }

    return product - sum;
};
