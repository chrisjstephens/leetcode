//2000. Reverse Prefix of Word
//https://leetcode.com/problems/reverse-prefix-of-word
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);

    const reversed = word.slice(0, index+1).split("").reverse().join("");
    const end = word.slice(index+1, word.length+1);

    return reversed + "" + end;
};
