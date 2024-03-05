//2788. Split Strings by Separator
//https://leetcode.com/problems/split-strings-by-separator
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.join(separator).split(separator).filter(value=>value!='');
};
