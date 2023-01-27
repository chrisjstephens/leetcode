//https://leetcode.com/problems/flipping-an-image
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    //horizontal
    for (let x = 0; x < image.length; x++) {
        image[x] = image[x].reverse();
        console.log('NEW');
    }

    //invert
    for (let x = 0; x < image.length; x++) {
        for (let y = 0; y < image.length; y++) {
            image[x][y] = !image[x][y];
        }
    }

    return image;

};
