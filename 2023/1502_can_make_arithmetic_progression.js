//1502. Can Make Arithmetic Progression From Sequence
//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let arithArr = [];
    arr.sort((a,b) => a - b);

    for (let x = 0; x < arr.length - 1; x++) {
        let diff = arr[x] - arr[x+1];
        arithArr.push(diff);
    }

    return arithArr.every((val, i, arr) => val === arr[0]);
};
