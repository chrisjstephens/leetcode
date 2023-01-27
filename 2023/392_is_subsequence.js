//https://leetcode.com/problems/is-subsequence
/ * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let x=0; x < s.length; x++) {
        //console.log(s[x]);
        if (!t.includes(s[x]) || t.length === 0) return false;
        let index = t.indexOf(s[x]);
        //console.log('index', index, t);
        t = t.slice(index + 1);
        //console.log('includes');
    }
    return true;
};
