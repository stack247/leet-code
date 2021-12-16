/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let shortNums, longNums, res = [];
    if (nums1.length <= nums2.length) {
        shortNums = nums1;
        longNums = nums2;
    }
    else {
        shortNums = nums2;
        longNums = nums1;
    }
    
    // Attempt 1 - mark used array as `undefined`
    /*
    for (let i = 0; i < shortNums.length; i++) {
        for (let j = 0; j < longNums.length; j++) {
            if (longNums[j] != undefined && shortNums[i] == longNums[j]) {
                res.push(shortNums[i]);
                longNums[j] = undefined;
                break;
            }
        }
    }
    */
   
    // Attempt 2 - remove used value in longer-array.
    /*
    for (let i = 0; i < shortNums.length; i++) {
        for (let j = 0; j < longNums.length; j++) {
            if (shortNums[i] == longNums[j]) {
                res.push(shortNums[i]);
                longNums.splice(j, 1);
                break;
            }
        }
    }
    */

    // Attempt 3 - use indexOf
    // https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1597339/JavaScript%3A-manipulate-arrays-in-place-with-explanation
    for (let i = 0; i < shortNums.length; i++) {
        let idx = longNums.indexOf(shortNums[i]);
        if (idx !== -1) {
            res.push(shortNums[i]);
            longNums.splice(idx, 1);
        }
    }
    
    return res;
};

var numbers1 = [1,2,2,1], numbers2 = [2,2];
//var numbers1 = [4,9,5], numbers2 = [9,4,9,8,4];
//var numbers1 = [3,1,2], numbers2 = [1,1];
var res = intersect(numbers1, numbers2);
console.log(res);