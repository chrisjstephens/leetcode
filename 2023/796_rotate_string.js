//796. Rotate String
//https://leetcode.com/problems/rotate-string
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let tempString = s.split('');

    for (let x=0; x < s.length; x++) {
        tempString.push(tempString.shift());
        if (tempString.join('') === goal) return true;
    }

    return false;
};
