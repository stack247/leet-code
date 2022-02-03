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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let r=[], c=root, n=[], l=0;
    while (c) {
        cr=[];
        cr.push(c.val);

        if (c.left) {
            n.push(c.left);
        }
        if (c.right) {
            n.push(c.right);
        }

        r.push(cr);

        c = n.pop();
        r.push(cr);

        break;
    }
    return r;
};
    

























// Level order / breadth-first traversal.
    // https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
    /*
    let c = root, q = [], r = [];
    while (c !== null && c !== undefined) {
        //console.log(c.val);
        r.push(c.val);
        if (c.left !== null)
            q.push(c.left);
        if (c.right !== null)
            q.push(c.right);
        c = q.shift();
        //console.log(q);
        //console.log(c);
    }
    */

    //console.log('q ' + q);
    //console.log('res ' + r);

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/binary-tree-level-order-traversal/
let rootObj = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))); // answer is [[3],[9,20],[15,7]]
//let rootObj = new TreeNode(1, null, null); // answer is [[1]]
let res = levelOrder(rootObj);

console.log('-------------------');
console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
