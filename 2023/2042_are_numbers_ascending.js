//2042. Check if Numbers Are Ascending in a Sentence
//https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let asdf = s.split(' ').filter(x => !isNaN(x)).map(Number);
    let temp = asdf[0];

    for (let x=1; x <= asdf.length - 1; x++) {
        if (asdf[x] > temp) {
            temp = asdf[x];
        }   else {
            return false;
        }
    }

    return true;
};
