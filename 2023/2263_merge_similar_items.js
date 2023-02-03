//https://leetcode.com/problems/merge-similar-items
//2363. Merge Similar Items
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let itemsMap = new Map()

    for (let [value, weight] of items1.concat(items2)) {
        if (!itemsMap.has(value)) {
            itemsMap.set(value, weight);
        } else {
            itemsMap.set(value, itemsMap.get(value) + weight);
        }
    }

    return Array.from(itemsMap.entries()).sort((a,b) => a[0] - b[0]);
};
