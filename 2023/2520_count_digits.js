//2520. Count the Digits That Divide a Number
//https://leetcode.com/problems/count-the-digits-that-divide-a-number
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let tempNum = num;
	let count = 0;

	while (tempNum !== 0) {
    console.log('digit', tempNum);
		let digit = tempNum % 10;

		if (num % digit === 0) {
			count++;
		}

		tempNum = Math.floor(tempNum / 10);
	}

	return count
};
