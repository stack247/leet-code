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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let res=false, lq=[], rq=[];
    
    if (root.left)
        lq.push(root.left);
    if (root.right)
        rq.push(root.right);
    if (lq.length !== rq.length)
        return res;
    
    while (lq.length > 0 || rq.length > 0) {
        let l = lq.pop();
        let r = rq.pop();
        //console.log(l.val);
        //console.log(r.val);
        if ((!l && r ) || (l && !r) || (l && r && l.val && r.val && l.val !== r.val)) {
            //console.log(l);
            //console.log(r);
            return res;
        }
        
        if (l) {
            lq.push(l.left);
            lq.push(l.right);
        }
        if (r) {
            rq.push(r.right);
            rq.push(r.left);
        }
        
        //if (lq.length !== rq.length)
        //    return res;
    }
    
    res = true;
    return res;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/symmetric-tree/
let rootObj = new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)), new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null))); // answer is true
//let rootObj = new TreeNode(1, new TreeNode(2, null, new TreeNode(3, null, null)), new TreeNode(2, null, new TreeNode(3, null, null))); // answer is false
let res = isSymmetric(rootObj);

console.log('-------------------');
//console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
