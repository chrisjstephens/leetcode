//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let uniqueSet = new Set();
    let count = 0;

    for (let x=0; x < s.length-2; x++) {
        let newSet = new Set();
        newSet.add(s[x]);
        newSet.add(s[x+1]);
        newSet.add(s[x+2]);

        if (newSet.size === 3) count++;
    }
    return count;
};
