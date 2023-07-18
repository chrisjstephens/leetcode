//https://leetcode.com/problems/capitalize-the-title
//2129. Capitalize the Title
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const words = title.toLowerCase().split(' ');

    for (let x=0; x < words.length; x++) {
        if (words[x].length >= 3) words[x] = words[x][0].toUpperCase() + words[x].slice(1);
    }

    return words.join(' ');
};
