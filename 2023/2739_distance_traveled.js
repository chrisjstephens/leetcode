//2739. Total Distance Traveled
//https://leetcode.com/problems/total-distance-traveled
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let distance = 0;
    let tankBurned = 0;

    while (mainTank > 0) {
        tankBurned++;
        mainTank--;
        distance += 10;

        if (tankBurned === 5 && additionalTank > 0) {
            additionalTank--;
            mainTank++;
            tankBurned = 0;
        }
    }

    return distance;
};
