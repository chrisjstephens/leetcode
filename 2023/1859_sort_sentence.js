//https://leetcode.com/problems/sorting-the-sentence
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let splitString = s.split(' ');
    splitString.sort((a,b) => a[a.length-1] - b[b.length-1])

    let newString = splitString.map(a => a.slice(0, -1)).join(' ');

    return newString;
};
