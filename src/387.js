/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //let uniq = new Set();
    for (let i = 0; i < s.length; i++) {
        //if (!uniq.has(s[i]))
        //    uniq.add(s[i]);

        let sub = s[i], isUniq = true;
        let newS = s.substring(0, i) + s.substring(i + 1, s.length);
        //console.log(newS);

        for (let j = 0; j < newS.length; j++) {
            if (sub == newS[j]) {
                //console.log(newS[j]);
                isUniq = false;
                break;
            }
        }

        if (isUniq)
            return i;
    }

    return -1;

    //console.log(uniq);
};

//let str = "leetcode"; // answer is 0
//let str = "loveleetcode"; // answer is 2
let str = "aabb"; // answer is -1
let res = firstUniqChar(str);
console.log(res);