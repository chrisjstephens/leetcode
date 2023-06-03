//2114. Maximum Number of Words Found in Sentences
//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let wordCount = [];
    for (let x=0; x < sentences.length; x++) {
        let tempSplit = sentences[x].split(' ');
        wordCount.push(tempSplit.length);
    }

    return Math.max(...wordCount);
};
