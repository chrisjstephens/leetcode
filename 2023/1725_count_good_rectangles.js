//https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
//1725. Number Of Rectangles That Can Form The Largest Square
/**
 * @param {number[][]} rectangles //length, width
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let count = 0;
    let widths = [];
    for (let x=0; x < rectangles.length; x++) {
        widths.push(Math.min(rectangles[x][0], rectangles[x][1]));
    }

    let heighestHeight = Math.max(...widths);

    for (let y=0; y < widths.length; y++) {
        if (widths[y] === heighestHeight) count++;
    }

    return count;
};
