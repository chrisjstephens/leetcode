//1603. Design Parking System
//https://leetcode.com/problems/design-parking-system
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;

    this.bigUsed = 0;
    this.mediumUsed = 0;
    this.smallUsed = 0;

    return null;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1) {
        this.bigUsed++;
        return this.big >= this.bigUsed ? true : false;
    } else if (carType === 2) {
        this.mediumUsed++;
        return this.medium >= this.mediumUsed ? true : false;
    } else if (carType === 3) {
        this.smallUsed++;
        return this.small >= this.smallUsed ? true : false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
