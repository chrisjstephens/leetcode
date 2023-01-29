//https://leetcode.com/problems/remove-digit-from-number-to-maximize-result
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let newNum = [];
    for (let x=0; x < number.length; x++) {
        //console.log('number', number);
        if (number[x] === digit) {
            let tempNum = number.substring(0, x) + number.substring(x+1);
         newNum.push(tempNum);
        }
    }
    //console.log('newNum', newNum.sort());
    return newNum.sort()[newNum.length - 1];
};
