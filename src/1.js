/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let remNum = target - nums[i];
        let remFindNum = findNum(nums, remNum, i);
        if (remFindNum != undefined) {
            res.push(i);
            res.push(remFindNum);
            return res;
        }
    }
};

var findNum = function (nums, numToFind, idxStart) {
    if (idxStart == nums.length) return undefined;
    for (let i = idxStart + 1; i < nums.length; i++) {
        if (nums[i] == numToFind)
            return i;
    }
    return undefined;
};

var numbers = [2,7,11,15];
//var numbers = [3,2,4];
var numbers = [3,3];
var target = 6;
var res = twoSum(numbers, target);
console.log(numbers);
console.log(res);