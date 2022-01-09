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
    // Preorder / depth-first traversal.
    let c = root, pq = [], r = [];
    while (c !== null && c !== undefined) {
        //console.log(c.val + ' ' + c.left + ' ' + c.right);
        r.push(c.val);
        if (c.left !== null) {
            if (c.right !== null)
                pq.push(c.right);
            c = c.left;
            continue;
        }
        if (c.right !== null) {
            c = c.right;
            continue;
        }
        c = pq.pop();
        //console.log(q);
        //console.log(c);
        //break;
    }

    // Level order / breadth-first traversal.
    // https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
    /*
    let c = root, q = [], r = [];
    while (c !== null) {
        //console.log(c.val);
        r.push(c.val);
        if (c.left !== null)
            q.push(c.left);
        if (c.right !== null)
            q.push(c.right);
        c = q.shift();
        //console.log(q);
        //console.log(c);
        //break;
    }
    */

    //console.log('q ' + q);
    //console.log('res ' + r);
    return r;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/binary-tree-preorder-traversal/
//let root = [1,null,2,3] // answer is [1,2,3]
//let rootObj = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
let root = [1,4,2,3] // answer is [1,4,2,3]
let rootObj = new TreeNode(1, new TreeNode(4, new TreeNode(2, null, null), null), new TreeNode(3, null, null));
//let root = [1,2,4,5,3] // answer is [1,2,4,5,3]
//let rootObj = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)), new TreeNode(3, null, null));
//let root = [] // answer is []
//let root = [1] // answer is [1]
let res = preorderTraversal(rootObj);

console.log('-------------------');
console.log('root ' + root);
console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
