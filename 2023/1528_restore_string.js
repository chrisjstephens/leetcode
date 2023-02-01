//https://leetcode.com/problems/shuffle-string
//1528. Shuffle String
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newString = [];
    for (let x=0; x < indices.length; x++) {
        newString[indices[x]] = s[x];
    }
    return newString.join("");
};
