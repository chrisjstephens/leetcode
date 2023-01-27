//https://leetcode.com/problems/second-largest-digit-in-a-string
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let numbersArray = [];
  for (let x=0; x < s.length; x++) {
      if (!isNaN(s[x])) numbersArray.push(s[x]);
  }
  numbersArray.sort((a,b) => b - a);

  let numbersSet = new Set(numbersArray);
  numbersArray = [...numbersSet];

  if (numbersArray.length <= 1) return -1;
  return numbersArray[1];
};
