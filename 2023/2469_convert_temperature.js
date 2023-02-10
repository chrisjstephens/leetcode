//https://leetcode.com/problems/convert-the-temperature
//2469. Convert the Temperature
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, (celsius * 1.80) + 32];
};
