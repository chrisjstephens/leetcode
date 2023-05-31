//171. Excel Sheet Column Number
//https://leetcode.com/problems/excel-sheet-column-number/
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;

    for (let x = 0; x < columnTitle.length; x++) {
        result = result * 26 + columnTitle[x].charCodeAt(0) - 64;
    }

    return result;
};
