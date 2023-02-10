//744. Find Smallest Letter Greater Than Target
//https://leetcode.com/problems/find-smallest-letter-greater-than-target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let x=0; x < letters.length; x++) {
        if (letters[x] > target) return letters[x];
    }

    return letters[0];
};
