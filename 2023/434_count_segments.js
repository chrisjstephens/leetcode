//https://leetcode.com/problems/number-of-segments-in-a-string
//434. Number of Segments in a String
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let segments = s.trim().split(' ').filter(x => x !== '');
    return segments.length;
};
