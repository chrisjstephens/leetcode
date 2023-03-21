//https://leetcode.com/problems/divide-a-string-into-groups-of-size-k
//2138. Divide a String Into Groups of Size k
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let temp = ''
    let stringArray = [];

    for (let x=0; x < s.length; x++) {
        temp += s[x];

        if (temp.length === k) {
            stringArray.push(temp);
            temp = '';
        }
    }

    if (temp.length) {
        let charLeft = k - temp.length;
        for (let y=0; y < charLeft; y++) {
            temp += fill;
        }

        stringArray.push(temp);
    }

    return stringArray;
};
