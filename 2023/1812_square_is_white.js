//https://leetcode.com/problems/determine-color-of-a-chessboard-square
//1812. Determine Color of a Chessboard Square
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return ((parseInt(coordinates[0], 36) - 9) + parseInt(coordinates[1])) % 2 === 0 ? false : true;
};
