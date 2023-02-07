//https://leetcode.com/problems/check-if-all-as-appears-before-all-bs
//2124. Check if All A's Appears Before All B's
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    return s === s.split('').sort().join("");
};
