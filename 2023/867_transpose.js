//867. Transpose Matrix
//https://leetcode.com/problems/transpose-matrix
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const newMatrix = matrix[0].map((col, i) => matrix.map(row => row[i]));

    return newMatrix;
};
