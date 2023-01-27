/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let lowNumber = a < b ? a : b;
    let count = 0;
    for (let x=1; x <= lowNumber; x++) {
        if (a % x === 0 && b % x === 0) count++;
    }
    return count;
};
