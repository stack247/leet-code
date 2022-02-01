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
var postorderTraversal = function(root) {
    // https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/1671288/JavaScript-Solutions-(Recursive-and-Iterative)
    let r=[], p=[], lastVisited;
    while (p.length > 0 || root) {
        if (root) {
            p.push(root);
            root = root.left;
        }
        else {
            let peekNode = p[p.length - 1];
            if (peekNode.right && peekNode.right !== lastVisited) {
                root = peekNode.right;
            }
            else {
                lastVisited = peekNode;
                r.push(peekNode.val);
                p.pop();
            }
        }
        //console.log('------------------');
    }
    return r;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/binary-tree-postorder-traversal/
//let rootObj = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)); // [1,2,3] answer is [2,3,1]
let rootObj = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null), null); // [1,null,2,3] answer is [3,2,1]
// [] answer is []
// [1] answer is [1]
let res = postorderTraversal(rootObj);

console.log('-------------------');
console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
