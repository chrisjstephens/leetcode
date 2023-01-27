//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let x=0; x < arr.length; x++) {
        let highestRight = 0;
        if (x+1 === arr.length) highestRight = -1;
        for (let y=x+1; y <= arr.length; y++) {
            if (arr[y] > highestRight) highestRight = arr[y];
        }
        arr[x] = highestRight;
    }
    return arr;
};
