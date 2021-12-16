/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // The method iterate through given array.
    // `max` keeps the sum (of contiguous numbers) until it finds a "new start".
    // A "new start" is the start of a number of which the potential answer will be.
    // `sum` keeps the answer, which is the maximum total sum at any point.

    // https://leetcode.com/problems/maximum-subarray/discuss/1622222/100-ms-faster-than-53.20-or-48.6-MB-less-than-70.24
    // Kadanes algo: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
    let max, sum;
    // nums.forEach((value, index, array) => {
    //     max = (array[index] <= max + array[index]) ? max + array[index] : array[index];
    //     sum = sum >= max ? sum : max;
    // });

    // Translated from the LeetCode discussion
    for (let i=0; i < nums.length; i++)
    {
        let curNum = nums[i];
        let sumOfContiguous = max + curNum;

        console.log('curNum ' + curNum);
        console.log('maxCurNum ' + sumOfContiguous);
        console.log('max ' + max);
        console.log('sum ' + sum);

        if (curNum <= sumOfContiguous) {
            max = sumOfContiguous;
        }
        else {
            max = curNum;
        }

        if (sum >= max) {
            sum = sum;
        }
        else {
            sum = max;
        }

        console.log('max ' + max);
        console.log('sum ' + sum);
        console.log('-------------');
    }
    return sum;
};
//var numbers = [-2,1,-3,4,-1,2,1,-5,4]; // '1', '4' are "new start"
//var numbers = [-2,1,-3,4,-1,2,1,-5,-3,-1]; // '1', '4', '-1' are "new start"
var numbers = [-2,1,-3,4,-1,2,1,-5,4,4,9,-2]; // '1', '4', '-1' are "new start"
//var numbers = [-2,1,-3,-4,-1]; // '1', '-1' are "new start"
var res = maxSubArray(numbers);
console.log(numbers);
console.log(res);


// Attempt 1
/*
var maxSubArray = function (nums) {
    var curSum = 0;
    var prevSum;
    var maxSum = 0;
    var res = [];

    for (var i = 0; i < nums.length; i++)
    {
        var curNum = nums[i];
        if (res.length == 0 && i > 0)
            curSum = 0;
        
        res.push(curNum);

        var prevSum = curSum;
        curSum += nums[i];

        if (i > 0) {
            var prevNum = nums[i-1];
            if (prevSum > curSum) {
                //res.pop(curNum);
                res = [];
                maxSum = prevSum;
            }
            else {
                maxSum = curSum;
            }
        }
        else {
            maxSum = curSum;
        }
        
        console.log('prevNum ' + prevNum);
        console.log('curNum ' + curNum);
        console.log('prevSum ' + prevSum);
        console.log('curSum ' + curSum);
        console.log('maxSum ' + maxSum);
        console.log('res ' + res);
        console.log('--------');
    }
    return maxSum;
};

//var numbers = [-2,1,-3,4,-1,2,1,-5,4];
var numbers = [-2,1,-3,4,-1,2,1];
var res = maxSubArray(numbers);
console.log(numbers);
console.log(res);
*/