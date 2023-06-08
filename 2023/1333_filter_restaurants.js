//1333. Filter Restaurants by Vegan-Friendly, Price and Distance
//https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance
/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    //[idi, ratingi, veganFriendlyi, pricei, distancei]
    let filtered = [];

    for (let x = 0; x < restaurants.length; x ++) {
        const VF = ((veganFriendly & restaurants[x][2] === veganFriendly) || !veganFriendly);

        if (VF && restaurants[x][3] <= maxPrice && restaurants[x][4] <= maxDistance) {
            filtered.push(restaurants[x]);
        }
    }

    return filtered.sort((a,b) => b[1] - a[1] || b[0] - a[0]).map(x => x[0]);
};
