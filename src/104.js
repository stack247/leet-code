/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let l=0, c=root, q=[], s=[];
    while (c) {
        if (c.left) {
            s.push(c.left);
        }
        if (c.right) {
            s.push(c.right);
        }
        if (q.length == 0) {
            q = s;
            s = [];
            l += 1;
        }
        c = q.pop();
    }
    return l;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/
let rootObj = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))); // answer is 3
//let rootObj = new TreeNode(1, null, new TreeNode(2, null, null)); // answer is 2
let res = maxDepth(rootObj);

console.log('-------------------');
console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
