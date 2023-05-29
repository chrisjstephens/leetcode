//1572. Matrix Diagonal Sum
//https://leetcode.com/problems/matrix-diagonal-sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0
  let y = mat[0].length - 1;

  for (let x = 0; x < mat.length; x++, y--) {
    if (x !== y) {
      sum += mat[x][y];
    }
      sum += mat[x][x];
  }

  return sum;
};
