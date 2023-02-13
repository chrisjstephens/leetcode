//https://leetcode.com/problems/reformat-date
//1507. Reformat Date
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let dateHash = {
    Jan : "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
   };

    let tehDate = date.split(' ');
    let newStringDate = tehDate[2] + "-" + dateHash[tehDate[1]] + "-" + tehDate[0].slice(0, -2).padStart(2, '0');

    return newStringDate;
};
