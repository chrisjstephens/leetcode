//1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
//https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let sentence2 = sentence.split(' ');

    for (let x = 0; x < sentence2.length; x++) {
        if (sentence2[x].slice(0, searchWord.length) === (searchWord)) {
            return x+1;
        }
    }

    return -1;
};
