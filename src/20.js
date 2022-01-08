/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let q = [], openBracketsIdx = ['(', '{', '['], closedBracketsIdx = [')', '}', ']'], openBrackets = new Set(openBracketsIdx), closedBrackets = new Set(closedBracketsIdx);
    for (let i = 0; i < s.length; i++) {
        let l = s[i];
        if (openBrackets.has(l))
            q.push(l);
        if (closedBrackets.has(l))
        {
            if (q.length == 0)
                return false;

            let ob = q.pop();
            if (closedBracketsIdx.indexOf(l) != openBracketsIdx.indexOf(ob))
                return false;
        }
    }

    if (q.length != 0)
        return false;
    
    return true;

    // Attempt 1: using math count.
    /*
    let counter = 0, openBrackets = new Set(['(', '{', '[']), closedBrackets = new Set([')', '}', ']']);
    for (let i = 0; i < s.length; i++) {
        if (openBrackets.has(s[i]))
            counter += 1;
        if (closedBrackets.has(s[i]))
            counter -= 1;
    }
    if (counter != 0)
        return false;
    return true;
    */
};

//https://leetcode.com/problems/valid-parentheses/
//let str = "()"; // answer is true
//let str = "()[]{}"; // answer is true
let str = "(]"; // answer is false
let res = isValid(str);

console.log('-------------------');
console.log('parameters: ' + str);
console.log(res);
