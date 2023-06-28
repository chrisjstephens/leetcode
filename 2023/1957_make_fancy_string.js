//1957. Delete Characters to Make Fancy String
//https://leetcode.com/problems/delete-characters-to-make-fancy-string
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = s.split('');

    for (let x = 0; x < result.length; x++) {
        if (result[x] === result[x + 1] && result[x + 1] === result[x + 2]) {
            result[x] = '';
        }
    }

    return result.join('');
};
