//557. Reverse Words in a String III
//https://leetcode.com/problems/reverse-words-in-a-string-iii
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitWords = s.split(' ');
    let reversed = [];

    for (let x of splitWords) {
        let reverse = x.split('').reverse();
        reverse.push(' ');
        reversed.push(...reverse);
    }

    return reversed.slice(0, -1).join('');
};
