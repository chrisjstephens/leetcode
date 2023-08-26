//933. Number of Recent Calls
//https://leetcode.com/problems/number-of-recent-calls
var RecentCounter = function() {
    this.count = 0;
    this.request = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let count = 0;
    let minVal = t - 3000;

    this.request.push(t);

    for (let i = 0; i < this.request.length; i++) {
        if (this.request[i] >= minVal && this.request[i] <= t) count++
    }

    return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
