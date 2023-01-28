//https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let tempString = '';
    for (let x=0; x < n; x++) {
        if (n % 2 === 0 && x === n-1) {
            tempString += 'b';
        } else if (n % 2 !=0 && x === n-1) {
            tempString += 'a';
        } else {
            tempString += 'a';
        }
    }
    return tempString;
};
