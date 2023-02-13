//https://leetcode.com/problems/first-letter-to-appear-twice
//2351. First Letter to Appear Twice
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let characterMap = new Map();

    for (let x=0; x < s.length; x++) {
        if (!characterMap.get(s[x])) {
            characterMap.set(s[x], 1);
        } else {
            return s[x];
        }
    }
};
