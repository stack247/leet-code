/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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
};

//https://leetcode.com/problems/valid-parentheses/
//let str = "()"; // answer is true
//let str = "()[]{}"; // answer is true
let str = "(]"; // answer is false
let res = isValid(str);

console.log('-------------------');
console.log('parameters: ' + str);
console.log(res);
