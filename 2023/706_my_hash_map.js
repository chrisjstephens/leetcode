//706. Design HashMap
//https://leetcode.com/problems/design-hashmap
var MyHashMap = function() {
    this.values = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if (this.values.has(key)) {
        this.values.set(key, value);
    } else {
        this.values.set(key, value);
    }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if (this.values.has(key)) {
        return this.values.get(key);
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.values.delete(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
