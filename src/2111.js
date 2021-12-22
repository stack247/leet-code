/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// 12.22.2021 - incomplete.

var kIncreasing = function(arr, k) {
    // Attempt 1: comparing i-k, i and i+k and modify the lowest.
    let numOps = 0;
    for (let i = k; i < arr.length; i++) {
        let a = arr[i-k], b = arr[i], c = arr[i+k];
        let r = a <= b;
        if (!r) {
            let amb = Math.max(a, b) - Math.min(a, b);
            let bmc = isNaN(c) ? 0 : Math.max(b, c) - Math.min(b, c);
            console.log('a ' + a);
            console.log('b ' + b);
            console.log('c ' + c);
            console.log('amb ' + amb);
            console.log('bmc ' + bmc);

            if (amb >= bmc) {
                let amamb = a - amb;
                arr[i-k] = amamb > 0 ? amamb : a + amb;
            }
            else if (bmc >= amb) {
                let bmbmc = b - bmc;
                arr[i] = bmbmc > 0 ? bmbmc : b + bmc;
            }

            console.log('mod arr ' + arr);

            numOps += 1;

            console.log('----------------');
        }
        //console.log(r);
    }

    console.log('arr ' + arr);
    return numOps;
};

//let arr = [5,4,3,2,1], k = 1; // answer is 4
//let arr = [4,1,5,2,6,2], k = 2; // answer is 0
//let arr = [4,1,5,2,6,2], k = 3; // answer is 2
let arr = [12,6,12,6,14,2,13,17,3,8,11,7,4,11,18,8,8,3], k = 1; // answer is 12
//let arr = [12,6,12,6,14], k = 1;
console.log('org arr ' + arr);
console.log('----------------');
let res = kIncreasing(arr, k);
console.log(res);