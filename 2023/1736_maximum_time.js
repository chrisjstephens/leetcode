//1736. Latest Time by Replacing Hidden Digits
//https://leetcode.com/problems/latest-time-by-replacing-hidden-digits
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let timeArray = time.split('');

    for (let x = 0; x < timeArray.length; x++) {
        if (x === 0 && timeArray[x] === '?') {
            if (parseInt(timeArray[1]) >= 4) {
                timeArray[x] = 1;
            } else  {
                timeArray[x] = 2;
            }
        } else if (x === 1 && timeArray[x] === '?') {
            if ((parseInt(timeArray[0]) === 0) || (parseInt(timeArray[0]) === 1)) {
                timeArray[x] = 9;
            } else if (parseInt(timeArray[0]) === 2) {
                timeArray[x] = 3;
            }
        } else if (x === 3 && timeArray[x] === '?') {
            timeArray[x] = 5;
        } else if (x === 4 && timeArray[x] === '?') {
            timeArray[x] = 9;
        }
    }

    return timeArray.join('').toString();
};
