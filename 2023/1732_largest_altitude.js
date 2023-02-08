//https://leetcode.com/problems/find-the-highest-altitude
//1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitudes = [0];

    for(let i = 0; i < gain.length; i++){
        altitudes.push(gain[i] + altitudes[i]);
    }

    return Math.max(...altitudes);
};
