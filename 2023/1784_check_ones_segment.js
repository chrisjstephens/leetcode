//https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
//1784. Check if Binary String Has at Most One Segment of Ones
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    return s.includes('01') ? false : true;
};
