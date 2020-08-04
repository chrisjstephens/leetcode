/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //Done with help from https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca

    let prefix = "";
    if(strs === null || strs.length === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        //Grab first string and first char then compare to other strings then increment and try to find matches
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== char)
                return prefix;
        }
        prefix = prefix + char;
    }

    return prefix;
};
