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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    
};

// https://leetcode.com/problems/binary-tree-preorder-traversal/
let root = [1,null,2,3] // answer is [1,2,3]
//let root = [] // answer is []
//let root = [1] // answer is [1]
let res = preorderTraversal(root);

console.log('-------------------');
console.log('root ' + root);
console.log('res ' + res);
