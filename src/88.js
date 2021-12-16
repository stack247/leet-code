/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Attempt 2 - Assume we can alternate the insert between 2 arrays.
// Incomplete
/*
var merge = function(nums1, m, nums2, n) {
    let resSorted = [], fifoQueue = [], stage = [];
    for (let i = 0; i < Math.max(m, n); i++) {
        let mNum, nNum;
        if (i < m)
            mNum = nums1[i];
        if (i < n)
            nNum = nums2[i];

        let qNum = fifoQueue.shift();
        console.log(fifoQueue.length); // should always be 0, or 1
        let minNum = Math.min(mNum, nNum, qNum);
        
        stage = [];
        fifoQueue.push(mNum, nNum, qNum);
        
        
        fifoQueue = [];
        if (mNum == minNum)
            fifoQueue.push(mNum);

        resSorted.push(minNum);
    }
    console.log(resSorted);
};
*/

// Attempt 3 - https://leetcode.com/problems/merge-sorted-array/discuss/1592608/3-line-Javascript-solution
var merge = function(nums1, m, nums2, n) {
    let idx = m+n-1
    let left = m-1
    let right = n-1
    while(right>=0){
        //console.log(idx);
        //console.log(left);
        //console.log(right);
        nums1[idx--] = nums1[left] > nums2[right] ? nums1[left--] : nums2[right--];
    }
};

// Attempt 1 - Merge and sort
/*
var merge = function(nums1, m, nums2, n) {
    let resUnsorted = [];
    for (let i = 0; i < m; i++) {
        resUnsorted.push(nums1[i]);
    }
    for (let j = 0; j < n; j++) {
        resUnsorted.push(nums2[j]);
    }
    //console.log(resUnsorted);
    
    // Sort it
    resUnsorted.sort(function(a, b) { return a - b; });
    
    for (let i = 0; i < m + n; i++)
    {
        nums1.shift();
        nums1.push(resUnsorted[i]);
    }
};
*/

//let numbers1 = [1,2,3,0,0,0], m = 3, numbers2 = [2,5,6], n = 3;
//let numbers1 = [1,2,3,0,0], m = 3, numbers2 = [2,5], n = 2;
//let numbers1 = [1,2,3,0,0,0,0], m = 3, numbers2 = [2,5,6,7], n = 4;
let numbers1 = [1,9,9,0,0,0,0], m = 3, numbers2 = [2,5,7,8], n = 4;
merge(numbers1, m, numbers2, n);
console.log(numbers1);
console.log(numbers2);
console.log(numbers1);