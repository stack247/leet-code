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
    let r=[], q=[], s=[], c=root, l=0;
    while (c) {
        //let rt = []; //, qt = [];
        if (c) {
            let rt = r[l];
            if (!rt) {
                rt = [];
                r.push(rt);
            }
            rt.push(c.val);
        }
        if (c.left) {
            s.push(c.left);
        }
        if (c.right) {
            s.push(c.right);
        }
        //console.log('s ' + s);
        // qp = q[l];
        // console.log('qp ' + qp);
        // if (!qp) {
        //     console.log('qp is none');
        //     q.push(qt);
        // }
        if (q.length == 0) {
            q = s;
            s = [];
            l += 1;
        }
        c = q.shift();
    }

    //console.log('r ' + r);
    //console.log('q ' + q);
    //console.log(q);
    //console.log('s ' + s);
    //console.log('l ' + l);

    return r;
};

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
console.log(res);
