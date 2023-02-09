//https://leetcode.com/problems/maximum-value-of-a-string-in-an-array
//2496. Maximum Value of a String in an Array
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
     return Math.max(...strs.map(str => isNaN(str) ? str.length : Number(str)));
};
