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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Attempt 1: depth-first traversal for each possible path
    let q=[],c=root,r=false,beforeLeafParent;
    while (c) {
        q.push(c);

        // Leaf
        if (!c.left && !c.right) {
            // Do the sum

            // If not the right path, go back up to parent
            c = beforeLeafParent;
        }
        
        // Always assume next node is leaf.
        beforeLeafParent = c;
        if (c.left);
            c = c.left;
        if (c.right);
            c = c.right;
    }
    return r;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/path-sum/
let rootObj = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7, null, null), new TreeNode(2, null, null)), null), new TreeNode(8, new TreeNode(13, null, null), new TreeNode(4, null, new TreeNode(1, null, null)))); // answer is true
let targetSum = 22;
//let rootObj = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)); // answer is false
//let targetSum = 5;
let res = hasPathSum(rootObj, targetSum);

console.log('-------------------');
//console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
