//https://leetcode.com/problems/consecutive-characters
//1446. Consecutive Characters
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let longestStringL = 0;
    let currentStringL = 1;

    for (let x = 0; x < s.length; x++) {
        if (s[x] === s[x+1]) {
            currentStringL +=1;
        } else {
            if (currentStringL > longestStringL) {
                longestStringL = currentStringL;
            }
            currentStringL = 1;
        }
    }

    return longestStringL;
};
