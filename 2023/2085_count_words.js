//https://leetcode.com/problems/count-common-words-with-one-occurrence
//2085. Count Common Words With One Occurrence
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let wordCount = new Map();
    let count = 0;
    for (let x = 0; x < words1.length; x++) {
       for (let y = 0; y < words2.length; y++) {
           if (words2[y] === words1[x]) {
               if (!wordCount.get(words2[y])) {
                   wordCount.set(words2[y], 1);
               } else {
                   wordCount.set(words2[y], wordCount.get(words2[y]) + 1);
               }
           }
       }
    }

    for (let [key, val] of wordCount) {
        if (val === 1) count++;
    }

    return count;
};
