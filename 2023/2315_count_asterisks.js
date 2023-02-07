//https://leetcode.com/problems/count-asterisks
//2315. Count Asterisks
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let splitString = s.split('|');
    let count = 0;
    for (let x = 0; x < splitString.length; x=x+2) {
         for (let [char] of splitString[x]) {
            if (char === '*') count ++;
         }
    }
    return count;
};
