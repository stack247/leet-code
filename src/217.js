/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let idx = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!idx.has(nums[i])) {
            idx.add(nums[i]);
        }
        else {
            return true;
        }
    }
    return false;
};

let numbers = [1, 2, 2, 3];
let res = containsDuplicate(numbers);
console.log(res);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//console.log(0 === -0);
//console.log(+0 === -0);
//console.log(0 == -0);
//console.log(+0 == -0);