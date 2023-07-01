//1381. Design a Stack With Increment Operation
//https://leetcode.com/problems/design-a-stack-with-increment-operation
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;

    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    const val = this.stack.pop();

    return val ? val : -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if (k < this.stack.length) {
        for (let x=0; x < k; x++) {
            this.stack[x] += val;
        }
    } else {
        for (let x=0; x < this.stack.length; x++) {
            this.stack[x] += val;
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
