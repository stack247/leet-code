/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for (let i = 1; i <= numRows; i++) {
        let subRes = [];
        
        for (let j = 1; j <= i; j++) {
            if (j == 1)
                subRes.push(1);
            else if (j == i)
                subRes.push(1);
            else {
                // `i-2` because our index start with 1.
                let prevRes = res[i-2];
                subRes.push(prevRes[j-2] + prevRes[j-1]);
            }
        }

        res.push(subRes);
    }
    return res;
};

let number = 5;
let res = generate(number);
console.log(res);