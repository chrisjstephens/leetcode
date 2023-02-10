//1078. Occurrences After Bigram
//https://leetcode.com/problems/occurrences-after-bigram
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let occurences = [];
    let newText = text.split(' ');
    for (let x=0; x < newText.length; x++) {
        if (newText[x] === first && newText[x+1] === second && newText[x+2]) {
            occurences.push(newText[x+2]);
        }
    }
    return occurences;
};
