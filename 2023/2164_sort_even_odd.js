//https://leetcode.com/problems/sort-even-and-odd-indices-independently
//2164. Sort Even and Odd Indices Independently
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let evenNums = [];
    let oddNums = [];
    let newArray = [];

    for (let x=0; x < nums.length; x+=2) {
        evenNums.push(nums[x]);
    }
    for (let y=1; y < nums.length; y+=2) {
        oddNums.push(nums[y]);
    }

    oddNums.sort((a,b) => b - a);
    evenNums.sort((a,b) => a - b);
    for (let z=0; z < evenNums.length; z++){
        if(evenNums[z]) newArray.push(evenNums[z]);
        if(oddNums[z]) newArray.push(oddNums[z]);
    }

    return newArray;
};
