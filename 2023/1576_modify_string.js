//https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
//1576. Replace All ?'s to Avoid Consecutive Repeating Characters
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let modStr = [...s];

    for (let x=0; x < modStr.length; x++) {
        if (modStr[x] !== "?") continue;
        if (modStr[x-1] !== "a" && modStr[x+1] !== "a") { modStr[x] = "a"; continue; }
        if (modStr[x-1] !== "b" && modStr[x+1] !== "b") { modStr[x] = "b"; continue; }
        modStr[x] = "c";
    }

    return modStr.join('');
};
