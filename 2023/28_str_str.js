//28. Find the Index of the First Occurrence in a String
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const index = haystack.indexOf(needle);
    return index >= 0 ? index : -1;
};
