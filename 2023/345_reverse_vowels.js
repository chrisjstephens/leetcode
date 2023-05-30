//https://leetcode.com/problems/reverse-vowels-of-a-string
//345. Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let vowelsFound = [];
    // let reversedString = '';
    let arr = s.split("");

    for (let letter of s) {
        if (vowels.includes(letter)) {
            vowelsFound.push(letter);
        }
    }

    // for (let letter of s) {
    //     if (vowels.includes(letter)) {
    //         reversedString += vowelsFound[vowelsFound.length-1];
    //         vowelsFound.pop();
    //     } else {
    //         reversedString += letter;
    //     }
    // }

    // return reversedString;

    for (let x=0; x < s.length; x++) {
        if (vowels.includes(s[x])) {
             arr[x] = vowelsFound.pop();
        }
    }

    return arr.join("");
};
