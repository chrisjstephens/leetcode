//1185. Day of the Week
//https://leetcode.com/problems/day-of-the-week/description
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date = new Date(year + '-' + month + '-' + day);
    return days[date.getDay()];
};
