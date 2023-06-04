//2544. Alternating Digit Sum
//https://leetcode.com/problems/alternating-digit-sum
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let positive = true;
    let sum = 0;
    let splitArray = n.toString().split('').map(Number);

    for (let x=0; x < splitArray.length; x++) {
        if (positive) {
            sum += splitArray[x];
        } else {
            sum += -Math.abs(splitArray[x]);

        }
        positive = !positive;
    }
    return sum;
};
