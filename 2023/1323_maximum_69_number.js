//1323. Maximum 69 Number
//https://leetcode.com/problems/maximum-69-number
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = num.toString();
    let res = str.replace('6','9');
    return Number(res);
}
