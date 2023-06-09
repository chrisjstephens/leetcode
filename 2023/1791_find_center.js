//1791. Find Center of Star Graph
//https://leetcode.com/problems/find-center-of-star-graph
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let edgeMap = new Map();

    for (let x = 0; x < edges.length; x++) {
        if (edgeMap.has(edges[x][0])) {
            edgeMap.set(edges[x][0], edgeMap.get(edges[x][0]) + 1);
        } else {
            edgeMap.set(edges[x][0], 1);
        }
    }

    for (let x = 0; x < edges.length; x++) {
        if (edgeMap.has(edges[x][1])) {
            edgeMap.set(edges[x][1], edgeMap.get(edges[x][1]) + 1);
        } else {
            edgeMap.set(edges[x][1], 1);
        }
    }

    const middlePoint = [...edgeMap].filter((x) => x[1] === edges.length).map(x => x[0]);

    return middlePoint;
};
