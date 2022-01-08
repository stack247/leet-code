
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
    // a = ['1'];
    //console.log(a);
    //console.log(a.peek);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //console.log(this.s1);
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //console.log(this.s1);
    if (this.s2.length == 0)
    {
        //console.log(this.s1);
        //console.log(this.s2);
        while (this.s1.length > 0) {
            let s1p = this.s1.pop();
            //console.log(s1p);
            this.s2.push(s1p);
        }
        //console.log(this.s2);
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    //console.log(this.s1);
    //return this.s1.peek;
    if (this.s2.length > 0)
        return this.s2[this.s2.length - 1];
    return this.s1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length == 0 && this.s2.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// https://leetcode.com/problems/implement-queue-using-stacks/
var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_2 = obj.peek();
var param_3 = obj.pop();
var param_4 = obj.empty();

console.log('-------------------');
console.log('obj ' + obj);
console.log('param_2 ' + param_2);
console.log('param_3 ' + param_3);
console.log('param_4 ' + param_4);
