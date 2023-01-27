//https://leetcode.com/problems/sort-the-people
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let peopleArr = [];
    for (let x=0; x < heights.length; x++) {
        peopleArr.push([names[x], heights[x]]);
    }

    peopleArr.sort((a,b) => b[1] - a[1]);
    let sortedHeight = [];

    for (let x=0; x < peopleArr.length; x++) {
        sortedHeight.push(peopleArr[x][0]);
    }

    return sortedHeight;
};
