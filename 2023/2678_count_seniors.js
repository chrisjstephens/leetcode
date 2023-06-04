//2678. Number of Senior Citizens
//https://leetcode.com/problems/number-of-senior-citizens

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(ele =>ele.slice(-4, -2) > 60).length;
};


/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for (let x = 0; x < details.length; x++) {
        details[x].split(' ');
        let age = Number(details[x][11] +""+ details[x][12]);
        if (age > 60) count ++;
    }
    return count;
};
