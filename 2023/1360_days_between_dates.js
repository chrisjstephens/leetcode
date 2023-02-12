//https://leetcode.com/problems/number-of-days-between-two-dates
//1360. Number of Days Between Two Dates
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);

    let diffTime = date1.getTime() - date2.getTime();
    let diffDays = diffTime / (1000 * 3600 * 24);

    return Math.abs(diffDays);
};
