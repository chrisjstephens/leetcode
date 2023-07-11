//1935. Maximum Number of Words You Can Type
//https://leetcode.com/problems/maximum-number-of-words-you-can-type
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(' ');
    let bl = brokenLetters.split('');

    return words.filter(word => {
		return bl.every(broken => !word.includes(broken));
	}).length;

};
