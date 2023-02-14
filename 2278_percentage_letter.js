//2278. Percentage of Letter in String
//https://leetcode.com/problems/percentage-of-letter-in-string
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let length = s.length;
    let count = 0;

    for (let x=0; x < length; x++) {
        if (s[x] === letter) count++;
    }

    return Math.floor(count / length * 100);
};
