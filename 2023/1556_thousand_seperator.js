//https://leetcode.com/problems/thousand-separator
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    return n.toLocaleString().replaceAll(',', '.');
};
