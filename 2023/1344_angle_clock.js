//1344. Angle Between Hands of a Clock
//https://leetcode.com/problems/angle-between-hands-of-a-clock
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    hour = hour === 12 ? 0 : hour;
    let hourPosition = (360 * (hour / 12)) + (360 * 1/12 * (minutes / 60));
    let minutePosition = 360 * (minutes / 60);

    let degreeOne = Math.abs(minutePosition - hourPosition);
    let degreeTwo = (360 - degreeOne);

    return degreeOne < degreeTwo ? degreeOne : degreeTwo;
};
