//387. First Unique Character in a String
//https://leetcode.com/problems/first-unique-character-in-a-string
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let x = 0; x < s.length; x++) {
        if (s.indexOf(s[x]) === s.lastIndexOf(s[x])) return x;
    }
    return -1;
};
