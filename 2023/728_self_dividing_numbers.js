//728. Self Dividing Numbers
//https://leetcode.com/problems/self-dividing-numbers
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let selfDividingNumbers = [];
    let tempNumber;
    let splitNumber;

    for (let x = left; x <= right; x++) {
        let selfDividing = true;
        tempNumber = parseFloat(x);
        splitNumber = x.toString().split('');

        for (let numb of splitNumber) {
            if (tempNumber % numb !=0) selfDividing = false;
        }

        if (selfDividing) selfDividingNumbers.push(tempNumber);
    }
    return selfDividingNumbers;
};
