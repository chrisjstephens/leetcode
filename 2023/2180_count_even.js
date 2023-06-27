//https://leetcode.com/problems/count-integers-with-even-digit-sum
//2180. Count Integers With Even Digit Sum
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    for (let x = 1; x <= num; x++) {
        let tempSum = x.toString().split('').map(Number).reduce((a,b) => a + b);

        if (tempSum % 2 === 0) {
            count ++;
        }
    }
    return count;
};
