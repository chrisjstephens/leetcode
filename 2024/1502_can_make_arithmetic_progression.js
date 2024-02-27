//1502. Can Make Arithmetic Progression From Sequence
//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sortA = arr.sort((a,b) => a - b);
    const difference = Math.abs(sortA[0] - sortA[1]);
    for (let i=0; i < sortA.length - 1; i++) {
        if (Math.abs(sortA[i] - sortA[i+1]) != difference) return false;
    }

    const sortB = arr.sort((a,b) => a - b);
    for (let i=0; i < sortB.length - 1; i++) {
        if (Math.abs(sortB[i] - sortB[i+1]) != difference) return false;
    }

    return true;
};
