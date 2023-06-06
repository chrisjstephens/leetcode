//1790. Check if One String Swap Can Make Strings Equal
//https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let count = 0;
    let s1Chars = [], s2Chars = [];

    if (s1 === s2) return true;

    for (let x = 0; x < s1.length; x++) {
      if (s1[x] != s2[x]) {
        count++;
        s1Chars.push(s1[x]);
        s2Chars.push(s2[x]);
      }
    }

    const splitChars = JSON.stringify(s1Chars.sort()) === JSON.stringify(s2Chars.sort())
    return count === 2 && splitChars ? true : false;
};
