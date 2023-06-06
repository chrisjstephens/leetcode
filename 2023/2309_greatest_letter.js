//2309. Greatest English Letter in Upper and Lower Case
//https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case
/**
 * @param {string} s
 * @return {string}
 */
//BRUTE FORCE not efficient
var greatestLetter = function(s) {
    let lowerCase = [], upperCase = [], bothCase = [];

    for (let x = 0; x < s.length; x++) {
        if (s[x] === s[x].toUpperCase()) {
            upperCase.push(s[x]);
        }   else {
            lowerCase.push(s[x]);
        }
    }

    upperCase = upperCase.map(x => x.toLowerCase());

    for (let y = 0; y < lowerCase.length; y++) {
        if (upperCase.includes(lowerCase[y])) bothCase.push(lowerCase[y]);
    }

    bothCase.sort();

    return bothCase.length >= 1 ? bothCase[bothCase.length - 1]?.toUpperCase() : "";
};
