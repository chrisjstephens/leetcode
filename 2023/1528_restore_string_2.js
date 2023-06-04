//1528. Shuffle String
//https://leetcode.com/problems/shuffle-string
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    //Brute force lol
    // let tempString = [];

    // for (let x = 0; x < s.length; x++) {
    //     tempString.push([s[x], indices[x]])
    // }

    // tempString.sort((a,b) => a[1] - b[1]);
    // //let sortedString = tempString.map(x => x[0]).join('');
    // return tempString.map(x => x[0]).join('');

    const result = []

    for(let x=0; x < s.length; x++) {
        const letter = s[x];
        const index = indices[x];
        result[index] = letter;
    }

    return result.join('');
};
