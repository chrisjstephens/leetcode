//1869. Longer Contiguous Segments of Ones than Zeros
//https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let longestZero = 0;
    let longestOne = 0;

    let currentZero = 0;
    let currentOne = 0;

    for (let x=0; x < s.length; x++) {

        if (s[x] === '1') {
            currentOne++;
        } else {
            currentOne = 0;
        }

        if (s[x] === '0') {
            currentZero++;
        } else {
            currentZero = 0;
        }

        longestOne = Math.max(longestOne, currentOne);
        longestZero = Math.max(longestZero, currentZero);
    }
    console.log(longestOne, longestZero);
    return longestOne > longestZero;
};
