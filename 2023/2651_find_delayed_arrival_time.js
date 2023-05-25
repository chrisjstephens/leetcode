//https://leetcode.com/problems/calculate-delayed-arrival-time
//2651. Calculate Delayed Arrival Time
/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
};
