//https://leetcode.com/problems/goat-latin/description/
//824. Goat Latin
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = ['a','e','i','o','u'];
    let newWord;
    let newString = '';
    let words = sentence.split(' ');
    let index = 0;


    for (let w of words) {
        index++;
        if (vowels.includes(w[0].toLowerCase())) {
            newWord = w + "ma";
        } else {
            newWord = w.slice(1) + w[0] + "ma";
        }

        let x = 0;
        while (x < index) {
            newWord += "a";
            x++;
        }
        newString += newWord + " ";
    }

    return newString.trim();
};
